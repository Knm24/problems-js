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

        return data;


        
    } catch (err) {
    return Promise.reject(new Error("Promise reject"));
  }


}


export default fetchCharacterWithMovies;
