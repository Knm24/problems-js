async function fetchCharacterWithMovies(id: number) {

try {

                const url = `https://swapi.dev/api/people/${id}`;

                const option = {
                method: "GET"
                };

                const response = await fetch(url);

                if (!response.ok) {
                        return Promise.reject(new Error("smth went wrong"));
                }

                const data = await response.json();

                let newObjData =  {
                        'name' : data.name
                 }


       


async function fetchFilms (filmURL : string) {
       


        const responseFilms =  await fetch(filmURL);

        if (!responseFilms.ok) {
                return Promise.reject(new Error("smth went wrong"));
        }

        const getDataFilms =  await responseFilms.json();

         return getDataFilms.title; 

        

}

        const filmPromises = data.films.map(async (item: string) => {
            return await fetchFilms(item); 
        });


        const filmsDataAll = await Promise.all(filmPromises);


        return { ...newObjData, films: filmsDataAll };
         

                } catch (err) {
                        return Promise.reject(new Error("smth went wrong"));
                }

}

export default fetchCharacterWithMovies;

