<template>
  <div class="pk-box">
    <ul class="pk-box__container">
      <slot name="poke-cards" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PokeBox',
}
</script>

<style lang="scss" scoped src="./PokeBox.scss" />
