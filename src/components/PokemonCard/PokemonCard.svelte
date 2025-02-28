<script>
  const { pokemon } = $props()
</script>

<li class="pokemon-card">
  <picture>
    <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
  </picture>

  <span class="id">NO. {pokemon.id}</span>

  <h4 class="name">{pokemon.name}</h4>

  <ul>
    {#each pokemon.types as pokemonType}
      <li class={`type ${pokemonType.type.name}`}>
        {pokemonType.type.name}
      </li>
    {/each}
  </ul>
</li>

<style lang="postcss">
.pokemon-card {
  flex-grow: 1;
  flex-basis: 200px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 8px;
  padding: 24px 16px 16px;
  border-radius: 8px;
  background-color: #f3f3f3;
  background-image: url("../../assets/images/pokeball.webp");
  background-repeat: no-repeat;
  background-position: -55px -30px;
  background-size: 135px;
  box-shadow: var(--box-shadow);
  
  picture {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    
    img {
      width: 100%;
      max-width: 120px;
      height: auto;
    }
  }
  
  .id {
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
    
  .name {
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
  
  ul {
    flex-basis: 100%;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    
    .type {
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
      
      &.normal {
        background-color: #aaaa99;
      }
      
      &.fire {
        background-color: #ff4422;
      }
      
      &.water {
        background-color: #3399ff;
      }
      
      &.electric {
        background-color: #ffcc33;
      }
      
      &.grass {
        background-color: #77cc55;
      }
      
      &.ice {
        background-color: #66ccff;
      }
      
      &.fighting {
        background-color: #bb5544;
      }
      
      &.poison {
        background-color: #aa5599;
      }
      
      &.ground {
        background-color: #ddbb55;
      }
      
      &.flying {
        background-color: #8899ff;
      }
      
      &.psychic {
        background-color: #ff5599;
      }
      
      &.bug {
        background-color: #aabb22;
      }
      
      &.rock {
        background-color: #bbaa66;
      }
      
      &.ghost {
        background-color: #6666bb;
      }
      
      &.dragon {
        background-color: #7766ee;
      }
      
      &.dark {
        background-color: #775544;
      }
      
      &.stell {
        background-color: #aaaabb;
      }
      
      &.fairy {
        background-color: #ee99ee;
      }
    }
  }
}
</style>