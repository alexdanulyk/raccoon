<template lang="pug">
  div
    ul
      li(v-for="flower, index in flowers")
        nuxt-link(:to="{ name: 'flowers-id', params: { id: flower.iFlowerID }}") {{ flower.sFlowerTitle }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/flowers')
    return { flowers: data }
  }
}
</script>
