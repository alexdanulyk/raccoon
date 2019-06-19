<template lang="pug">
  .wrapper
    header Header
    nav
      ul
        li
          nuxt-link(:to="{path: '/admin/bouquet'}") Bouquets
        li
          nuxt-link(:to="{path: '/admin/flower'}") Flowers
        li
          nuxt-link(:to="{path: '/admin/color_scheme'}") Color Schemes
        li
          nuxt-link(:to="{path: '/admin/color'}") Colors
        li
          nuxt-link(:to="{path: '/admin/size'}") Sizes
        li
          nuxt-link(:to="{path: '/admin/cost'}") Costs
    main
      nuxt
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
  grid-area: header;
  background: #CCCCCC;
}
main {
  grid-area: main;
  background: #CCCCCC;
  overflow: auto;
}
nav {
  grid-area: nav;
  background: #CCCCCC;
}
.wrapper {
  height: 100vh;
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas: "header header" "nav main";
  overflow: hidden;
}
</style>
