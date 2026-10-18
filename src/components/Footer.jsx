
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCamera,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import {
  faYoutube,
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import postsData from "../data/posts.json";

import "./Footer.css";

function Footer() {
  const categories = [
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  function handleFooterSubscribe(event) {
    event.preventDefault();

    alert("الاشتراك تجريبي حاليًا ومش مربوط بخدمة إرسال بريد.");

    event.target.reset();
  }

  return (
    <footer className="site-footer">
      <div className="footer-container">



        <div className="footer-column footer-brand">

          <div className="footer-logo">
            <FontAwesomeIcon icon={faCamera} />
            <h2>عدسة</h2>
          </div>

          <p>
            مدونة متخصصة في فن التصوير الفوتوغرافي.
            نشارك معكم أسرار المحترفين ونصائح عملية
            لتطوير مهاراتكم.
          </p>



          <div className="footer-social">

            <a
              href={postsData.siteInfo.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              aria-label="YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a
              href={postsData.siteInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href={postsData.siteInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href={postsData.siteInfo.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              title="X"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>

          </div>

        </div>



        <div className="footer-column">

          <h3>استكشف</h3>

          <Link to="/">الرئيسية</Link>
          <Link to="/blog">المدونة</Link>
          <Link to="/about">من نحن</Link>

        </div>



        <div className="footer-column">

          <h3>التصنيفات</h3>

          {categories.map((category) => (
            <Link
              key={category}
              to={`/blog?category=${category}`}
            >
              {category}
            </Link>
          ))}

        </div>



        <div className="footer-column footer-subscribe">

          <h3>ابقَ على اطلاع</h3>

          <p>
            اشترك للحصول على أحدث المقالات والتحديثات.
          </p>

          <form onSubmit={handleFooterSubscribe}>

            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              required
            />

            <button type="submit">
              اشترك
            </button>

          </form>

        </div>

      </div>



      <div className="footer-bottom">

        <p>
          © 2026 عدسة. صنع بكل{" "}
          <FontAwesomeIcon icon={faHeart} />
          {" "}جميع الحقوق محفوظة.
        </p>

        <div>
          <span>سياسة الخصوصية</span>
          <span>شروط الخدمة</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
