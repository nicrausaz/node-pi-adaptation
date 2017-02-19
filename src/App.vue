<template>
  <div id="app">
    <Navbar></Navbar>
    <ShowNotes></ShowNotes>
    <AddNotes></AddNotes>
  </div>
</template>

<script>
  import Navbar from './components/navbar'
  import ShowNotes from './components/showNotes'
  import AddNotes from './components/addNotes'

  export default {
    name: 'app',
    components: {
      Navbar,
      ShowNotes,
      AddNotes
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