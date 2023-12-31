import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { urlimg, title, desc, newsurl, originallength, source, date, author } =
      this.props;

    return (
      <div className="my-3">
        <div className="card" style={{ width: "20rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={urlimg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              {originallength.length > 45 ? "...." : ""}
            </h5>
            <p className="card-text">{desc}....</p>
            <p>
              By <strong>{author}</strong> at {new Date(date).toDateString()}
            </p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
