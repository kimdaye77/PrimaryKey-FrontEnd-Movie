//예매 순 영화 리스트
import { Component } from 'react';
import MovieApi from './MovieApi';
import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import '../css/reset.css';
import '../css/MovieList.css';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  A11y 
} from "swiper";
//style
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"; // *
import "swiper/components/pagination/pagination.scss"; // *
import "swiper/components/scrollbar/scrollbar.scss"; // *

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]); // *


class MovieList extends Component {

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies},
    },
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({isLoading:false, movies});
  };

  componentDidMount()  {
  //영화데이터로딩
      this.getMovies();
  }
  
    
  render(){
    const {isLoading, movies}= this.state;
    return (
      <>
        <Swiper
            className='swiper-container'
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000 }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
      >
          
          <section className="contatiner">
            {isLoading? (
                <div className="loader">
                    <span className="loader_txt">Loading...</span>
                </div>
            ):(
                <div className="movies">
                    {movies.map((movie)=> (
                      <SwiperSlide>
                        <div className="poster">
                          <MovieApi
                            poster={movie.medium_cover_image}
                            />
                        </div>
                        <div className="title">
                          <MovieApi
                            title={movie.title}
                          />
                        </div>                      
                        </SwiperSlide>
                    ))}
                </div>
            )}

        </section>
        </Swiper>
        </>

        );
    }

}
export default MovieList;