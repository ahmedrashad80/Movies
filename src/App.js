import "bootstrap/dist/css/bootstrap.min.css";
import axiosInstance from "./axiosConfig/axiosinstance";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";
import MyList from "./components/MyList";
import { MyMoviesContext } from "./context/MyMoviesContext";
import NotFound from "./components/NotFound";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [sortBy, setSortBy] = useState("popular");

  const getAllMovies = async (sort = "popular") => {
    const res = await axiosInstance.get(`movie/${sort}`);
    setMovies(res.data.results);
    setPageCount(Math.min(res.data.total_pages, 500));
  };

  const getPage = async (page, sort = sortBy) => {
    const res = await axiosInstance.get(`movie/${sort}?page=${page}`);
    setMovies(res.data.results);
    const totalPages = Math.ceil(res.data.total_results / 20);
    setPageCount(totalPages > 500 ? 500 : totalPages);
  };

  const onCategorySelect = async (category) => {
    try {
      const res = await axiosInstance.get(
        `discover/movie?with_genres=${getGenreId(category)}`
      );
      setMovies(res.data.results);
      const totalPages = Math.ceil(res.data.total_results / 20);
      setPageCount(totalPages > 500 ? 500 : totalPages);
    } catch (error) {
      console.error("Error fetching movies by category:", error);
    }
  };

  const getGenreId = (category) => {
    const genres = {
      أكشن: 28,
      مغامرة: 12,
      "رسوم متحركة": 16,
      كوميديا: 35,
      جريمة: 80,
      وثائقي: 99,
      دراما: 18,
      عائلي: 10751,
      خيال: 14,
      تاريخ: 36,
      رعب: 27,
      موسيقى: 10402,
      غموض: 9648,
      رومانسية: 10749,
      "خيال علمي": 878,
      "فيلم تلفزيوني": 10770,
      إثارة: 53,
      حرب: 10752,
      ويسترن: 37,
    };
    return genres[category] || "";
  };

  const handleSortChange = async (sort) => {
    setSortBy(sort);
    await getPage(1, sort);
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      await getAllMovies();
    } else {
      const res = await axiosInstance.get(`search/movie?query=${word}`);
      setMovies(res.data.results);
      const totalPages = Math.ceil(res.data.total_results / 20);
      setPageCount(totalPages > 500 ? 500 : totalPages);
    }
  };

  return (
    <MyMoviesContext>
      <div className="font color-body">
        <NavBar search={search} />
        <Container>
          <Routes>
            <Route
              path="/movieproject"
              element={
                <Container>
                  <MoviesList
                    movies={movies}
                    getPage={getPage}
                    pageCount={pageCount}
                    onCategorySelect={onCategorySelect}
                    handleSortChange={handleSortChange}
                  />
                </Container>
              }
            />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </MyMoviesContext>
  );
};

const Main = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Main;
