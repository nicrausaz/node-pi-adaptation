<template>
  <div class="notesTable">
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
    name: 'notesTable',
    data () {
      return {
        msg: 'Notes:',
        items: []
      }
    },
    methods: {
    }
  }

</script>

<style>
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