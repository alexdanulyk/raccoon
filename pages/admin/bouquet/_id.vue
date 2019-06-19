<template lang="pug">
  #bouquet_id
    #bouquet_id_header bouquet_id_header
    #bouquet_id_content
      template(v-if="bouquet")
        div
          input(v-model="bouquet.sBouquetTitle")
        div
          div(v-for="bouquet_size, bouquetSizeIndex in bouquet.bouquet_sizes" v-if="bouquet_size.destroy != true")
            div
              select(v-model="bouquet_size.iSizeID")
                option(v-for="size, size_index in sizes" :value="size.iSizeID") {{ size.sSizeTitle }}
              input(type="number" v-model="bouquet_size.iCost" required)
              button(type="button" @click.prevent="destroySize(bouquetSizeIndex)") destroy size
            div
              div(v-for="bouquet_flower, bouquetFlowerIndex in bouquet_size.bouquet_flowers" v-if="bouquet_flower.destroy != true")
                select(v-model="bouquet_flower.iFlowerID")
                  option(v-for="flower, flower_index in flowers" :value="flower.iFlowerID") {{ flower.sFlowerTitle }}
                select(v-model="bouquet_flower.iColorID")
                  option(v-for="color, color_index in colors" :value="color.iColorID") {{ color.sColorTitle }}
                input(type="number" v-model="bouquet_flower.iCount")
                button(type="button" @click.prevent="destroyFlower(bouquetSizeIndex, bouquetFlowerIndex)") destroy flower
              div
                button(type="button" @click.prevent="addFlower(bouquetSizeIndex)") add flower
          div
            button(type="button" @click.prevent="addSize()") add size
      pre {{ bouquet }}
    #bouquet_id_footer
      button(type="submit" @click.prevent="update()") update
      button(type="button" @click.prevent="destroy()") destroy
</template>

<script>
import axios from '~/plugins/axios'

export default {
  layout: 'admin',
  asyncData ({ params, error }) {
    return axios.get('/api/bouquets/item/' + params.id)
      .then((res) => {
        return res.data
      })
  },
  methods: {
    addSize: async function () {
      this.bouquet.bouquet_sizes.push({})
    },
    destroySize: async function (bouquetSizeIndex) {
      this.$set(this.bouquet.bouquet_sizes[bouquetSizeIndex], 'destroy', true)
    },
    addFlower: function (bouquetSizeIndex) {
      if (!this.bouquet.bouquet_sizes[bouquetSizeIndex].bouquet_flowers) {
        this.$set(this.bouquet.bouquet_sizes[bouquetSizeIndex], 'bouquet_flowers', [])
      }
      this.bouquet.bouquet_sizes[bouquetSizeIndex].bouquet_flowers.push({})
    },
    destroyFlower: function (bouquetSizeIndex, bouquetFlowerIndex) {
      this.$set(this.bouquet.bouquet_sizes[bouquetSizeIndex].bouquet_flowers[bouquetFlowerIndex], 'destroy', true)
    },
    update: async function () {
      axios.post('/api/bouquets/update/', {
        bouquet: this.bouquet
      }).then((response) => {
        this.$set(this, 'bouquet', response.data.bouquet)
      })
    },
    destroy: async function () {
      axios.get('/api/bouquets/destroy/', {
        params: {
          iBouquetID: this.bouquet.iBouquetID
        }
      }).then((response) => {
        this.$router.push('/admin/bouquet')
      })
    }
  }
}
</script>

<style lang="scss">
#bouquet_id {
  background: white;
  display: grid;
  height: 100%;
  grid-gap: 1px;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas: "bouquet_id_header" "bouquet_id_content" "bouquet_id_footer";
  overflow: hidden;
  #bouquet_id_header {
    background: #DDD;
  }
  #bouquet_id_content {
    background: #DDD;
    overflow: auto;
  }
  #bouquet_id_footer {
    background: #DDD;
  }
}
</style>
