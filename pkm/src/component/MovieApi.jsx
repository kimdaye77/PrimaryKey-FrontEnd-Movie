//예매 순 영화 리스트
import React from "react";
import PropTypes from "prop-types";
import '../css/reset.css';

function MovieApi({title, poster}) {
    return (
        <section>
            <img src={poster} alt="" />
            {title}
        </section>
    );

}

MovieApi.propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    };
export default MovieApi;