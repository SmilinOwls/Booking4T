import React from 'react';
import {Link} from 'react-router-dom'
import "./NewsCard.css"

const NewsCard = ({news}) => {
  return (
    <div className="cardContainer">
    <div className="imageContainer">
      <img
        src={news.image}
        alt={news.title}
        width={200}
        height={200}
      />
    </div>
    <div className="textContainer">
      <p style={{fontSize: "22px"}}>{news.title}</p>
      <p style={{fontSize: "16px", color: "#ddd"}}>
        {news.fullText.length > 30 ? news.fullText.slice(0, 30) + "..." : news + "..."}
        {"... "}
        <Link to={`/news/${news._id}`} className="readMore">
          Read More
        </Link>
      </p>
    </div>
  </div>
  )
}

export default NewsCard