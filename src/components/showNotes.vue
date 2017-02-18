<template>
  <div class="notesTable">
    {{msg}}
    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
      <thead>
        <th>Semestre</th>
        <th>Branche</th>
        <th>Note</th>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td class="mdl-data-table__cell--non-numeric">{{item.semestre}}</td>
          <td class="mdl-data-table__cell--non-numeric">{{item.branche}}</td>
          <td class="mdl-data-table__cell--non-numeric">{{item.note}}</td>
        </tr>
      </tbody>
    </table>
    <button>Edit</button>
    <button>Delete</button>
  </div>
</template>

<script>
  export default {
    name: 'notesTable',
    data () {
      return {
        msg: 'Notes:',
        items: [
          { semestre: 1, branche: 'maths', note: 5 },
          { semestre: 2, branche: 'allemand', note: 4.5 }
        ]
      }
    }
  }

</script>