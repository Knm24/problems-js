async function fetchPokemon(pokemonName: string) {

  
  try {  
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
           return Promise.reject(new Error("smth went wrong"));
      }
  
          const pokemon = await response.json();  
        return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
        image: pokemon.sprites.front_default,
      };
      } catch (err) {
             return Promise.reject(new Error("smth went wrong"));
    }
  
  
  }
  

export default fetchPokemon;
