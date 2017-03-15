<template>
  <basic-select :options="options"
                :selected-option="item"
                placeholder="select item"
                @select="onSelect"
                id="searchZone">
  </basic-select>
</template>
 
<script>
  import { BasicSelect } from 'vue-search-select'

  export default {
    data () {
      return {
        options: [
          { value: '1', text: 'Mathématiques' }
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