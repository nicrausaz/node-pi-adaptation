<template>
  <div class="addNotesTable" id="addNotesTable">
    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Ajouter une note</h2>
      </div>
      <div class="mdl-card__supporting-text">

          <label for="semestreSelect">Semestre:</label>
          <select name="semestreSelect" v-model="note2add.semestre">
              <option v-for="semestre in 8">{{semestre}}</option>
          </select>

          <label for="brancheSelect">Branche:</label>
          <select name="brancheSelect" v-model="note2add.branche">
              <option v-for="branche in branches">{{branche}}</option>
          </select>
          
          <label for="noteSelect">Note:</label>
          <select name="noteSelect" v-model="note2add.note">
              <option v-for="note in notes">{{note}}</option>
          </select>

      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="sendNote">
          Ajouter
        </a>
      </div>
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
          // document.getElementById('queryStatus').innerHTML = response.data.msg
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
  .addNotesTable {
    margin-left: auto;
    margin-right: auto;
    width: 300px;
    padding-top: 40px;
  }
  select {
    font-family: inherit;
    background-color: transparent;
    width: 100%;
    padding: 4px;
    font-size: $select-font-size;
    color: $select-color;
    border: none;
    border-bottom: 1px solid $select-border-color;
  }
</style>