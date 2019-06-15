<template lang="pug">
  div
    h1 {{ error.statusCode }}
    h2 {{ error.message }}
</template>

<script>
export default {
  props: ['error']
}
</script>
