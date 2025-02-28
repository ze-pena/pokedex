<script>
  // Components
  import BodyContent from "../BodyContent/BodyContent.svelte";
  // Props
  const { pokemonList } = $props()
</script>

<div class="pokedex-body">
  <BodyContent {pokemonList} />
</div>

<style lang="postcss">
.pokedex-body {
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
</style>