
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Newsletter.css";

function Newsletter() {
  function handleSubscribe(event) {
    event.preventDefault();

    alert(
      "دي نسخة تجريبية من الاشتراك. إرسال الإيميلات محتاج Backend."
    );

    event.target.reset();
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-box">
        <div className="newsletter-icon">
          <FontAwesomeIcon icon={faEnvelope} />
        </div>

        <h2>
          اشترك في <span>نشرتنا الإخبارية</span>
        </h2>

        <p className="newsletter-description">
          احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة
          في بريدك الإلكتروني
        </p>

        <form
          className="newsletter-form"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            placeholder="أدخل بريدك الإلكتروني"
            required
          />

          <button type="submit">
            اشترك الآن
          </button>
        </form>

        <div className="newsletter-info">
          <span>انضم لـ +10,000 مصور</span>
          <span>•</span>
          <span>بدون إزعاج</span>
          <span>•</span>
          <span>إلغاء الاشتراك في أي وقت</span>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
