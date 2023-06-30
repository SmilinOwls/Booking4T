import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./NewsCard.css";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { getDetailBlog, getBlogs } from "../../Actions/BlogsAction";

const NewsCard = ({ news }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => {
      dispatch(getBlogs());
      // dispatch(getDetailBlog(news._id));
      history.push(`/new/${news._id}`)
  }
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
        
        <div dangerouslySetInnerHTML={{ __html: news.fullText.length > 30 ? news.fullText.slice(0, 30) + "..." : news + "..." }} ></div>
        {"... "}

      </p>
      <p onClick={handleClick} className="readMore">
            Read More
      </p>
    </div>
  </div>
  )
}

export default NewsCard