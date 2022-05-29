<template>
  <li class="pk-card">
    <div class="pk-card__content">
      <picture class="pk-content__img">
        <img :src="pokemon.sprite" />
      </picture>
      <div class="pk-content__info">
        <div class="pk-info__name">
          <span>{{ pokemon.name }}</span>
        </div>
        <div class="pk-info__id">
          <span>#{{ pokemon.id }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'PokeCard',
  props: {
    pokemon: {
      id: Number,
      name: String,
      sprite: String,
    },
  },
}
</script>

<style lang="scss" scoped src="./PokeCard.scss" />
