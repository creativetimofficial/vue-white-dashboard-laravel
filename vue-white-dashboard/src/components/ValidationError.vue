<template>
  <span v-if="errors && errors.length">
    <small class="error" v-text="errors[0]"/>
  </span>
</template>

<script>
  export default {
    name: "validation-error",
    props: {
      errors: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>

<style lang="scss">
  .error {
    position: relative;
    font-size: 0.75rem;
    margin-bottom: 5px;
    color: #ec250d;
  }
</style>
