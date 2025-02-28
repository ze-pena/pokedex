<script>
  // Components
  import PokedexLayout from "./layouts/PokedexLayout/PokedexLayout.svelte";
  import PokedexHeader from "./components/PokedexHeader/PokedexHeader.svelte";
  import PokedexBody from "./components/PokedexBody/PokedexBody.svelte";
  // Store
  import { pokedex } from "./store/pokedex.svelte.js"

  const baseURL = "https://pokeapi.co/api/v2";

  const getPokemonGeneration = async (generationId) => {
    const requestURL = `${baseURL}/generation/${generationId}`;

    try {
      const response = await fetch(requestURL);
      const responseJSON = await response.json();
      return responseJSON;
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemons = async (generationId) => {
    const pokemonGeneration = await getPokemonGeneration(generationId);
    const pokemonList = pokemonGeneration.pokemon_species;

    try {
      const responseList = await Promise.all(pokemonList.map(pokemon => fetch(`${baseURL}/pokemon/${pokemon.name}`)));
      const responseListJSON = await Promise.all(responseList.map(response => response.json()));
      return responseListJSON.sort((a, b) => a.id > b.id ? 1 : -1);
    } catch (error) {
      console.log(error);
    }
  };

  const configurePokemonList = async (generationId) => {
    const pokemonList = await getPokemons(generationId);
    pokedex.pokemonList = pokemonList;
  };

  configurePokemonList(pokedex.generation);
</script>

<PokedexLayout>
  {#snippet header()}
    <PokedexHeader />
  {/snippet}

  {#snippet body()}
    <PokedexBody/>
  {/snippet}
</PokedexLayout>