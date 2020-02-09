import React from "react";
import PropTypes from "prop-types";


function Movie({id, title, year, rating, summary, poster}){
    return <h4>{title} </h4>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;