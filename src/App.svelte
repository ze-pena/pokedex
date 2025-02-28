<script>
  // Components
  import PokedexLayout from "./layouts/PokedexLayout/PokedexLayout.svelte";
  import PokedexHeader from "./components/PokedexHeader/PokedexHeader.svelte";
  import PokedexBody from "./components/PokedexBody/PokedexBody.svelte";
  // Store
  import { pokedexStore } from "./store/pokedex.svelte.js"
  // Serviços
  import pokedexService from "./services/pokedex"
  // Utilidades
  import { sortById } from "./utils/sort";
  import { extractPokemonIdFromURL } from "./utils/pokedex";

  const setPokemonList = async (generationId) => {
    try {
      const { pokemon_species } = await pokedexService.getGenerations(generationId);
      const pokemonList = await Promise.all(pokemon_species.map(specie => {
        const id = extractPokemonIdFromURL(specie.url);
        return pokedexService.getPokemon(id);
      }));
      pokedexStore.pokemonList = sortById(pokemonList);
    } catch(error) {
      pokedexStore.pokemonList = [];
      console.log(error);
    }
  };

  setPokemonList(pokedexStore.generation);
</script>

<PokedexLayout>
  {#snippet header()}
    <PokedexHeader />
  {/snippet}

  {#snippet body()}
    <PokedexBody/>
  {/snippet}
</PokedexLayout>