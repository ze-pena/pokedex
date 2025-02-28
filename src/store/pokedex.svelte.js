class Pokedex {
  #generation = $state(1);
  #nameFilter = $state("");
  #typeFilter = $state([]);
  #pokemonList = $state([]);
  #filteredPokemonList = $derived(this.#pokemonList.filter(item => item.name.includes(this.#nameFilter)));

  get generation() { return this.#generation; }
  get nameFilter() { return this.#nameFilter; }
  get typeFilter() { return this.#typeFilter; }
  get pokemonList() { return this.#pokemonList; }
  get filteredPokemonList() { return this.#filteredPokemonList; }

  set nameFilter(value) { this.#nameFilter = value; }
  set typeFilter(value) { this.#typeFilter = [...value]; }
  set pokemonList(value) { this.#pokemonList = [...value]; }
}

export const pokedex = new Pokedex();