<template>
  <div class="pk-search">
    <input
      class="pk-search__input"
      type="text"
      placeholder="Search"
      v-model="search"
      @input="$emit('searching', search)"
    />
  </div>
</template>

<script>
export default {
  name: 'PokeSearch',
  data() {
    return {
      search: '',
    }
  },
}
</script>

<style lang="scss" scoped src="./PokeSearch.scss" />
