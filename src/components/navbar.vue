<template>
  <div class="navbar">
    <ul>
      <li><a @click="showShowNotesDiv">Afficher les notes</a></li>
      <li><a @click="showAddNotesDiv">Ajouter des notes</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }

</script>