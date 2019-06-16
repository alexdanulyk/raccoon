<template lang="pug">
  #catalog
    .filters
      .item
        .title Цветы
        .list
          label(v-for="flower, index in filters.flowers")
            input(type="checkbox" name="flowers" :value="flower.iFlowerID" v-model="selected.flowers" @change="submit")
            span {{ flower.sFlowerTitle }}
      .item
        .title Цветовая гамма
        .list
          label(v-for="color_scheme, index in filters.color_schemes")
            input(type="checkbox" name="color_schemes" :value="color_scheme.iColorSchemeID" v-model="selected.color_schemes" @change="submit")
            span {{ color_scheme.sColorSchemeTitle }}
        .list
          label(v-for="color, index in filters.colors")
            input(type="checkbox" name="colors" :value="color.iColorID" v-model="selected.colors" @change="submit")
            span {{ color.sColorTitle }}
      .item
        .title Размер букета
        .list
          label(v-for="size, index in filters.sizes")
            input(type="checkbox" name="sizes" :value="size.iSizeID" v-model="selected.sizes" @change="submit")
            span {{ size.sSizeTitle }}
      .item
        .title Стоимость букета
        .list
          label
            input(type="radio" name="costs" :value="null" v-model="selected.costs" @change="submit")
            span не важно
          label(v-for="cost, index in filters.costs")
            input(type="radio" name="costs" :value="cost.iCostID" v-model="selected.costs" @change="submit")
            span
              template(v-if="cost.iCostFrom") от {{ cost.iCostFrom }} 
              template(v-if="cost.iCostTo") до {{ cost.iCostTo }} 
              | рублей
    .bouquets
      .selected {{ selected }}
      .wrap
        .bouquet(v-for="bouquet, index in bouquets")
          .title
            nuxt-link(:to="{ name: 'bouquet-id', params: { id: bouquet.iBouquetID } }") {{ bouquet.sBouquetTitle }}
          .cost(v-if="bouquet.bouquet_sizes[0]") от {{ bouquet.bouquet_sizes[0].iCost }} рублей
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/catalog')
    return data
  },
  data () {
    return {
      selected: {
        flowers: [],
        color_schemes: [],
        colors: [],
        sizes: [],
        costs: null
      }
    }
  },
  methods: {
    submit: async function () {
      let { data } = await axios.get('/api/catalog', {
        params: this.selected
      })
      this.bouquets = data.bouquets
      // this.$router.push('/catalog?ddd=222')
    }
  }
}
</script>

<style lang="scss">
#catalog {
  display: flex;
  .filters {
    flex-basis: 225px;
    background: #DDDDDD;
    padding: 15px;
    flex-shrink: 0;
    .item {
      margin-bottom: 15px;
      .title {
        font-weight: bold;
        margin-bottom: 10px;
      }
      .list {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        label {
          display: flex;
          align-items: center;
          input {
            margin: 0 5px 0 0;
          }
          span {
            line-height: 20px;
          }
        }
      }
    }
  }
  .bouquets {
    flex-grow: 1;
    background: #CCCCCC;
    padding: 15px;
    .wrap {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: 1fr 1fr 1fr;
      .bouquet {
        padding: 10px;
        background: white;
      }
    }
  }
}
</style>
