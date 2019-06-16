<template lang="pug">
  div
    ul
      li(v-for="color, index in colors")
        nuxt-link(:to="{ name: 'colors-id', params: { id: color.iColorID }}") {{ color.sColorTitle }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/colors')
    return { colors: data }
  }
}
</script>
