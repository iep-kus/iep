<template>
  <div class="sankey-component">
    <div class="sankey-status" aria-live="polite">
      <template v-if="activeLink">
        <strong>{{ activeLink.source }} → {{ activeLink.target }}</strong>
        <span>{{ formatNumber(activeLink.value) }} ton</span>
      </template>
      <template v-else>
        Prejdite kurzorom alebo ťuknite na prúd pre presnú hodnotu.
      </template>
    </div>

    <div class="sankey-scroll">
      <svg
        class="sankey-svg"
        :viewBox="`0 0 ${width} ${height}`"
        role="img"
        aria-label="Materiálové toky komunálneho odpadu v roku 2021 v tonách"
      >
        <text
          v-for="heading in headings"
          :key="heading.text"
          :x="heading.x"
          y="24"
          :text-anchor="heading.anchor"
          class="column-heading"
        >
          {{ heading.text }}
        </text>

        <g class="links">
          <path
            v-for="link in layout.links"
            :key="link.id"
            :d="link.path"
            :stroke="link.color"
            :stroke-width="link.width"
            :class="{ active: activeLink && activeLink.id === link.id }"
            class="sankey-link"
            fill="none"
            tabindex="0"
            :aria-label="`${link.source} do ${link.target}: ${formatNumber(link.value)} ton`"
            @mouseenter="activeLink = link"
            @mouseleave="activeLink = null"
            @focus="activeLink = link"
            @blur="activeLink = null"
            @click.stop="activeLink = link"
          >
            <title>{{ link.source }} → {{ link.target }}: {{ formatNumber(link.value) }} ton</title>
          </path>
        </g>

        <g v-for="node in layout.nodes" :key="node.name" class="sankey-node">
          <rect
            :x="node.x"
            :y="node.y"
            :width="nodeWidth"
            :height="node.height"
            :fill="node.color"
            rx="2"
          >
            <title>{{ node.name }}: {{ formatNumber(node.value) }} ton</title>
          </rect>
          <text
            :x="node.labelX"
            :y="node.labelY"
            :text-anchor="node.anchor"
            class="node-label"
          >
            <tspan :x="node.labelX">{{ node.name }}</tspan>
            <tspan :x="node.labelX" dy="19" class="node-value">
              {{ formatNumber(node.value) }} t
            </tspan>
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SankeyComponent',
  props: {
    links: { type: Array, required: true },
    columns: { type: Array, required: true },
    colors: { type: Object, default: () => ({}) }
  },
  data() {
    return {
      activeLink: null,
      width: 1100,
      height: 560,
      nodeWidth: 18
    }
  },
  computed: {
    headings() {
      return [
        { text: 'Spôsob zberu', x: 20, anchor: 'start' },
        { text: 'Zložka odpadu', x: this.width / 2, anchor: 'middle' },
        { text: 'Spôsob nakladania', x: this.width - 20, anchor: 'end' }
      ]
    },
    layout() {
      const columnX = [20, 520, this.width - 38]
      const gap = [24, 12, 24]
      const plotTop = 54
      const plotHeight = this.height - plotTop - 28
      const nodeValues = {}

      this.columns.flat().forEach(name => {
        const incoming = this.links
          .filter(link => link.target === name)
          .reduce((sum, link) => sum + link.value, 0)
        const outgoing = this.links
          .filter(link => link.source === name)
          .reduce((sum, link) => sum + link.value, 0)
        nodeValues[name] = Math.max(incoming, outgoing)
      })

      const scale = Math.min(...this.columns.map((column, index) => {
        const total = column.reduce((sum, name) => sum + nodeValues[name], 0)
        return (plotHeight - gap[index] * (column.length - 1)) / total
      }))

      const nodes = []
      const nodeMap = {}
      this.columns.forEach((column, columnIndex) => {
        const occupiedHeight = column.reduce((sum, name) => sum + nodeValues[name] * scale, 0) +
          gap[columnIndex] * (column.length - 1)
        let y = plotTop + (plotHeight - occupiedHeight) / 2

        column.forEach(name => {
          const nodeHeight = nodeValues[name] * scale
          const anchor = columnIndex === 0 ? 'start' : columnIndex === 2 ? 'end' : 'start'
          const labelX = columnIndex === 0
            ? columnX[columnIndex] + this.nodeWidth + 10
            : columnIndex === 2
              ? columnX[columnIndex] - 10
              : columnX[columnIndex] + this.nodeWidth + 10
          const node = {
            name,
            value: nodeValues[name],
            columnIndex,
            x: columnX[columnIndex],
            y,
            height: nodeHeight,
            color: this.colors[name] || '#fb8622',
            anchor,
            labelX,
            labelY: y + nodeHeight / 2 - 5
          }
          nodes.push(node)
          nodeMap[name] = node
          y += nodeHeight + gap[columnIndex]
        })
      })

      const sourceOffsets = {}
      const targetOffsets = {}
      const preparedLinks = this.links.map((link, index) => ({
        ...link,
        id: `${index}-${link.source}-${link.target}`,
        width: Math.max(1, link.value * scale)
      }))

      const assignOffsets = (offsets, groupKey, sortKey) => {
        preparedLinks
          .slice()
          .sort((a, b) => {
            const groupDifference = nodeMap[a[groupKey]].y - nodeMap[b[groupKey]].y
            return groupDifference || nodeMap[a[sortKey]].y - nodeMap[b[sortKey]].y
          })
          .forEach(link => {
            const key = link[groupKey]
            link[groupKey === 'source' ? 'sourceOffset' : 'targetOffset'] = offsets[key] || 0
            offsets[key] = (offsets[key] || 0) + link.width
          })
      }

      assignOffsets(sourceOffsets, 'source', 'target')
      assignOffsets(targetOffsets, 'target', 'source')

      const laidOutLinks = preparedLinks.map(link => {
        const source = nodeMap[link.source]
        const target = nodeMap[link.target]
        const sourceX = source.x + this.nodeWidth
        const targetX = target.x
        const sourceY = source.y + link.sourceOffset + link.width / 2
        const targetY = target.y + link.targetOffset + link.width / 2
        const curveX = sourceX + (targetX - sourceX) * 0.5
        return {
          ...link,
          // Farba sleduje materiál v strednom stĺpci cez celý tok.
          color: source.columnIndex === 0
            ? (this.colors[link.target] || target.color)
            : (this.colors[link.source] || source.color),
          path: `M ${sourceX} ${sourceY} C ${curveX} ${sourceY}, ${curveX} ${targetY}, ${targetX} ${targetY}`
        }
      })

      return { nodes, links: laidOutLinks }
    }
  },
  methods: {
    formatNumber(value) {
      return Number(value).toLocaleString('sk-SK', { maximumFractionDigits: 0 })
    }
  }
}
</script>

<style scoped>
.sankey-component {
  color: #595959;
  width: 100%;
}

.sankey-status {
  align-items: baseline;
  display: flex;
  gap: 0.65rem;
  justify-content: center;
  min-height: 28px;
  text-align: center;
}

.sankey-status strong {
  color: #3f3f3f;
  font-family: "chivo-bold";
}

.sankey-status span {
  color: #fb8622;
  font-family: "chivo-bold";
}

.sankey-scroll {
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.sankey-svg {
  display: block;
  min-width: 820px;
  width: 100%;
}

.column-heading {
  fill: #595959;
  font-family: "chivo-bold";
  font-size: 16px;
}

.sankey-link {
  opacity: 0.35;
  outline: none;
  transition: opacity 0.18s ease;
}

.sankey-link:hover,
.sankey-link:focus,
.sankey-link.active {
  opacity: 0.82;
}

.sankey-node rect {
  stroke: #ffffff;
  stroke-width: 1;
}

.node-label {
  fill: #3f3f3f;
  font-family: "chivo-bold";
  font-size: 14px;
  paint-order: stroke;
  stroke: rgba(255, 255, 255, 0.92);
  stroke-linejoin: round;
  stroke-width: 4px;
}

.node-value {
  fill: #595959;
  font-family: "chivo";
  font-size: 13px;
}

@media only screen and (max-width: 768px) {
  .sankey-status {
    align-items: center;
    flex-direction: column;
    font-size: 0.9rem;
    gap: 0.15rem;
    min-height: 50px;
  }
}
</style>
