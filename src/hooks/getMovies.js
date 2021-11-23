export const getMovies = async() => {
    const response = await fetch('https://swapi.dev/api/films/');
    const data = response.json();

    return data;
} 