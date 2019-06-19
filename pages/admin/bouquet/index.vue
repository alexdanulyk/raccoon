<template lang="pug">
  div
    nuxt-link(:to="{name:'admin-bouquet-create'}") create
    ul
      li(v-for="bouquet, index in bouquets")
        nuxt-link(:to="{ name: 'admin-bouquet-id', params: { id: bouquet.iBouquetID } }") {{ bouquet.sBouquetTitle }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'admin',
  async asyncData () {
    let { data } = await axios.get('/api/bouquets/list')
    return data
  }
}
</script>