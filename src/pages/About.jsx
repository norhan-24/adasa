
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBookOpen,
  faPenNib,
  faUsers,
  faLayerGroup,
  faBullseye,
  faBolt,
  faHandshake,
  faArrowsRotate,
  faCheck,
  faEnvelope,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import postsData from "../data/posts.json";

import "./About.css";
import "./AboutSocial.css";

function About() {

  const authors = [];

  postsData.posts.forEach((post) => {
    const existingAuthor = authors.find(
      (author) => author.name === post.author.name
    );

    if (!existingAuthor) {
      authors.push(post.author);
    }
  });


  const statistics = [
    {
      number: postsData.posts.length,
      title: "مقالة منشورة",
      icon: faBookOpen,
    },
    {
      number: authors.length,
      title: "كاتب خبير",
      icon: faPenNib,
    },
    {
      number: postsData.categories.length,
      title: "تصنيفات",
      icon: faLayerGroup,
    },
    {
      number: postsData.posts.filter(
        (post) => post.featured === true
      ).length,
      title: "مقالات مميزة",
      icon: faUsers,
    },
  ];


  const values = [
    {
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
      icon: faBullseye,
    },
    {
      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
      icon: faBolt,
    },
    {
      title: "المجتمع",
      description: "تعلم مع مجتمع المصورين",
      icon: faHandshake,
    },
    {
      title: "دائماً مُحدّث",
      description: "أحدث الاتجاهات وأفضل الممارسات",
      icon: faArrowsRotate,
    },
  ];

  return (
    <main className="about-page">



      <section className="about-hero">
        <div className="about-container">

          <span className="about-badge">
            <span className="about-dot"></span>
            من نحن
            <span className="about-dot"></span>
          </span>

          <h1>
            مهمتنا هي
            <span> الإلهام والإبداع</span>
          </h1>

          <p className="about-hero-description">
            {postsData.siteInfo.description}
            {" "}
            نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال
            محتوى عالي الجودة.
          </p>

          <div className="about-stats">
            {statistics.map((stat) => (
              <div
                className="about-stat-card"
                key={stat.title}
              >
                <FontAwesomeIcon icon={stat.icon} />

                <h3>{stat.number}</h3>

                <p>{stat.title}</p>
              </div>
            ))}
          </div>

        </div>
      </section>



      <section className="about-values-section">
        <div className="about-container">

          <div className="about-section-title">
            <h2>قيمنا</h2>

            <p>
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => (
              <div
                className="about-value-card"
                key={value.title}
              >
                <FontAwesomeIcon
                  icon={value.icon}
                  className="about-value-icon"
                />

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>



      <section className="about-team-section">
        <div className="about-container">

          <div className="about-team-heading">

            <span className="about-badge">
              <span className="about-dot"></span>
              فريقنا
            </span>

            <h2>تعرف على كتابنا</h2>

            <p>
              فريقنا من المصورين والكتاب ذوي الخبرة
              شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>

          </div>

          <div className="about-team-grid">

            {authors.map((author) => (
              <div
                className="about-author-card"
                key={author.name}
              >



                <div className="about-author-photo">

                  <img
                    src={author.avatar}
                    alt={author.name}
                    loading="lazy"
                  />

                  <span className="about-check">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>

                </div>



                <h3>{author.name}</h3>

                <p>{author.role}</p>



                <div className="about-author-social">

                  <span
                    title="X"
                    role="img"
                    aria-label="X"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </span>

                  <span
                    title="GitHub"
                    role="img"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </span>

                  <span
                    title="LinkedIn"
                    role="img"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>



      <section className="about-contact-section">

        <div className="about-contact-content">

          <h2>لديك أسئلة؟ دعنا نتحدث!</h2>

          <p>
            نحب أن نسمع منك. سواء كان لديك سؤال حول
            محتوانا، أو تريد المساهمة، أو تريد فقط
            إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="about-contact-buttons">

            <a
              href={`mailto:${postsData.siteInfo.email}`}
              className="about-contact-button"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              تواصل معنا
            </a>

            <Link
              to="/blog"
              className="about-browse-button"
            >
              تصفح المقالات
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;
