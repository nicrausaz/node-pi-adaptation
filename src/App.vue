<template>
  <div id="app">
    <Header></Header>
    <ShowNotes></ShowNotes>
    <Test></Test>
  </div>
</template>

<script>
  import ShowNotes from './components/showNotes'
  import Header from './components/header'
  import Test from './components/test'

  export default {
    name: 'app',
    components: {
      ShowNotes,
      Header
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