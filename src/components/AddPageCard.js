import React from "react";
import "./AddPageCard.css";

const AddPageCard = (props) => {
  const { Title, Year, imdbID, Poster } = props.movie;
  return (
    <div className="add-page-card">
      {Poster ? (
        <img src={Poster} alt={Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <div className="info">
        <p className="title">{Title}</p>
        <p className="year">{Year}</p>
        <div className="controls">
          <button>Add To Watch List</button>
          <button>Add To Watched</button>
        </div>
      </div>
    </div>
  );
};

export default AddPageCard;
