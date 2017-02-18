<template>
  <div id="app">
    <ShowNotes></ShowNotes>
  </div>
</template>

<script>
  import ShowNotes from './components/showNotes'

  export default {
    name: 'app',
    components: {
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