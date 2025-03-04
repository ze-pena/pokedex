<script>
  import HeaderOutput from "../HeaderOutput/HeaderOutput.svelte";
  import HeaderSearch from "../HeaderSearch/HeaderSearch.svelte";
</script>

<header class="pokedex-header">
  <HeaderOutput/>
  <HeaderSearch/>
</header>

<style lang="postcss">
.pokedex-header { 
  position: relative;
  display: flex;
  border-radius: 0 8px 0 0;
}
</style>