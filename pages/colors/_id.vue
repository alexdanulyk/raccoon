<template lang="pug">
  div
    h1 {{ color.sColorTitle }}
    h2 {{ color.iColorID }}
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/colors/' + params.id)
      .then((res) => {
        return { color: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Not found' })
      })
  }
}
</script>
