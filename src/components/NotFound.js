import React from "react";
import { Link } from "react-router-dom";
import notFound from "../images/stacked-books.jpg";

function NotFound() {
  return (
    <div>
      <h1 className="not-found-title">
        The books you searched for are unavailable!
      </h1>
      <figure className="not-found-img">
        <img src={notFound} alt="Page Not Found" />
        <figcaption>Photograph by iSpark Media Limited.</figcaption>
      </figure>
      <div className="home-link">
        <Link to="/">Go home and try again...</Link>
      </div>
    </div>
  );
}

export default NotFound;
