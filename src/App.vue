<template>
  <div id="app">
     <div class="navbar">
      <ul>
        <li><a @click="showNoteEnabled = true">Afficher les notes</a></li>
        <li><a @click="showNoteEnabled = false">Ajouter des notes</a></li>
      </ul>
    </div>
    <pre>{{showNoteEnabled}}</pre>
    <ShowNotes v-if="showNoteEnabled"></ShowNotes>
    <AddNotes v-else></AddNotes>
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
    },
    data () {
      return {
        showNoteEnabled: true
      }
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