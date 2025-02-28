export function extractPokemonIdFromURL(url) {
  const id = url.split("/").slice(-2, -1).join();
  return Number(id);
}