<script>
  // Store
  import { pokedexStore } from "../../store/pokedex.svelte.js";

  function clickLastGeneration() {
    if (pokedexStore.generation >= 2) pokedexStore.generation--;
  }

  function clickNextGeneration() {
    if (pokedexStore.generation <= 8) pokedexStore.generation++;
  }
</script>

<div class="header-search">
  <div class="column search">
    <input type="text" title="pesquisar" bind:value={pokedexStore.nameFilter}/>
  </div>

  <div class="column generation">
    <span>Gen. {pokedexStore.generation}</span>

    <div class="actions">
      <button type="button" class="gen-button last" onclick={clickLastGeneration}>last</button>
      <button type="button" class="gen-button next" onclick={clickNextGeneration}>next</button>
    </div>
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
  border-width: 6px 1px 0 6px;
  border-style: solid;
  border-color: var(--plastic-color-2);

  .column {
    display: flex;

    &.search {
      flex-basis: calc(250px + 145px);
      flex-grow: 1;
      align-items: center;
      padding-left: 145px;

      input {
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
    }

    &.generation {
      flex-wrap: wrap;
      align-items: center;
      gap: 16px;

      span {
        display: flex;
        align-items: center;
        font-family: "Rubik", sans-serif;
        font-size: .85rem;
        font-weight: 600;
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
        padding: 8px 16px;
        border-radius: 4px;
        border: 1px solid var(--card-color-5);
        background-color: var(--glass-color-1);
      }

      .actions {
        display: flex;
        gap: 24px;
        
        .gen-button {
          cursor: pointer;
          position: relative;
          width: 40px;
          height: 24px;
          font-family: "Rubik", sans-serif;
          font-size: .65rem;
          font-weight: 600;
          color: var(--plastic-color-4);
          text-transform: uppercase;
          border: 0;
          background-color: var(--plastic-color-3);
          transition: color 150ms ease-in-out;

          &:hover {
            color: var(--neutral-color-1);
          }

          &.last {
            border-radius: 4px 0px 0px 4px;
  
            &::before {
              content: "";
              position: absolute;
              top: 50%;
              right: 0;
              transform: translate(100%, -50%);
              border-top: 12px solid transparent;
              border-right: 12px solid transparent;
              border-bottom: 12px solid transparent;
              border-left: 10px solid var(--plastic-color-3);
            }
          }
  
          &.next {
            border-radius: 0px 4px 4px 0px;
  
            &::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 0;
              transform: translate(-100%, -50%);
              border-top: 12px solid transparent;
              border-right: 10px solid var(--plastic-color-3);
              border-bottom: 12px solid transparent;
              border-left: 12px solid transparent;
            }
          }
        }
      }
    }

    &.filter {
      flex-grow: 1;
      align-items: center;

      fieldset {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 2px;

        .item {
          display: flex;
          flex-basis: calc((100% - 2px * 2) / 3);
          max-width: calc((100% - 2px * 2) / 3);

          @media screen and (min-width: 435px) {
            flex-basis: calc((100% - 2px * 5) / 6);
            max-width: calc((100% - 2px * 5) / 6);
          }

          @media screen and (min-width: 545px) {
            flex-basis: calc((100% - 2px * 8) / 9);
            max-width: calc((100% - 2px * 8) / 9);
          }

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
            transition: filter 150ms ease-in-out;
          }
          
          label:hover, 
          input[type="checkbox"]:checked + label {
            filter: brightness(1);
          } 
        }
      }
    }
  }
}
</style>