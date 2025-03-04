<script>
  const { pokemon } = $props();
  let bounds = $state(null);
  let transform = $state("");
  let background = $state("");

  function mouseEnter(event) {
    bounds = event.target.getBoundingClientRect();
  }

  function mouseMove(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const leftX = mouseX - bounds.x;
    const topY = mouseY - bounds.y;
    const center = { x: leftX - bounds.width / 2, y: topY - bounds.height / 2 }
    const distance = Math.sqrt(center.x**2 + center.y**2);
    
    transform = `
      scale3d(1.05, 1.05, 1.05)
      rotate3d(
        ${center.y / 100},
        ${-(center.x / 100)},
        0,
        ${Math.log(distance) * 2}deg
      )
    `;

    background = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `;
  }

  function mouseLeave() {
    transform = "";
    background = "";
  }
</script>

<li 
  onmouseenter={mouseEnter}
  onmousemove={mouseMove}
  onmouseleave={mouseLeave}
  style:transform={transform}
  class={[
    'pokemon-card',
    pokemon.types[0] && `type-${pokemon.types[0].type.name}`,
    pokemon.types[1] && `subtype-${pokemon.types[1].type.name}`
  ]}
>
  <div class="texture" style:background={background}></div>

  <div class="content">
    <span>NO. {pokemon.id}</span>
    
    <div class="pokemon">
      <picture>
        <img alt={pokemon.name} src={pokemon.sprites.other.home.front_default}/>
      </picture>

      <h4>{pokemon.name}</h4>
    </div>
  
    <ul>
      {#each pokemon.types as type}
        <li class={`type-${type.type.name}`}>{type.type.name}</li>
      {/each}
    </ul>
  </div>
</li>

<style lang="postcss">
.pokemon-card {
  cursor: pointer;
  position: relative;
  flex-grow: 1;
  display: flex;
  padding: 16px 8px 8px;
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  transition: box-shadow 200ms ease-in-out;
  overflow: hidden;

  &:hover {
    transition-duration: 150ms;
    box-shadow: var(--box-shadow-hover);
  }

  @media screen and (min-width: 583px) {
    flex-basis: calc((100% - 24px) / 2);
    max-width: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: 832px) {
    flex-basis: calc((100% - 24px * 2) / 3);
    max-width: calc((100% - 24px * 2) / 3);
  }

  @media screen and (min-width: 1081px) {
    flex-basis: calc((100% - 24px * 3) / 4);
    max-width: calc((100% - 24px * 3) / 4);
  }

  .texture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 60% -40%, #ffffff22, #0000000f);
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--card-color-3);
    background-image: url("../../assets/images/pokeball.png");
    background-repeat: no-repeat;
    background-size: 35px;
    background-position: 10px 10px;


    span {
      align-self: flex-end;
      font-family: "Rubik", sans-serif;
      font-size: 1rem;
      font-weight: 800;
      text-align: right;
      color: var(--card-color-1);
      padding: 8px;
      border-radius: 8px;
      background-color: var(--card-color-5);
    }

    .pokemon {
      display: flex;
      flex-direction: column;
      padding: 4px;
      border-radius: 8px 8px 4px 4px;
      background-color: var(--card-color-5);

      picture {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px 16px 24px;
        border-radius: 4px 4px 0 0;
        background-color: var(--card-color-2);
        
        img {
          width: 100%;
          max-width: 150px;
          height: auto;
        }
      }

      h4 {
        font-family: "Rubik", sans-serif;
        font-size: 1.15rem;
        font-weight: 400;
        text-align: center;
        text-transform: capitalize;
        color: var(--card-color-1);
        padding: 8px;
      }
    }

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0 16px 16px;
      
      li {
        font-family: "Rubik", sans-serif;
        font-size: 0.55rem;
        font-weight: 600;
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
        padding: 8px;
        border-radius: 4px;
      }
    }
  }
}

@property --type-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #ffffff;
}

@property --subtype-color {
  syntax: "<color>";
  inherits: true;
  initial-value: #ffffff;
}

@layer types, subtypes;

@layer types {
  .type-normal {
    --type-color: var(--type-normal);
    background-color: var(--type-color);
  }

  .type-fire {
    --type-color: var(--type-fire);
    background-color: var(--type-color);
  }
  
  .type-water {
    --type-color: var(--type-water);
    background-color: var(--type-color);
  }
  
  .type-electric {
    --type-color: var(--type-electric);
    background-color: var(--type-color);
  }
  
  .type-grass {
    --type-color: var(--type-grass);
    background-color: var(--type-color);
  }
  
  .type-ice {
    --type-color: var(--type-ice);
    background-color: var(--type-color);
  }
  
  .type-fighting {
    --type-color: var(--type-fighting);
    background-color: var(--type-color);
  }
  
  .type-poison {
    --type-color: var(--type-poison);
    background-color: var(--type-color);
  }
  
  .type-ground {
    --type-color: var(--type-ground);
    background-color: var(--type-ground);
  }
  
  .type-flying {
    --type-color: var(--type-flying);
    background-color: var(--type-color);
  }
  
  .type-psychic {
    --type-color: var(--type-psychic);
    background-color: var(--type-color);
  }
  
  .type-bug {
    --type-color: var(--type-bug);
    background-color: var(--type-color);
  }
  
  .type-rock {
    --type-color: var(--type-rock);
    background-color: var(--type-color);
  }
  
  .type-ghost {
    --type-color: var(--type-ghost);
    background-color: var(--type-color);
  }
  
  .type-dragon {
    --type-color: var(--type-dragon);
    background-color: var(--type-color);
  }
  
  .type-dark {
    --type-color: var(--type-dark);
    background-color: var(--type-color);
  }
  
  .type-steel {
    --type-color: var(--type-steel);
    background-color: var(--type-color);
  }
  
  .type-fairy {
    --type-color: var(--type-fairy);
    background-color: var(--type-color);
  }
}

@layer subtypes {
  .subtype-normal {
    --subtype-color: var(--type-normal);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }

  .subtype-fire {
    --subtype-color: var(--type-fire);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-water {
    --subtype-color: var(--type-water);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-electric {
    --subtype-color: var(--type-electric);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-grass {
    --subtype-color: var(--type-grass);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-ice {
    --subtype-color: var(--type-ice);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-fighting {
    --subtype-color: var(--type-fighting);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-poison {
    --subtype-color: var(--type-poison);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-ground {
    --subtype-color: var(--type-ground);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-flying {
    --subtype-color: var(--type-flying);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-psychic {
    --subtype-color: var(--type-psychic);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-bug {
    --subtype-color: var(--type-bug);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-rock {
    --subtype-color: var(--type-rock);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-ghost {
    --subtype-color: var(--type-ghost);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-dragon {
    --subtype-color: var(--type-dragon);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-dark {
    --subtype-color: var(--type-dark);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-steel {
    --subtype-color: var(--type-steel);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
  
  .subtype-fairy {
    --subtype-color: var(--type-fairy);
    background: linear-gradient(var(--type-color), 75%, var(--subtype-color));
  }
}
</style>