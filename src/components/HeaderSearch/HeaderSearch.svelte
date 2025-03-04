<script>
  // Store
  import { pokedexStore } from "../../store/pokedex.svelte.js";
</script>

<div class="header-search">
  <div class="column search">
    <input type="text" title="pesquisar" bind:value={pokedexStore.nameFilter}/>
  </div>

  <div class="column filter">
    <fieldset>
      {#each pokedexStore.types as type}
        <div class="item">
          <input type="checkbox" id={`type-${type}`} bind:group={pokedexStore.filteredTypes} value={type}/>
          <label for={`type-${type}`}>{type}</label>
        </div>
      {/each}
    </fieldset>
  </div>
</div>

<style lang="postcss">
.header-search {
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 16px 16px 0;
  border-radius: 0 8px 0 0;
  border-width: 6px 1px 0 0;
  border-style: solid;
  border-color: var(--plastic-color-2);

  .column {
    display: flex;

    &.search {
      flex-basis: 300px;
      flex-grow: 1;
      align-items: center;
    }

    &.filter {
      flex-grow: 2;
      align-items: center;
    }

    & > input {
      width: 100%;
      height: 45px;
      padding: 8px 16px;
      font-size: 1.45rem;
      color: var(--screen-color-2);
      outline: none;
      border-radius: 4px;
      border: 1px solid var(--plastic-color-2);
      background-color: var(--screen-color-1);
    }

    & > fieldset {
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 2px;

      .item {
        flex-grow: 1;
        flex-basis: 65px;
        display: flex;
        max-width: 65px;

        input[type="checkbox"] {
          appearance: none;
        }

        label {
          cursor: pointer;
          flex-grow: 1;
          font-family: "Rubik", sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          color: #ffffff;
          text-align: center;
          text-transform: uppercase;
          padding: 8px 0;
          border-radius: 4px;
          border: 1px solid var(--card-color-5);
          background-color: var(--glass-color-1);
          filter: brightness(.65);
        }
        
        input[type="checkbox"]:checked + label {
          filter: brightness(1);
        } 
      }
    }
  }

}
</style>