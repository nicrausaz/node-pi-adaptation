<template>
  <div class="navbar">
    <ul>
      <li><a>Acceuil</a></li>
      <li><a @click="showShowNotesDiv">Afficher les notes</a></li>
      <li><a @click="showAddNotesDiv">Ajouter des notes</a></li>
    </ul>
  </div>
</template>

<script>
  const $ = require('jquery')
  export default {
    name: 'navbar',
    methods: {
      showShowNotesDiv: function () {
        $(document).ready(function () {
          console.log('will show div show')
          $('#showNotesTable').show(1000)
          $('#addNotesTable').hide(1000)
        })
      },
      showAddNotesDiv: function () {
        console.log('will show div add')
        $('#addNotesTable').show(1000)
        $('#showNotesTable').hide(1000)
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
  }
  /* Change the link color to #111 (black) on hover */
  
  li a:hover {
    background-color: #111;
  }
</style>