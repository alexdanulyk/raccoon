<template lang="pug">
    header
        nuxt-link(to="/" exact)
            img(src="~assets/img/flower.svg")
        nuxt-link(:to="{ name: 'catalog' }" exact) Catalog
        nuxt-link(:to="{ name: 'flowers' }" exact) Flowers
        nuxt-link(:to="{ name: 'colors' }" exact) Color
</template>

<style lang="scss">
header {
    background: #EEE;
    padding: 10px;
    display: flex;
    align-items: center;
    a {
        margin-right: 10px;
        img {
            width: 40px;
            height: 40px;
            display: block;
        }
    }
}
</style>
