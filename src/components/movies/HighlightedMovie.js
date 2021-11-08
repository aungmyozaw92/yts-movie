// import { useState } from 'react';
import classes from "./HighlightedMovie.module.css";
const HighlightedMovie = (props) => {
  const movie = props.movie;
  return (
    <div className={classes.movie_card}>
      <div className={classes.container}>
        <img
          src={movie.medium_cover_image}
          alt="cover"
          className={classes.cover}
        />

        <div className={classes.hero} dataurl={movie.medium_cover_image}>
          <div
            style={{ backgroundImage: `url(${movie.medium_cover_image})` }}
          ></div>
          <div className={classes.details}>
            <div className={classes.title1}>{movie.title}</div>
            <div className={classes.title2}>{movie.title_long}</div>
            <fieldset className={classes.rating}>
              {/* <p>Rating - {movie.rating}</p> */}
              <input
                type="radio"
                id="star5"
                name="rating"
                value="5"
                checked={movie.rating >= 5 ? true : false}
              />
              <label
                className={classes.full}
                htmlFor="star5"
                title="Awesome - 5 stars"
              ></label>
              <input
                type="radio"
                id="star4half"
                name="rating"
                value="4 and a half"
                checked={movie.rating >= 4.5 && movie.rating < 5 ? true : false}
              />
              <label
                className={classes.half}
                htmlFor="star4half"
                title="Pretty good - 4.5 stars"
              ></label>
              <input
                type="radio"
                id="star4"
                name="rating"
                value="4"
                checked={movie.rating >= 4 && movie.rating < 4.5 ? true : false}
              />
              <label
                className={classes.full}
                htmlFor="star4"
                title="Pretty good - 4 stars"
              ></label>
              <input
                type="radio"
                id="star3half"
                name="rating"
                value="3 and a half"
                checked={movie.rating >= 3.5 && movie.rating < 4 ? true : false}
              />
              <label
                className={classes.half}
                htmlFor="star3half"
                title="Meh - 3.5 stars"
              ></label>
              <input
                type="radio"
                id="star3"
                name="rating"
                value="3"
                checked={movie.rating >= 3 && movie.rating < 3.5 ? true : false}
              />
              <label
                className={classes.full}
                htmlFor="star3"
                title="Meh - 3 stars"
              ></label>
              <input
                type="radio"
                id="star2half"
                name="rating"
                value="2 and a half"
                checked={movie.rating >= 2.5 && movie.rating < 3 ? true : false}
              />
              <label
                className={classes.half}
                htmlFor="star2half"
                title="Kinda bad - 2.5 stars"
              ></label>
              <input
                type="radio"
                id="star2"
                name="rating"
                value="2"
                checked={movie.rating >= 2 && movie.rating < 2.5 ? true : false}
              />
              <label
                className={classes.full}
                htmlFor="star2"
                title="Kinda bad - 2 stars"
              ></label>
              <input
                type="radio"
                id="star1half"
                name="rating"
                value="1 and a half"
                checked={movie.rating >= 1.5 && movie.rating < 2 ? true : false}
              />
              <label
                className={classes.half}
                htmlFor="star1half"
                title="Meh - 1.5 stars"
              ></label>
              <input
                type="radio"
                id="star1"
                name="rating"
                value="1"
                checked={movie.rating >= 1 && movie.rating < 1.5 ? true : false}
              />
              <label
                className={classes.full}
                htmlFor="star1"
                title="Sucks big time - 1 star"
              ></label>
              <input
                type="radio"
                id="starhalf"
                name="rating"
                value="half"
                checked={movie.rating >= 0.5 && movie.rating < 1 ? true : false}
              />
              <label
                className={classes.half}
                htmlFor="starhalf"
                title="Sucks big time - 0.5 stars"
              ></label>
            </fieldset>

            <span className={classes.likes}>{movie.like_count} - likes</span>
          </div>
        </div>

        <div className={classes.description}>
          <div className={classes.column1}>
            {movie.genres.map((movie) => (
              <span className={classes.tag}>{movie}</span>
            ))}
          </div>
          <div className={classes.column2}>
            <p>{movie.description_full}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedMovie;
