
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,
  faCircleInfo,
  faNewspaper,
  faUsers,
  faFolderOpen,
  faPenNib,
  faSun,
  faUser,
  faMountain,
  faSliders,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

import postsData from "../data/posts.json";

import FeaturedPostCard from "../components/FeaturedPostCard";
import LatestPostCard from "../components/LatestPostCard";
import Newsletter from "../components/Newsletter";

function Home() {
  const featuredPosts = postsData.posts.filter(
    (post) => post.featured === true
  );

  const latestPosts = postsData.posts
    .filter((post) => post.featured === false)
    .slice(0, 3);

  const categories = [
    { name: "إضاءة", icon: faSun },
    { name: "بورتريه", icon: faUser },
    { name: "مناظر طبيعية", icon: faMountain },
    { name: "تقنيات", icon: faSliders },
    { name: "معدات", icon: faCamera },
  ];

  return (
    <main>


      <section className="home-hero">
        <div className="home-hero-content">
          <div className="home-badge">
            <span className="badge-dot"></span>
            مرحباً بك في عدسة
            <span className="badge-dot"></span>
          </div>

          <h1 className="home-title">
            اكتشف <span>فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="home-description">
            انغمس في أسرار المحترفين ونصائح عملية
            لتطوير مهاراتك في التصوير.
          </p>

          <div className="home-buttons">
            <Link to="/blog" className="home-primary-button">
              استكشف المقالات
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>

            <Link to="/about" className="home-secondary-button">
              <FontAwesomeIcon icon={faCircleInfo} />
              اعرف المزيد
            </Link>
          </div>

          <div className="home-stats">
            <div className="stat-card">
              <FontAwesomeIcon icon={faNewspaper} />
              <h3>50+</h3>
              <p>مقالة</p>
            </div>

            <div className="stat-card">
              <FontAwesomeIcon icon={faUsers} />
              <h3>10+ آلاف</h3>
              <p>قارئ</p>
            </div>

            <div className="stat-card">
              <FontAwesomeIcon icon={faFolderOpen} />
              <h3>4</h3>
              <p>تصنيفات</p>
            </div>

            <div className="stat-card">
              <FontAwesomeIcon icon={faPenNib} />
              <h3>6</h3>
              <p>كاتب</p>
            </div>
          </div>
        </div>
      </section>



      <section className="featured-section">
        <div className="featured-container">
          <div className="featured-heading">
            <div className="featured-heading-text">
              <span className="section-badge">مميز</span>
              <h2>مقالات مختارة</h2>
              <p>محتوى منتقى لبدء رحلة تعلمك</p>
            </div>

            <Link to="/blog" className="featured-view-all">
              عرض الكل
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>

          <div className="featured-posts-list">
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>



      <section className="home-categories-section">
        <div className="home-categories-container">
          <div className="home-categories-heading">
            <span className="section-badge">التصنيفات</span>
            <h2>استكشف حسب الموضوع</h2>
            <p>اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>

          <div className="home-categories-grid">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/blog?category=${category.name}`}
                className="home-category-card"
              >
                <div className="home-category-icon">
                  <FontAwesomeIcon icon={category.icon} />
                </div>

                <h3>{category.name}</h3>

                <p>
                  {
                    postsData.posts.filter(
                      (post) => post.category === category.name
                    ).length
                  } مقالة
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>



      <section className="latest-posts-section">
        <div className="latest-posts-container">
          <div className="latest-posts-heading">
            <div>
              <span className="section-badge">الأحدث</span>
              <h2>أحدث المقالات</h2>
              <p>محتوى جديد طازج من المطبعة</p>
            </div>

            <Link to="/blog" className="latest-posts-view-all">
              عرض جميع المقالات
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>

          <div className="latest-posts-grid">
            {latestPosts.map((post) => (
              <LatestPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>



      <Newsletter />
    </main>
  );
}

export default Home;
