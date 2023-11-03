
async function fetchPokemon(pokemonName: string) {

try {

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    const option = {
        method: "GET"
    };

    const response = await fetch(url, option);

    if (!response.ok) {
      throw new Error("throw error response");
    }

        const data = await response.json();
       return data;
    } catch (err) {
    return Promise.reject(new Error("Promise reject"));
  }


}

export default fetchPokemon;
