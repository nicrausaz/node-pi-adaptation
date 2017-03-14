<template>
  <div class="toaster">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: 'toaster',
    data () {
      return {
        msg: 'Note ajoutée'
      }
    }
  }
</script>
<style scoped>
.toaster {
    background-color: green;
}
</style>