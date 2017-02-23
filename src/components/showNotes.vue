<template>
  <div class="showNotesTable" id="showNotesTable">
    <thead>
      <th>Semestre</th>
      <th>Branche</th>
      <th>Note</th>
    </thead>
    <tbody>
      <tr v-for="item in items">
        <td>{{item.semestre}}</td>
        <td>{{item.branche}}</td>
        <td>{{item.note}}</td>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'showNotesTable',
    data () {
      return {
        msg: 'Notes:',
        items: [] // onload return
      }
    },
    methods: {
    }
  }

</script>

<style scoped>
  .showNotesTable {
    margin-left: 20%;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  tr:hover {
    background-color: #f5f5f5
  }
</style>