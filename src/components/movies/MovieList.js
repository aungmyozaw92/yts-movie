import { Fragment } from "react";
import MovieItem from "./MovieItem";
// import classes from "./MovieList.module.css";
import { Row, Col } from "antd";

const MovieList = (props) => {
  return (
    <Fragment>
      <Row gutter={[16, 16]}>
        {props.movies.map((movie) => (
          <Col span={6}>
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title_long}
              genres={movie.genres}
              image={
                movie.medium_cover_image
                  ? movie.medium_cover_image
                  : movie.small_cover_image
              }
              slug={movie.slug}
            />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default MovieList;
