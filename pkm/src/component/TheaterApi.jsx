//예매 순 영화 리스트
import React from "react";
import PropTypes from "prop-types";
import '../css/reset.css';

function TheaterApi({theater_name, theater_image, address, address_code, introduction}) {
    return (
        <section>
            {theater_name}
            {theater_image}
            {address}
            {address_code}
            {introduction}
        </section>
    );

}

TheaterApi.propTypes = {
    theater_name: PropTypes.string.isRequired,
    theater_image: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    address_code: PropTypes.number.isRequired,
    introduction: PropTypes.string.isRequired
};

export default TheaterApi;