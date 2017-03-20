<template>
  <basic-select :options="options"
                :selected-option="item"
                placeholder="Choisir une branche"
                @select="onSelect"
                id="searchZone">
  </basic-select>
</template>
 
<script>
  import { BasicSelect } from 'vue-search-select'
  import bus from './bus'

  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'Mathématiques' },
          { value: '2', text: 'Physique' },
          { value: '3', text: 'Allemand' },
          { value: '4', text: 'Economie' },
          { value: '5', text: 'Anglais' },
          { value: '6', text: 'Français' }
        ],
        searchText: '',
        item: {
          value: '',
          text: ''
        }
      }
    },
    methods: {
      onSelect (item) {
        this.item = item
        bus.$emit('selectedBranch', item.text)
      },
      reset () {
        this.item = {}
      },
      selectOption () {
        // select option from parent component
        this.item = this.options[0]
      }
    },
    components: {
      BasicSelect
    }
  }
</script>

<style scoped>
    #searchZone {
        margin-left: auto;
        margin-right: auto;
        width: 300px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>