export function extractPokemonIdFromURL(url) {
  const id = url.split("/").slice(-2, -1).join();
  return Number(id);
}

export function sortPokemonListById(listToSort) {
  const sortedList = [...listToSort];
  return sortedList.sort((a, b) => a.id > b.id ? 1 : -1);
}

export function filterPokemonByTypeAndName(list, filteredTypes, nameFilter) {
  if (filteredTypes.length) {
    const filteredList = list.filter(pokemonItem => {
      return pokemonItem.types.some(pokemonType => filteredTypes.includes(pokemonType.type.name));
    });
    return filteredList.filter(item => item.name.includes(nameFilter));
  }

  return list.filter(item => item.name.includes(nameFilter));
}