<script>
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
    const pokemons = await getPokemons(generationId);
    console.log(pokemons)
    pokemonList = pokemons;
  }

  const generationId = 1;
  configurePokemonList(generationId);

  let search = $state("");
  let pokemonList = $state([])
  let filteredPokemonList = $derived(pokemonList.filter(pokemon => pokemon.name.includes(search)));
</script>

<main class="pokedex">
  <div class="pokedex-header">
    <div class="header-display">
      <div class="display-sphere">
        <div class="sphere-circle"></div>
      </div>

      <div class="display-signal">
        <div class="signal-circle"></div>
        <div class="signal-circle"></div>
        <div class="signal-circle"></div>
      </div>
    </div>

    <div class="header-content">
      <input type="text" title="pesquisar" class="content-search" bind:value={search}/>
    </div>
  </div>

  <div class="pokedex-frame">
    <div class="frame-content">
      <ul class="content-list">
        {#each filteredPokemonList as filteredPokemon}
          <li class="list-pokemon">
            <picture class="pokemon-image">
              <img src={filteredPokemon.sprites.other.home.front_default} alt={filteredPokemon.name} />
              <!-- <img width="50" height="50" src={filteredPokemon.sprites.other.showdown.front_default} alt={filteredPokemon.name} /> -->
              <!-- <img width="125" height="125" src={filteredPokemon.sprites.other.dream_world.front_default} alt={filteredPokemon.name} /> -->
              <!-- <img width="125" height="125" src={filteredPokemon.sprites.other["official-artwork"].front_default} alt={filteredPokemon.name} /> -->
            </picture>
            <span class="pokemon-id">NO. {filteredPokemon.id}</span>
            <h4 class="pokemon-name">{filteredPokemon.name}</h4>
            <ul class="pokemon-type">
              {#each filteredPokemon.types as pokemonType}
                <li class={`type-card ${pokemonType.type.name}`}>
                  {pokemonType.type.name}
                </li>
              {/each}
              </ul>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</main>

<style>
.pokedex {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: var(--plastic-color-1);
}

  .pokedex-header {
    display: flex;
    border-radius: 0 8px 0 0;
  }

    .header-display {
      display: flex;
      gap: 16px;
      border-radius: 0 0 64px 0;
      padding: 8px 24px 16px 8px;
      border-width: 0 6px 6px 0;
      border-style: solid;
      border-color: var(--plastic-color-2);
      background-color: var(--plastic-color-1);
    }

      .display-sphere {
        width: 50px;
        height: 50px;
        padding: 3px;
        border-radius: 50%;
        background-color: var(--neutral-color-2);
      }

        .sphere-circle {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: var(--glass-color-1);
          background: linear-gradient(145deg, var(--neutral-color-1), 40%, var(--glass-color-1));
        }

      .display-signal {
        display: flex;
        align-items: flex-start;
        gap: 8px;
      }

        .signal-circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: 1px solid var(--neutral-color-2);
        }

          .signal-circle:nth-child(1) {
            background: linear-gradient(145deg, var(--neutral-color-1), 25%, var(--status-color-1));
          }

          .signal-circle:nth-child(2) {
            background: linear-gradient(145deg, var(--neutral-color-1), 25%, var(--status-color-2));
          }

          .signal-circle:nth-child(3) {
            background: linear-gradient(145deg, var(--neutral-color-1), 25%, var(--status-color-3));
          }

    .header-content {
      flex-grow: 1;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      padding: 0 16px 8px 16px;
      border-radius: 0 8px 0 0;
      border-width: 6px 1px 0 0;
      border-style: solid;
      border-color: var(--plastic-color-2);
    }

      .content-search {
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

  .pokedex-frame {
    flex-grow: 1;
    display: flex;
    padding: 16px;
    height: 100%;
    overflow: hidden;
    border-radius: 0 0 8px 8px;
    border-width: 0 1px 1px 6px;
    border-style: solid;
    border-color: var(--plastic-color-2);
  }

    .frame-content {
      flex-grow: 1;
      height: 100%;
      overflow: hidden;
      border-radius: 8px;
      border: 1px solid var(--plastic-color-2);
      background-color: var(--neutral-color-2);
    }

      .content-list {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-evenly;
        padding: 32px 24px;
        gap: 32px 24px;
        height: 100%;
        overflow: hidden scroll;
      }

        .list-pokemon {
          flex-grow: 1;
          flex-basis: 200px;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          gap: 8px;
          padding: 24px 16px 16px;
          border-radius: 8px;
          background-color: #f3f3f3;
          background-image: url("./assets/images/pokeball.webp");
          background-repeat: no-repeat;
          background-position: -55px -30px;
          background-size: 135px;
          box-shadow: var(--box-shadow);
        }

          .pokemon-image {
            flex-basis: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 32px;
          }

            .pokemon-image img {
              width: 100%;
              max-width: 120px;
              height: auto;
            }

          .pokemon-id {
            display: flex;
            align-items: center;
            padding: 0 8px;
            border-radius: 4px;
            font-family: "Oswald", sans-serif;
            font-size: .85rem;
            font-weight: 500;
            color: #ffffff;
            text-align: left;
            background-color: #949494;
          }
            
          .pokemon-name {
            flex-grow: 1;
            border-radius: 4px;
            padding: 8px;
            font-family: "Rubik", sans-serif;
            font-size: 1rem;
            font-weight: 400;
            color: #ffffff;
            text-align: center;
            text-transform: capitalize;
            background-color: #949494;
          }

          .pokemon-type {
            flex-basis: 100%;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 8px;
          }

            .type-card {
              display: flex;
              align-items: center;
              padding: 8px;
              border-radius: 4px;
              font-family: "Rubik", sans-serif;
              font-size: 0.55rem;
              font-weight: 600;
              color: #ffffff;
              text-align: center;
              text-transform: uppercase;
            }

            .type-card.normal {
              background-color: #aaaa99;
            }

            .type-card.fire {
              background-color: #ff4422;
            }

            .type-card.water {
              background-color: #3399ff;
            }

            .type-card.electric {
              background-color: #ffcc33;
            }

            .type-card.grass {
              background-color: #77cc55;
            }

            .type-card.ice {
              background-color: #66ccff;
            }

            .type-card.fighting {
              background-color: #bb5544;
            }

            .type-card.poison {
              background-color: #aa5599;
            }

            .type-card.ground {
              background-color: #ddbb55;
            }

            .type-card.flying {
              background-color: #8899ff;
            }

            .type-card.psychic {
              background-color: #ff5599;
            }

            .type-card.bug {
              background-color: #aabb22;
            }

            .type-card.rock {
              background-color: #bbaa66;
            }

            .type-card.ghost {
              background-color: #6666bb;
            }

            .type-card.dragon {
              background-color: #7766ee;
            }

            .type-card.dark {
              background-color: #775544;
            }

            .type-card.stell {
              background-color: #aaaabb;
            }
            
            .type-card.fairy {
              background-color: #ee99ee;
            }
</style>
