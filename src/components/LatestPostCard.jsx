
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./LatestPostCard.css";

function LatestPostCard({ post }) {
  return (
    <div className="latest-card">

      <Link
        to={`/blog/${post.slug}`}
        className="latest-card-image"
      >
        <img src={post.image} alt={post.title} />

        <span className="latest-card-category">
          {post.category}
        </span>
      </Link>

      <div className="latest-card-content">

        <div className="latest-card-info">
          <span>
            <FontAwesomeIcon icon={faClock} />
            {post.readTime}
          </span>

          <span>•</span>
          <span>{post.date}</span>
        </div>

        <Link to={`/blog/${post.slug}`}>
          <h3>{post.title}</h3>
        </Link>

        <p className="latest-card-description">
          {post.excerpt}
        </p>

        <div className="latest-card-bottom">

          <div className="latest-card-author">
            <img
              src={post.author.avatar}
              alt={post.author.name}
            />

            <div>
              <h4>{post.author.name}</h4>
              <p>{post.author.role}</p>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="latest-card-arrow"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>

        </div>
      </div>
    </div>
  );
}

export default LatestPostCard;
