<template>
  <div class="addNotesTable" id="addNotesTable">
    <div>
      <table>
        <tr>
          <td><label for="semestreSelect">Semestre:</label></td>
          <td><select name="semestreSelect" v-model="note2add.semestre">
                <option v-for="semestre in 8">{{semestre}}</option>
              </select>
          </td>
        </tr>
        <tr>
          <td><label for="brancheSelect">Branche:</label></td>
          <td><select name="brancheSelect" v-model="note2add.branche">
                <option v-for="branche in branches">{{branche}}</option>
              </select>
          </td>
        </tr>
        <tr>
          <td><label for="noteSelect">Note:</label></td>
          <td><select name="noteSelect" v-model="note2add.note">
                <option v-for="note in notes">{{note}}</option>
              </select>
          </td>
        </tr>
        <tr>
          <td><button @click="sendNote">CLICK me</button></td>
        </tr>
        <div id="queryStatus"></div>
      </table>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'addNotesTable',
    methods: {
      sendNote () {
        this.$http.post('/api/addNote', this.note2add).then((response) => {
          console.log(response.data.msg)
          document.getElementById('queryStatus').innerHTML = response.data.msg
        })
      }
    },
    computed: {
      notes () {
        return [...Array(12).keys()].map(x => (x + 1) / 2).slice(1)
      }
    },
    data () {
      return {
        note2add: {
          note: 6,
          branche: 'Mathématiques',
          semestre: 4
        },
        branches: [
          'Mathématiques',
          'Physique',
          'Allemand',
          'Economie',
          'Anglais',
          'Français'
        ]
      }
    }
  }

</script>

<style scoped>
  table {
    text-align: left;
  }
  
  .addNotesTable {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    padding-top: 40px;
  }
</style>