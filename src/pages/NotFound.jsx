
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTriangleExclamation,
  faHouse,
  faArrowLeft,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

import "./NotFound.css";

function NotFound() {
  return (
    <main className="notfound-page">

      <div className="notfound-container">



        <div className="notfound-icon">
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </div>



        <div className="notfound-number">
          <span>4</span>

          <div className="notfound-zero">
            <FontAwesomeIcon icon={faCamera} />
          </div>

          <span>4</span>
        </div>



        <div className="notfound-content">

          <span className="notfound-badge">
            الصفحة غير موجودة
          </span>

          <h1>
            يبدو أنك <span>ضللت الطريق!</span>
          </h1>

          <p>
            عذراً، الصفحة التي تبحث عنها غير موجودة
            أو ربما تم نقلها إلى مكان آخر.
          </p>

          <p>
            لا تقلق، يمكنك العودة إلى الصفحة الرئيسية
            أو استكشاف مقالاتنا.
          </p>

        </div>



        <div className="notfound-buttons">

          <Link to="/" className="notfound-home-btn">
            <FontAwesomeIcon icon={faHouse} />
            العودة للرئيسية
          </Link>

          <Link to="/blog" className="notfound-blog-btn">
            استكشف المقالات
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>

        </div>

      </div>

    </main>
  );
}

export default NotFound;
