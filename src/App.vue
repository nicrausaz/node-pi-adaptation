<template>
  <div id="app">
    <Navbar></Navbar>
    <ShowNotes></ShowNotes>
  </div>
</template>

<script>
  import ShowNotes from './components/showNotes'
  import Navbar from './components/navbar'

  export default {
    name: 'app',
    components: {
      Navbar,
      ShowNotes
    }
  }

</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>