<template lang="pug">
  #main
    my-header
    section
      nuxt
    my-footer
</template>

<script>
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/Footer.vue'

export default {
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style lang="scss">
#main {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "header" "section" "footer";
  header {

  }
  section {

  }
  footer {

  }
}
</style>