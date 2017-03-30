<template>
  <div class="mdl-card__supporting-text">
    Semestre n°: {{semestre.number}}
    <div>{{noteList}}</div>
    <div>Moyenne semestre: {{moyenne}}</div>
  </div>
</template>

<script>
  export default {
    props: ['semestre'],
    computed: {
      noteList () {
        return this.semestre.notes.join(',')
      },
      moyenne () {
        return this.semestre.notes.reduce((p, c, i, a) => { return p + (c / a.length) }, 0)
      }
    }
  }
</script>
