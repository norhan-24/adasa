
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faArrowLeft,
  faClock,
  faCalendarDays,
  faTag,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

import postsData from "../data/posts.json";
import LatestPostCard from "../components/LatestPostCard";
import NotFound from "./NotFound";

import "./BlogDetails.css";

function BlogDetails() {

  const { slug } = useParams();


  const post = postsData.posts.find(
    (item) => item.slug === slug
  );


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);


  if (!post) {
    return <NotFound />;
  }


  const formattedDate = new Date(post.date).toLocaleDateString(
    "ar-EG",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );


  const paragraphs = post.content.split("\n\n");


  const relatedPosts = postsData.posts
    .filter(
      (item) =>
        item.category === post.category &&
        item.id !== post.id
    )
    .slice(0, 3);

  return (
    <main className="details-page">



      <div className="details-container">
        <div className="details-breadcrumb">
          <Link to="/">الرئيسية</Link>

          <span>/</span>

          <Link to="/blog">المدونة</Link>

          <span>/</span>

          <span className="details-current-page">
            {post.title}
          </span>
        </div>
      </div>



      <section className="details-header">
        <div className="details-container">

          <Link
            to="/blog"
            className="details-back-button"
          >
            <FontAwesomeIcon icon={faArrowRight} />
            العودة للمدونة
          </Link>

          <div className="details-header-content">

            <Link
              to={`/blog?category=${encodeURIComponent(
                post.category
              )}`}
              className="details-category"
            >
              <FontAwesomeIcon icon={faTag} />
              {post.category}
            </Link>

            <h1 className="details-title">
              {post.title}
            </h1>

            <p className="details-excerpt">
              {post.excerpt}
            </p>

            <div className="details-meta">

              <div className="details-author">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                />

                <div>
                  <h3>{post.author.name}</h3>
                  <p>{post.author.role}</p>
                </div>
              </div>

              <div className="details-meta-item">
                <FontAwesomeIcon icon={faCalendarDays} />
                <span>{formattedDate}</span>
              </div>

              <div className="details-meta-item">
                <FontAwesomeIcon icon={faClock} />
                <span>{post.readTime}</span>
              </div>

            </div>

          </div>
        </div>
      </section>



      <section className="details-image-section">
        <div className="details-container">

          <div className="details-main-image">
            <img src={post.image} alt={post.title} />
          </div>

        </div>
      </section>



      <section className="details-content-section">
        <div className="details-article-container">

          <article className="details-article">

            <div className="details-content-heading">
              <FontAwesomeIcon icon={faBookOpen} />
              <span>محتوى المقال</span>
            </div>

            {paragraphs.map((paragraph, index) => {

              const text = paragraph.trim();

              if (text === "") {
                return null;
              }

              if (text.startsWith("## ")) {
                return (
                  <h2
                    className="details-article-heading"
                    key={index}
                  >
                    {text.replace("## ", "")}
                  </h2>
                );
              }

              return (
                <p
                  className="details-article-paragraph"
                  key={index}
                >
                  {text}
                </p>
              );
            })}

          </article>



          <div className="details-tags-section">

            <h3>
              <FontAwesomeIcon icon={faTag} />
              الوسوم
            </h3>

            <div className="details-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="details-tag">
                  {tag}
                </span>
              ))}
            </div>

          </div>



          <div className="details-author-card">

            <img
              src={post.author.avatar}
              alt={post.author.name}
            />

            <div>
              <span className="details-author-label">
                عن الكاتب
              </span>

              <h3>{post.author.name}</h3>

              <p>{post.author.role}</p>
            </div>

          </div>



          <div className="details-bottom-link">
            <Link to="/blog">
              <FontAwesomeIcon icon={faArrowRight} />
              العودة إلى جميع المقالات
            </Link>
          </div>

        </div>
      </section>



      {relatedPosts.length > 0 && (
        <section className="details-related-section">

          <div className="details-container">

            <div className="details-related-header">

              <div>
                <span className="section-badge">
                  اكتشف المزيد
                </span>

                <h2>مقالات ذات صلة</h2>

                <p>مقالات أخرى قد تنال إعجابك</p>
              </div>

              <Link
                to="/blog"
                className="details-view-all"
              >
                عرض جميع المقالات
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>

            </div>

            <div className="latest-posts-grid">
              {relatedPosts.map((item) => (
                <LatestPostCard
                  key={item.id}
                  post={item}
                />
              ))}
            </div>

          </div>

        </section>
      )}

    </main>
  );
}

export default BlogDetails;
