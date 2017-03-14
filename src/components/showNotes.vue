<template>
  <div class="showNotesTable" id="showNotesTable">
    <div class="mdl-card mdl-shadow--2dp" v-for="item in items">
      <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">{{item.branche}}</h2>
      </div>
      <div class="mdl-card__supporting-text" v-if="items.length == 0">Aucune note</div>
      <div class="mdl-card__supporting-text" v-else>
        Semestre {{item.semestre}}:
        {{item.note}}
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click="deleteRecord">
          CLICK
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'showNotesTable',
    data () {
      return {
        items: []
      }
    },
    created () {
      this.$http.get('/api/listNotes').then((response) => {
        this.items = response.data
      })
    },
    methods: {
      deleteRecord () {
        this.$http.post('/api/deleteRecord').then((response) => {
        })
      }
    }
  }

</script>

<style scoped>
  .showNotesTable {
    display: block;
  }
</style>