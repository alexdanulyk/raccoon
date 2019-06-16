<template lang="pug">
  div
    my-header
    main
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
