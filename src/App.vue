<template>
  <div id="app">
    <div class="navbar">
      <ul>
        <li><a @click="showNoteEnabled = true">Afficher les notes</a></li>
        <li><a @click="showNoteEnabled = false">Ajouter des notes</a></li>
      </ul>
    </div>
    <ShowNotes v-if="showNoteEnabled"></ShowNotes>
    <AddNotes v-else></AddNotes>
    
    <!--<Toaster></Toaster>-->
  </div>
</template>

<script>
  import Navbar from './components/navbar'
  import ShowNotes from './components/showNotes'
  import AddNotes from './components/addNotes'
  // import Toaster from './components/toaster'

  export default {
    name: 'app',
    components: {
      Navbar,
      ShowNotes,
      AddNotes
      // Toaster
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
<style scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    cursor: pointer;
  }
  /* Change the link color to #111 (black) on hover */
  
  li a:hover {
    background-color: #111;
  }
</style>