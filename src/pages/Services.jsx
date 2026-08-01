import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">धार्मिक सेवाएं एवं अनुष्ठान</h1>
          <p className="page-hero-sub">वैदिक विधि-विधान से संपन्न होने वाले समस्त पूजन एवं संस्कार</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <div className="detail-text-body">
              <h2>वैदिक पूजन एवं अनुष्ठान सेवाएं</h2>
              <p>
                श्री रामेश्वर महादेव मंदिर में मुख्य पुजारी <strong>पीठाधीश्वर आचार्य पंडित अनूप तिवारी जी</strong> के आचार्यत्व में शास्त्रोक्त विधि से निम्नलिखित पूजा-अनुष्ठान संपन्न कराए जाते हैं:
              </p>

              <div className="full-services-list">
                <div className="full-service-card">
                  <span className="fs-icon">🛕</span>
                  <div className="fs-info">
                    <h3>1. रुद्राभिषेक एवं महापूजा</h3>
                    <p>एकादश रूद्र मंत्रों द्वारा गंगाजल, दूध, दही, घी, शहद, शक्कर, भस्म, केसर तथा बेलपत्र से भगवान शिव का दिव्य अभिषेक।</p>
                  </div>
                </div>

                <div className="full-service-card">
                  <span className="fs-icon">🕉️</span>
                  <div className="fs-info">
                    <h3>2. महामृत्युंजय मंत्र जाप अनुष्ठान</h3>
                    <p>असाध्य रोगों से मुक्ति, दुर्घटना भय निवारण एवं दीर्घायु प्राप्ति हेतु सवा लाख महामृत्युंजय मंत्र जाप एवं हवन।</p>
                  </div>
                </div>

                <div className="full-service-card">
                  <span className="fs-icon">🐍</span>
                  <div className="fs-info">
                    <h3>3. कालसर्प दोष & राहु-केतु शांति</h3>
                    <p>जन्मपत्रिका के कालसर्प दोष, राहु-केतु बाधा तथा पितृदोष शांति हेतु वरुणा नदी तट पर विशेष संकल्प एवं पूजा।</p>
                  </div>
                </div>

                <div className="full-service-card">
                  <span className="fs-icon">✂️</span>
                  <div className="fs-info">
                    <h3>4. मुंडन संस्कार एवं बाल पूजा</h3>
                    <p>शिशु के प्रथम मुंडन संस्कार हेतु मांगलिक वैदिक विधान एवं अन्नप्राशन पूजन।</p>
                  </div>
                </div>

                <div className="full-service-card">
                  <span className="fs-icon">🏠</span>
                  <div className="fs-info">
                    <h3>5. गृह प्रवेश एवं वास्तु शांति</h3>
                    <p>नवीन भवन प्रवेश हेतु नवग्रह शांति, वास्तु पूजन एवं कलश स्थापना।</p>
                  </div>
                </div>

                <div className="full-service-card">
                  <span className="fs-icon">📖</span>
                  <div className="fs-info">
                    <h3>6. श्री सत्यनारायण व्रत कथा</h3>
                    <p>पारिवारिक सुख-समृद्धि एवं संकट निवारण हेतु सत्यनारायण कथा एवं हवन प्रसादम।</p>
                  </div>
                </div>
              </div>

              <div className="page-action-row">
                <Link to="/priest" className="btn btn-primary">पीठाधीश्वर आचार्य पंडित अनूप तिवारी जी से संपर्क करें</Link>
                <Link to="/contact" className="btn btn-secondary">पूजा बुकिंग फॉर्म भरें</Link>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>पूजा सामग्री</h3>
              <p>मंदिर ट्रस्ट एवं पुजारी जी द्वारा समस्त पूजा सामग्री (बेलपत्र, गंगाजल, भस्म, फूल, दुग्ध) उपलब्ध कराई जाती है।</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
