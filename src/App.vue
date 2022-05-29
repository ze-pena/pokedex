<template>
  <div id="app">
    <poke-search @searching="searchPokemon($event)" />
    <poke-box v-if="pokemonsList.length">
      <poke-card
        slot="poke-cards"
        v-for="pokemon in pokemonsList"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </poke-box>
    <poke-load v-if="!pokemons.length && !search" />
  </div>
</template>

<script>
import PokeSearch from '@/components/PokeSearch/PokeSearch.vue'
import PokeBox from '@/components/PokeBox/PokeBox.vue'
import PokeCard from '@/components/PokeCard/PokeCard.vue'
import PokeLoad from '@/components/PokeLoad/PokeLoad.vue'

export default {
  name: 'App',
  data() {
    return {
      pokemons: [],
      pokemonsList: [],
    }
  },
  components: {
    PokeSearch,
    PokeBox,
    PokeCard,
    PokeLoad,
  },
  methods: {
    searchPokemon(search) {
      if (search) {
        this.pokemonsList = this.pokemons.filter((pokemon) =>
          pokemon.name.includes(String(search).toLowerCase())
        )
      } else {
        this.pokemonsList = [...this.pokemons]
      }
    },
    getPokemonsInLocalStorage() {
      const pokemonsParsed = JSON.parse(localStorage.getItem('PK_STORED'))
      this.pokemons = [...pokemonsParsed]
      this.pokemonsList = [...pokemonsParsed]
    },
    setPokemonsInLocalStorage(pokemons) {
      const pokemonsParsed = JSON.stringify(pokemons)
      localStorage.setItem('PK_STORED', pokemonsParsed)
    },
    async getPokemons() {
      const result = await this.$http
        .get('/pokemon?limit=151')
        .then((res) => res.data.results)

      const promises = result.map((pokemon) => this.$http.get(pokemon.url))
      const pokemons = await Promise.all(promises)
      const pokemonsFormated = []

      pokemons.forEach((e) =>
        pokemonsFormated.push({
          id: e.data.id,
          name: e.data.name,
          sprite: e.data.sprites.front_default,
        })
      )

      this.pokemons = [...pokemonsFormated]
      this.pokemonsList = [...pokemonsFormated]
      this.setPokemonsInLocalStorage(pokemonsFormated)
    },
  },
  created() {
    if (localStorage.getItem('PK_STORED')) {
      this.getPokemonsInLocalStorage()
    } else {
      this.getPokemons()
    }
  },
}
</script>

<style lang="scss" src="./style/reset.scss" />
