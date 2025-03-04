<script>
  // Components
  import PokemonCard from "../PokemonCard/PokemonCard.svelte";
  //Store
  import { pokedexStore } from "../../store/pokedex.svelte";
</script>

<div class="body-content">
  <ul>
    {#each pokedexStore.filteredList as pokemon}
      <PokemonCard {pokemon} />
    {/each}
  </ul>
</div>

<style lang="postcss">
.body-content {
  flex-grow: 1;
  display: flex;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--plastic-color-2);
  background-color: var(--neutral-color-2);
  
  ul {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 32px 24px;
    gap: 32px 24px;
    height: 100%;
    overflow: hidden scroll;
  }
}
</style>