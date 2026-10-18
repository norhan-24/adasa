
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMagnifyingGlass,
  faClock,
  faTableCellsLarge,
  faList,
  faChevronLeft,
  faChevronRight,
  faBookOpen,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import postsData from "../data/posts.json";
import LatestPostCard from "../components/LatestPostCard";

import "./Blog.css";

function Blog() {

  const [searchText, setSearchText] = useState("");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);


  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category") || "جميع المقالات";


  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];


  const filteredPosts = postsData.posts.filter((post) => {
    const matchCategory =
      selectedCategory === "جميع المقالات" ||
      post.category === selectedCategory;

    const matchSearch =
      post.title.toLowerCase().includes(searchText.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchText.toLowerCase());

    return matchCategory && matchSearch;
  });


  const postsPerPage = 6;

  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  const currentPage = Math.min(
    page,
    Math.max(totalPages, 1)
  );

  const startIndex = (currentPage - 1) * postsPerPage;

  const displayedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }


  function changeCategory(category) {
    if (category === "جميع المقالات") {
      setSearchParams({});
    } else {
      setSearchParams({ category: category });
    }

    setPage(1);
  }


  function handleSearch(event) {
    setSearchText(event.target.value);
    setPage(1);
  }


  function changePage(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);

      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
    }
  }

  return (
    <main className="blog-page">



      <section className="blog-hero">
        <div className="blog-hero-content">

          <span className="blog-hero-badge">
            <FontAwesomeIcon icon={faBookOpen} />
            مدونتنا
          </span>

          <h1>
            استكشف <span>مقالاتنا</span>
          </h1>

          <p>
            اكتشف الدروس والرؤى وأفضل الممارسات
            للتطوير الحديث
          </p>

        </div>
      </section>



      <section className="blog-filters-section">
        <div className="blog-container">

          <div className="blog-filters">

            <div className="blog-search">
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchText}
                onChange={handleSearch}
              />

              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <div className="blog-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => changeCategory(category)}
                  className={
                    selectedCategory === category
                      ? "blog-category-btn selected"
                      : "blog-category-btn"
                  }
                >
                  {category}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>



      <section className="blog-posts-section">
        <div className="blog-container">

          <div className="blog-posts-header">

            <p className="blog-results-count">
              عرض <strong>{filteredPosts.length}</strong> مقالات
            </p>

            <div className="blog-view-buttons">

              <button
                type="button"
                title="Grid View"
                onClick={() => setView("grid")}
                className={
                  view === "grid" ? "view-btn active" : "view-btn"
                }
              >
                <FontAwesomeIcon icon={faTableCellsLarge} />
              </button>

              <button
                type="button"
                title="List View"
                onClick={() => setView("list")}
                className={
                  view === "list" ? "view-btn active" : "view-btn"
                }
              >
                <FontAwesomeIcon icon={faList} />
              </button>

            </div>
          </div>

          {displayedPosts.length === 0 ? (
            <div className="blog-empty">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <h2>لا توجد مقالات</h2>
              <p>جرب البحث بكلمة أخرى أو اختر تصنيفاً مختلفاً</p>
            </div>
          ) : (
            <div>
              {view === "grid" ? (

                <div className="latest-posts-grid">
                  {displayedPosts.map((post) => (
                    <LatestPostCard
                      key={post.id}
                      post={post}
                    />
                  ))}
                </div>

              ) : (

                <div className="blog-list">

                  {displayedPosts.map((post) => (
                    <div className="blog-list-card" key={post.id}>

                      <Link
                        to={`/blog/${post.slug}`}
                        className="blog-list-image"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                        />

                        <span>{post.category}</span>
                      </Link>

                      <div className="blog-list-content">

                        <div className="blog-list-info">
                          <span>
                            <FontAwesomeIcon icon={faClock} />
                            {post.readTime}
                          </span>

                          <span>•</span>

                          <span>{post.date}</span>
                        </div>

                        <Link to={`/blog/${post.slug}`}>
                          <h2>{post.title}</h2>
                        </Link>

                        <p>{post.excerpt}</p>

                        <div className="blog-list-bottom">

                          <div className="blog-list-author">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                            />

                            <div>
                              <h4>{post.author.name}</h4>
                              <span>{post.author.role}</span>
                            </div>
                          </div>

                          <Link
                            to={`/blog/${post.slug}`}
                            className="blog-list-read"
                          >
                            اقرأ المقال
                            <FontAwesomeIcon icon={faArrowLeft} />
                          </Link>

                        </div>

                      </div>
                    </div>
                  ))}

                </div>
              )}
            </div>
          )}



          {totalPages > 1 && (
            <div className="blog-pagination">

              <div className="pagination-buttons">

                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => changePage(currentPage - 1)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>

                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    type="button"
                    onClick={() => changePage(number)}
                    className={
                      currentPage === number
                        ? "pagination-active"
                        : ""
                    }
                  >
                    {number}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => changePage(currentPage + 1)}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>

              </div>

              <p>
                صفحة {currentPage} من {totalPages}
              </p>

            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default Blog;
