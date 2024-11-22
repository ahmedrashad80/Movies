import { createContext, useState, useContext } from "react";
const MoviesContext = createContext();
function MyMoviesContext({ children }) {
  const [myList, setMyList] = useState([]);
  const addToList = (movie) => {
    if (!myList.some((item) => item.id === movie.id)) {
      setMyList((prevList) => [...prevList, movie]);
      console.log(myList.length);
    } else {
      console.log("Movie already in the list");
    }
  };
  const value = {
    myList,
    addToList,
    setMyList,
  };
  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);

  return context;
}

export { MyMoviesContext, useMovies };
