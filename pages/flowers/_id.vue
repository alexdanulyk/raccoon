<template lang="pug">
  div
    h1 {{ flower.sFlowerTitle }}
    h2 {{ flower.iFlowerID }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/flowers/' + params.id)
      .then((res) => {
        return { flower: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  }
}
</script>
