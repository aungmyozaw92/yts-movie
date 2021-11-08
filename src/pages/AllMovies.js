import { Fragment, useEffect, useState } from "react";
import MovieList from "../components/movies/MovieList";
import NoMoviesFound from "../components/movies/NoMoviesFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllMovies } from "../lib/api";
import { Pagination, Divider, Input, Row, Col } from "antd";
const { Search } = Input;

const initialParams = { page: 1, search: "" };

const AllMovie = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [params, setParams] = useState(initialParams);
  const {
    sendRequest,
    status,
    data: loadedMovies,
    error,
  } = useHttp(getAllMovies, true);

  useEffect(() => {
    sendRequest(params);
  }, [sendRequest, params]);

  const onChangeHandler = (pageNumber) => {
    setPage(pageNumber);
    setParams({ page: pageNumber, search: search });
  };

  const onSearchHandler = (value) => {
    console.log("search lllll ", value);
    setSearch(value);
    setParams({ page: page, search: value });
  };

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (
    status === "completed" &&
    (!loadedMovies.movies || loadedMovies.movies.length === 0)
  ) {
    return <NoMoviesFound />;
  }

  return (
    <Fragment>
      <Row>
        <Col span={16}>
          <Pagination
            showQuickJumper
            defaultCurrent={page}
            total={loadedMovies.movie_count}
            onChange={onChangeHandler}
          />
        </Col>
        <Col span={8}>
          <Search
            placeholder="Search Movies"
            allowClear
            enterButton="Search"
            size="large"
            // value={search}
            onSearch={onSearchHandler}
          />
        </Col>
      </Row>
      <Divider />
      <MovieList movies={loadedMovies.movies} />
    </Fragment>
  );
};

export default AllMovie;
