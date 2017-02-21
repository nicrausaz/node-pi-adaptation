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
  export default {
    name: 'navbar',
    methods: {
      showShowNotesDiv: function () {
        console.log('will show div show')
      },
      showAddNotesDiv: function () {
        console.log('will show div add')
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