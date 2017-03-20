<template>
  <div class="showNotesTable" id="showNotesTable">
    <Search></Search>
    <div class="mdl-card mdl-shadow--8dp" v-for="item in items" v-if="selectedBranch == item.branche || selectedBranch == ''">
      <div v-if="items.length != 0" class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">{{item.branche}}</h2>
      </div>
      <div class="mdl-card__supporting-text">
          Semestre {{item.semestre}}:
          Note: {{item.note}}
      </div>     
    </div>
    <div v-else class="noContentMessage">Aucune note</div>
  </div>
</template>

<script>
  import Search from './search'
  import bus from './bus'

  export default {
    name: 'showNotesTable',
    data () {
      return {
        items: [],
        selectedBranch: ''
      }
    },
    created () {
      this.$http.get('/api/getNotes').then((response) => {
        this.items = response.data
        console.log(this.items.length)
      })
      bus.$on('selectedBranch', (text) => {
        this.selectedBranch = text
      })
    },
    methods: {
      // deleteRecord () {
      //   this.$http.post('/api/deleteRecord').then((response) => {
      //   })
      //   },
    },
    components: {
      Search
    }
  }

</script>

<style scoped>
  .mdl-card {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 0px;
    display: inline-block;
  }

  .noContentMessage{
    font-size: 40px;
    width: 300px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -70px 0 0 -170px;
  }
</style>