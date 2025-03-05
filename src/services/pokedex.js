import { baseURL } from "../configs/requests"
import { fetchRequest } from "../utils/requests";

export default {
  async getGenerations(generationId) {
    const requestURL = `${baseURL}/generation/${generationId}`;
    const response = await fetchRequest(requestURL);
    return response;
  },
  async getPokemon(pokemonId) {
    const requestURL = `${baseURL}/pokemon/${pokemonId}`;
    const response = await fetchRequest(requestURL);
    return response;
  },
}