
const API_KEY = '3fa6b1bc';

export const fetchMovies = async (searchTerm = 'trending') => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        return data.Search;
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [];
    }
  };
