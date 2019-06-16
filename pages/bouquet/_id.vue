<template lang="pug">
  div
    h1 {{ bouquet.sBouquetTitle }}
    pre {{ bouquet }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/bouquets/' + params.id)
      .then((res) => {
        return { bouquet: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  }
}
</script>
