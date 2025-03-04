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
      const { pokemon_species } = await pokedexService.getGenerations(generationId);
      const pokemonList = await Promise.all(pokemon_species.map(specie => {
        const id = extractPokemonIdFromURL(specie.url);
        return pokedexService.getPokemon(id);
      }));
      pokedexStore.list = sortPokemonListById(pokemonList);
    } catch(error) {
      pokedexStore.list = [];
      console.log(error);
    }
  };

  $effect(() => {
    setPokemonList(pokedexStore.generation);
  })
</script>

<PokedexLayout>
  {#snippet header()}
    <PokedexHeader />
  {/snippet}

  {#snippet body()}
    <PokedexBody/>
  {/snippet}
</PokedexLayout>