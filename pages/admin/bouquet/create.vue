<template lang="pug">
  div
    form
      input(type="text" v-model="sBouquetTitle")
      button(type="submit" @click.stop.prevent="submit()") Submit
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'admin',
  data () {
    return {
      sBouquetTitle: null
    }
  },
  methods: {
    submit: async function () {
      let { data } = await axios.get('/api/bouquets/create', {
        params: {
          sBouquetTitle: this.sBouquetTitle
        }
      })
      // console.log(data)
      this.$router.push('/admin/bouquet/' + data.bouquet.iBouquetID)
    }
  }
}
</script>