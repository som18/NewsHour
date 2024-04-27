import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date,source} = this.props;
    return (
      <div>
        <div className="card">
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:'90%',zIndex: '1'}}>{source }</span>
          <img 
            src={
              (!imageurl
                ? "https://images.cnbctv18.com/uploads/2023/08/TRADE_SETUP_BG.jpg?im=FitAndFill,width=500,height=300"
                : imageurl)
            }
            className="card-img-top"
            alt="..." height={300} width={500}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By { !author ? "Anonymous user":author} on {date}</small></p>
            <a
              href={newsurl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-primary btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
