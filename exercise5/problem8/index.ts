async function fetchCharacterWithMovies(id: number) {

try {

                const url = `https://swapi.dev/api/people/${id}`;

                const option = {
                method: "GET"
                };

                const response = await fetch(url, option);

                if (!response.ok) {
                throw new Error("throw error response");
                }

                const data = await response.json();



                console.log(data.films);

                let newObjData =  {
                        'name' : data.name
                 }


       


async function fetchFilms (filmURL : string) {
       
       console.log('getDataFilms_resp::')
       console.log(  typeof filmURL)


        const responseFilms =  await fetch(filmURL, option);

        if (!responseFilms.ok) {
                throw new Error("throw error response");
        }

        const getDataFilms =  await responseFilms.json();

         return getDataFilms.title; 

        

}

        const filmPromises = data.films.map(async (item: string) => {
            return await fetchFilms(item); 
        });


        const filmsDataAll = await Promise.all(filmPromises);

          console.log('filmsData');
          console.log(filmsDataAll);

        let all = { ...newObjData, films: filmsDataAll };

        return all;

                } catch (err) {
                return Promise.reject(new Error("Promise reject"));
                }

}
