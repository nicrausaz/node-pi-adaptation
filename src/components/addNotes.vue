<template>
  <div class="notesTable">
    <select>
        <option v-for="semestre in semestres">{{semestre.num}}</option>
    </select>
    <select>
        <option v-for="branche in branches">{{branche.nom}}</option>
    </select>
    <select>
        <option v-for="note in notes">{{note.num}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'notesTable',
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

<style>

</style>