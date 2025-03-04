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
  import { extractPokemonIdFromURL, sortPokemonListById } from "./utils/pokedex";

  const setPokemonList = async (generationId) => {
    try {
      const { pokemon_species, types } = await pokedexService.getGenerations(generationId);
      const pokemonList = await Promise.all(pokemon_species.map(specie => {
        const id = extractPokemonIdFromURL(specie.url);
        return pokedexService.getPokemon(id);
      }));
      pokedexStore.types = types.map(type => type.name);
      pokedexStore.list = sortPokemonListById(pokemonList);
    } catch(error) {
      pokedexStore.types = [];
      pokedexStore.list = [];
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