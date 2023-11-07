async function fetchCharacterWithMovies(id: number) {

try {




async function fetchPeople (id : number) {
       

                const url = `https://swapi.dev/api/people/${id}`;


                const response = await fetch(url);

                if (!response.ok) {
                        return Promise.reject(new Error("smth went wrong"));
                }

                const data = await response.json();

            
                 return {
                        'name' : data.name,
                        'films' : data.films
                 };
}


async function fetchFilms (filmURL : string) {
       


        const responseFilms =  await fetch(filmURL);

        if (!responseFilms.ok) {
                return Promise.reject(new Error("smth went wrong"));
        }

        const getDataFilms =  await responseFilms.json();

         return getDataFilms.title; 

        

}

let newObjPeopleData = fetchPeople (id);
  let filmsDataAll = newObjPeopleData.then(res => { 
        

        const filmPromises = res.films.map(async (item: string) => {
            return await fetchFilms(item); 
        });

        return Promise.all(filmPromises);

 });



 
 filmsDataAll.then(res => { 
 
   let getPeoples = newObjPeopleData.then(people => {; people

          let all = { name: people.name, films: res };

           return all;
   });




  });  
      


         

                } catch (err) {
                        return Promise.reject(new Error("smth went wrong"));
                }

}


 export default fetchCharacterWithMovies;

