<script>
  // Store
  import { pokedexStore } from "../../store/pokedex.svelte.js";
</script>

<div class="header-search">
  <input type="text" title="pesquisar" bind:value={pokedexStore.nameFilter}/>
</div>

<style lang="postcss">
.header-search {
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0 16px 8px 16px;
  border-radius: 0 8px 0 0;
  border-width: 6px 1px 0 0;
  border-style: solid;
  border-color: var(--plastic-color-2);

  input {
    width: 100%;
    max-width: 280px;
    height: 45px;
    padding: 8px 16px;
    font-size: 1.45rem;
    color: var(--screen-color-2);
    outline: none;
    border-radius: 4px;
    border: 1px solid var(--plastic-color-2);
    background-color: var(--screen-color-1);
  }
}
</style>