<template>
  <div class="mdl-card mdl-shadow--8dp">
  <div class="mdl-card__title mdl-card--expand"><h2 class="mdl-card__title-text">{{item.nom}} {{moyenne}}</h2></div>
    <semestre v-for="semestre in item.semestres" :semestre="semestre"></semestre>
  </div>
</template>

<script>
  import Semestre from './semestre'
  export default {
    props: ['item'],
    components: {
      Semestre
    }
  }

</script>
