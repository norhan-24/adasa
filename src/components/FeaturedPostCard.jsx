
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function FeaturedPostCard({ post }) {
  return (
    <div className="featured-post-card">
      <div className="featured-post-image">
        <img src={post.image} alt={post.title} />

        <span className="featured-image-badge">
          <FontAwesomeIcon icon={faStar} />
          مميز
        </span>
      </div>

      <div className="featured-post-content">
        <div className="featured-post-info">
          <span className="featured-category">
            {post.category}
          </span>

          <span className="featured-reading-time">
            <FontAwesomeIcon icon={faClock} />
            {post.readTime}
          </span>
        </div>

        <div>
          <h3>{post.title}</h3>
          <p className="featured-post-description">
            {post.excerpt}
          </p>
        </div>

        <div className="featured-post-bottom">
          <div className="featured-author">
            <img
              src={post.author.avatar}
              alt={post.author.name}
            />

            <div>
              <h4>{post.author.name}</h4>
              <p>{post.date}</p>
            </div>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="featured-read-link"
          >
            اقرأ المقال
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPostCard;
