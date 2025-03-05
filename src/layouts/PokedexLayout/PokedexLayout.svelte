<script>
  const { header, body } = $props();
</script>

<div class="pokedex-layout">
  {@render header()}
  {@render body()}
</div>

<style lang="postcss">
.pokedex-layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: var(--plastic-color-1);
}
</style>