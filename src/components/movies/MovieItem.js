// import classes from "./MovieItem.module.css";
import { Link } from "react-router-dom";
import { Card, Badge, Divider } from "antd";

const { Meta } = Card;

const MovieItem = (props) => {
  return (
    <div key={props.id}>
      <Link
        to={{
          pathname: `/movies/${props.slug}`,
          state: { movieId: props.id },
        }}
      >
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={props.image} />}
        >
          <Meta key={props.id} title={props.title} />
          <Divider />
          {props.genres.map((genre) => (
            <Badge count={genre} style={{ backgroundColor: "#52c41a" }} />
            // <span className={classes.tag}>{genre}</span>
          ))}
        </Card>
      </Link>
    </div>

    // <div className={classes.column}>
    //   <div className={classes.card}>
    //     <div className={classes.content}>
    //       <img className={classes.image} src={props.image} />
    //       <Link
    //         to={{
    //           pathname: `/movies/${props.slug}`,
    //           state: { movieId: props.id },
    //         }}
    //       >
    //         {props.title}
    //       </Link>
    //       <p>
    //         {props.genres.map((genre) => (
    //           <span className={classes.tag}>{genre}</span>
    //         ))}
    //       </p>
    //     </div>
    //     <br />
    //     <Link
    //       className="btn"
    //       to={{
    //         pathname: `/movies/${props.slug}`,
    //         state: { movieId: props.id },
    //       }}
    //     >
    //       View Detail
    //     </Link>
    //   </div>
    // </div>
    // <li className={classes.item}>
    //   <img className={classes.image} src={props.image}/>
    //   <figure>
    //     <p>{props.title}</p>
    //     <p>{props.genres}</p>
    //   </figure>
    //   <br />
    //   <Link className='btn' to={{ pathname: `/movies/${props.slug}}`, state: { movieId: props.id} }}>View Detail</Link>
    // </li>
  );
};

export default MovieItem;
