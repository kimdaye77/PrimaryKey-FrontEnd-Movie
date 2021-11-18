//예매 순 영화 리스트
import React from "react";
import PropTypes from "prop-types";
import '../css/reset.css';

function TheaterApi({theater_name}) {
    return (
        <section>
            {theater_name}
        </section>
    );

}

TheaterApi.propTypes = {
        theater_name: PropTypes.string.isRequired
    };
export default TheaterApi;