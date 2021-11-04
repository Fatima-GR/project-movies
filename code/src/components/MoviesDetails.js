import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { DETAILS_URL } from "utils/urls";
import Spinner from "./Spinner";


const MoviesDetails = ({ films }) => {
  const [details, setDetails] = useState([]);
  const { moviesId } = useParams();
  const history = useHistory(); //History Hook

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch (DETAILS_URL (moviesId) )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        setLoading(false)
      });
  }, []);

  // History function btn
  const OnButtonBack = () => {
    history.push("/");
  };

  return (
    <div class="movie-details-container">
      {loading && <Spinner />}
      <button onClick={OnButtonBack}>Go Back</button>
      <img
        src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
        alt="background-picture"
      />
      <div className="summary-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w780${details.poster_path}`}
          alt="small-picture"
        />
        <div className="title-rating-wrapper">
          <h1 className="summary-h1">
            {details.title}
            <span className="rating">{details.vote_average}/10</span>
          </h1>
          <p className="summary-p">{details.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetails;

{
  /* <Link exact to="/">
          <button>Movies</button>
        </Link> */
}
