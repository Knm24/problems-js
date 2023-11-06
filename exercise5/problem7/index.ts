async function fetchPokemons(names: string[]) {

        try {
        
        async function fetchFilms (filmURL : string) {
               
                const responseFilms =  await fetch(filmURL);
        
                if (!responseFilms.ok) {
                        return Promise.reject(new Error("smth went wrong"));

                }        
                const pokemon =  await responseFilms.json();
        
                return {
                        id: pokemon.id,
                        name: pokemon.name,
                        height: pokemon.height,
                        weight: pokemon.weight,
                        image: pokemon.sprites.front_default,
                      };        
        }
        
        
                const filmPromises = names.map(async (item_name: string) => {       
        
                    return await fetchFilms(`https://pokeapi.co/api/v2/pokemon/${item_name}`); 
                });
        
                const filmsDataAll = await Promise.all(filmPromises);


                   return { filmsDataAll };

        
                        } catch (err) {
                                return Promise.reject(new Error("smth went wrong"));
                        }
        
        }
        
        
        

        
        
        export default fetchPokemons;
