import React from "react";



const Movieitem = ({ movie }) => {
  const { rank, rankOldAndNew, movieNm } = movie;
  console.log(movie)
  return (
    <>
      <div className="rank">
        {rank}
        <span>위</span>
        <div className="new">{rankOldAndNew === "OLD" ? "" : rankOldAndNew}</div>
      </div>
      <div className="title">{movieNm}</div>
    </>
  );
};

export default Movieitem;