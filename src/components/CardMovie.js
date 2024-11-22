import { useMovies } from "../context/MyMoviesContext";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

const CardMovie = ({ mov }) => {
  const { addToList } = useMovies();
  const navigate = useNavigate();
  const GoToMovie = (movie) => navigate(`/movie/${movie.id}`);
  return (
    <>
      <div className="card">
        <img
          src={
            mov?.poster_path
              ? `https://image.tmdb.org/t/p/w500/` + mov?.poster_path
              : logo
          }
          className="card__image"
          alt={mov?.title || mov?.original_title || ""}
        />
        <div className="card_overlay">
          <div className="overlay_text text-center w-100 p-2">
            <p>اسم الفيلم: {mov?.original_title || mov?.title || ""}</p>
            <p>تاريخ الاصدار: {mov?.release_date || "غير متوفر"}</p>
            <p>عدد المقيمين: {mov?.vote_count || 0}</p>
            <p>التقييم: {mov?.vote_average || 0}</p>

            <button className="btn w-100 my-1" onClick={() => GoToMovie(mov)}>
              للمشاهده
            </button>
            <button className="btn w-100" onClick={() => addToList(mov)}>
              اضف للقائمه
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardMovie;
