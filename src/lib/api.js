const DOMAIN = "https://yts.mx/api/v2";

export async function getLatestMovies() {
  const response = await fetch(
    `${DOMAIN}/list_movies.json?limit=12&&order_by=desc`
  );
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Could not fetch movies data");
  }

  const data = responseData.data.movies;

  const transformedMovies = [];

  for (const key in data) {
    const movieObj = {
      id: key,
      ...data[key],
    };

    transformedMovies.push(movieObj);
  }
  return transformedMovies;
}

export async function getAllMovies(params) {
  console.log("search", params.search);
  console.log("page", params.page);
  const response = await fetch(
    `${DOMAIN}/list_movies.json?limit=12&&order_by=desc&&page=${params.page}&&query_term=${params.search}`
  );
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Could not fetch movies data");
  }

  // const data = responseData.data.movies;

  // const transformedMovies = [
  //   {
  //     movie_count: responseData.data.movie_count,
  //     page: responseData.data.page_number,
  //   },
  // ];

  // for (const key in data) {
  //   const movieObj = {
  //     id: key,
  //     ...data[key],
  //   };

  //   transformedMovies.push(movieObj);
  // }
  return responseData.data;
}

export async function getMovie(movieId) {
  const response = await fetch(
    `${DOMAIN}/movie_details.json?movie_id=${movieId}`
  );
  const data = await response.json();
  const movie = data.data.movie;

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedMovie = {
    id: movieId,
    ...movie,
  };

  return loadedMovie;
}
