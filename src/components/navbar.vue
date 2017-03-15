<template>
  <div class="navbar">
    <ul>
      <li><a @click="showNoteEnabled = true">Afficher les notes</a></li>
      <li><a @click="showNoteEnabled = false">Ajouter des notes</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        showNoteEnabled: true
      }
    }
  }

</script>

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