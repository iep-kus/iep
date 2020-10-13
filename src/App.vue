<template>
  <div id="app">
    <div>
      <navbar></navbar>
    </div>
    
    <div>
      <AppFooter></AppFooter>
    </div>
    
  </div>
</template>

<script>
import navbar from './components/navbar'
import cover_photo from './components/cover_photo'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  components: {
    navbar,AppFooter
  },
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      okres: [{ text: 'Vyber jeden', value: null}, 'Stara Lubovna', 'Presov', 'Kosice'],
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
    } 
  }
}
</script>

<style>
  
  
@font-face {
  font-family: 'montserrat';
  src: url('./assets/fonts/Montserrat/Montserrat-Regular.ttf');
}

@font-face {
  font-family: 'montserrat';
  src: url('./assets/fonts/Montserrat/Montserrat-Light.ttf');
}
 
 @font-face {
  font-family: 'montserrat';
  src: url('./assets/fonts/Montserrat/Montserrat-Bold.ttf');
}
 
 @font-face {
  font-family: 'roboto';
  src: url('./assets/fonts/Roboto/Roboto-Regular.ttf');
}
 
 

</style>
