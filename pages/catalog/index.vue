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
      .load(v-if="load") loading...
      .wrap(v-if="bouquets.docs.length")
        .list
          .bouquet(v-for="bouquet, index in bouquets.docs")
            .title
              nuxt-link(:to="{ name: 'bouquet-id', params: { id: bouquet.iBouquetID } }") {{ bouquet.sBouquetTitle }}
            //- .cost(v-if="bouquet.bouquet_sizes[0]")
              template(v-if="bouquet.bouquet_sizes.length > 1") от 
              | {{ bouquet.bouquet_sizes[0].iCost }}
              | рублей
        .buttonMore(v-if="bouquets.limit < bouquets.total")
          button.more(@click="loadNewPageCatalog" :disabled="load") Показать еще
      template(v-else) Не найдено
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({route, params}) {
    let { data } = await axios.get('/api/catalog', {
      params: route.query
    })
    data.load = false
    return data
  },
  methods: {
    submit: async function () {
      this.$set(this, 'load', true)
      this.$set(this.selected, 'page', null)
      let { data } = await axios.get('/api/catalog', {
        params: this.selected
      })
      this.$set(this, 'load', false)
      this.$set(this, 'bouquets', data.bouquets)
      this.$router.push('/catalog?' + String(data.url))
    },
    loadNewPageCatalog: async function () {
      this.$set(this, 'load', true)
      // console.log(this.selected.page)
      if (!this.selected.page) {
        this.$set(this.selected, 'page', '1-2')
        // this.selected.page = '1-2'
      } else {
        let page = this.selected.page.split('-')
        this.$set(this.selected, 'page', Number(page[0]) + '-' + (Number(page[1]) + 1))
        // console.log(page)

        // let page = this.selected.page.split('-')
        // console.log(page)
      }
      // this.$set(this.selected, 'page', 2)
      // Vue.set(this.selected, 'page', 1)
      // this.selected.page = 1
      let { data } = await axios.get('/api/loadNewPageCatalog', {
        params: this.selected
      })
      this.$set(this, 'bouquets', data.bouquets)
      // data.bouquets.docs.forEach(bouquet => {
      //   this.bouquets.docs.push(bouquet)
      // })
      this.$router.push('/catalog?' + String(data.url))
      // console.log(data)
      this.$set(this, 'load', false)
    }
  }
}
</script>

<style lang="scss">
#catalog {
  height: 100%;
  display: grid;
  grid-template-columns: 225px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: ".filters" ".bouquets";
  .filters {
    background: #DDDDDD;
    padding: 15px;
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
    background: #CCCCCC;
    padding: 15px;
    position: relative;
    .load {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
      font-size: 11px;
      line-height: 11px;
      padding: 2px;
      background: blue;
      color: white;
    }
    .wrap {
      background: red;
      .list {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        @media (max-width: 1200px) {
          grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 800px) {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 500px) {
          grid-template-columns: 1fr;
        }
        .bouquet {
          padding: 100px 10px;
          background: white;
        }
      }
      .buttonMore {
        text-align: center;
        button {
          padding: 10px;
          margin: 15px 0 0;
        }
      }
    }
  }
}
</style>
