<template>
  <div class="addNotesTable">
    <form id="addNoteForm" method="POST" action="http://localhost:3000/api/addNote">

      <table>
        <tr>
          <td><label for="semestreSelect">Semestre:</label></td>
          <td><select name="semestreSelect">
                <option v-for="semestre in semestres">{{semestre.num}}</option>
              </select>
          </td>
        </tr>
        <tr>
          <td><label for="brancheSelect">Branche:</label></td>
          <td><select name="brancheSelect">
                <option v-for="branche in branches">{{branche.nom}}</option>
              </select>
          </td>
        </tr>
        <tr>
          <td><label for="noteSelect">Note:</label></td>
          <td><select name="noteSelect">
                <option v-for="note in notes">{{note.num}}</option>
              </select>
          </td>
        </tr>
        <tr>
          <td><input type="submit" /></td>
        </tr>
      </table>      
    </form>
  </div>
</template>

<script>
  export default {
    name: 'addNotesTable',
    data () {
      return {
        branches: [
          { nom: 'Mathématiques' },
          { nom: 'Physique' },
          { nom: 'Allemand' },
          { nom: 'Economie' },
          { nom: 'Anglais' },
          { nom: 'Français' }
        ],
        semestres: [
          { num: 1 },
          { num: 2 },
          { num: 3 },
          { num: 4 },
          { num: 5 },
          { num: 6 },
          { num: 7 },
          { num: 8 }
        ],
        notes: [
          { num: 1 },
          { num: 1.5 },
          { num: 2 },
          { num: 2.5 },
          { num: 3 },
          { num: 3.5 },
          { num: 4 },
          { num: 4.5 },
          { num: 5 },
          { num: 5.5 },
          { num: 6 }
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
    margin-left: 80%;
  }
</style>