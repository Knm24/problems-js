async function fetchPokemons(names: string[]) {

try {

                const option = {
                method: "GET"
                };


async function fetchFilms (filmURL : string) {
       
       console.log('names::')
       console.log(   names)


        const responseFilms =  await fetch(filmURL, option);

        if (!responseFilms.ok) {
                throw new Error("throw error response");
        }

        const getDataFilms =  await responseFilms.json();

         return getDataFilms; 

        

}


        const filmPromises = names.map(async (item: string) => {


            return await fetchFilms(item); 
        });


           console.log('filmPromises');
          console.log(filmPromises);

                } catch (err) {
                return Promise.reject(new Error("Promise reject"));
                }

}



//let character = fetchPokemons(["not exist1", "not exist2"]);

//console.log(character);


export default fetchPokemons;
