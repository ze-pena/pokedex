// Utilidades
import { filterPokemonByTypeAndName } from "../utils/pokedex"

class Pokedex {
  #generation = $state(1);
  #nameFilter = $state("");
  #types = $state([
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy'
  ]);
  #filteredTypes = $state([]);
  #list = $state([]);
  #filteredList = $derived(filterPokemonByTypeAndName(this.#list, this.#filteredTypes, this.#nameFilter));

  get generation() { return this.#generation; }
  get nameFilter() { return this.#nameFilter; }
  get types() { return this.#types; }
  get filteredTypes() { return this.#filteredTypes; }
  get list() { return this.#list; }
  get filteredList() { return this.#filteredList; }

  set generation(value) { this.#generation = value } 
  set nameFilter(value) { this.#nameFilter = value; }
  set types(value) { this.#types = [...value]; }
  set list (value) { this.#list = [...value]; }
  set filteredTypes(value) { this.#filteredTypes = [...value]; }
}

export const pokedexStore = new Pokedex();