<template>
  <div class="notesTable">
    <table>
      <thead>
        <th>Semestre</th>
        <th>Branche</th>
        <th>Note</th>
      </thead>
      <tr v-for="item in items">
        <td>{{item.semestre}}</td>
        <td>{{item.branche}}</td>
        <td>{{item.note}}</td>
        <button>Edit</button>
        <button>Delete</button>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'notesTable',
    data () {
      return {
        items: [
          { semestre: 1, branche: 'maths', note: 5 },
          { semestre: 2, branche: 'allemand', note: 4.5 }
        ]
      }
    }
  }

</script>

<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
</style>