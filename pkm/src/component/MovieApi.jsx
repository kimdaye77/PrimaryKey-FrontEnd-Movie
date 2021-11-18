//예매 순 영화 리스트
import { Component } from 'react';
import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import '../css/reset.css';

function MovieApi({title, poster}) {
    return (
        <section>
            <div>{title}</div>
            <div><img src={poster} alt="" /></div>
        </section>
    );

}

MovieApi.propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    };
export default MovieApi;