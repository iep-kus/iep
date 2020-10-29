<template>
    <div>
  <b-card bg-variant="light">
    <b-form-group
      label-cols-lg="3"
      label="Auto"
      label-size="lg"
      label-class="font-weight-bold pt-0"
      class="mb-0"
    >
      <b-form-group
        label-cols-sm="3"
        label="Koľko kilometrov ročne najazdíte?"
        label-align-sm="right"
        label-for="spotreba"
      >
        <b-form-input id="kilometre"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Aká je reálna spotreba Vášho auta?"
        label-align-sm="right"
        label-for="spotreba"
      >
        <b-form-input id="spotreba"></b-form-input>
      </b-form-group>

      <b-form-group
        label-cols-sm="3"
        label="Aký je priemerný počet osôb v aute?"
        label-align-sm="right"
        label-for="kapacita"
      >
        <b-form-input id="range-1" v-model="kapacita1" type="range" min="0" max="9"></b-form-input>
        <div class="mt-2">Value: {{ kapacita1 }}</div>
      </b-form-group>

      
    </b-form-group>
  </b-card>
</div>
</template>

<script>
export default {
    name: 'CarCard',
}
</script>

<style scoped>


</style>