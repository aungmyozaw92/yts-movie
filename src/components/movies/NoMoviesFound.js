// import { Link } from 'react-router-dom';

import classes from "./NoMoviesFound.module.css";

const NoMoviesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No movies found!</p>
    </div>
  );
};

export default NoMoviesFound;
