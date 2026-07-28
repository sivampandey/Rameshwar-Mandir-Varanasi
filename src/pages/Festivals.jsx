import React from 'react';
import { Link } from 'react-router-dom';

export default function Festivals() {
  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">वार्षिक पर्व एवं धार्मिक उत्सव</h1>
          <p className="page-hero-sub">श्री रामेश्वर महादेव मंदिर में वर्ष भर आयोजित होने वाले भव्य मेले एवं उत्सव</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <div className="detail-text-body">
              <h2>प्रमुख वार्षिक धार्मिक उत्सव</h2>

              <div className="full-festivals-list">
                <div className="fest-detail-box">
                  <h3>1. महाशिवरात्रि पर्व महोत्सव (फाल्गुन कृष्ण चतुर्दशी)</h3>
                  <p>
                    महाशिवरात्रि श्री रामेश्वर महादेव मंदिर का सबसे बड़ा वार्षिक उत्सव है।
                    इस दिन संपूर्ण मंदिर को रंग-बिरंगे प्रकाश एवं ताजे पुष्पों से भव्य रूप से सजाया जाता है।
                    रात्रि भर 4 प्रहर की विशेष महाआरती, भस्म आरती एवं शिव पार्वती विवाह का अनुष्ठान होता है।
                  </p>
                </div>

                <div className="fest-detail-box">
                  <h3>2. सावन मास महोत्सव (श्रावण मास)</h3>
                  <p>
                    संपूर्ण सावन मास में भगवान रामेश्वर महादेव का प्रतिदिन अलग-अलग स्वरूपों में विशेष भव्य श्रृंगार किया जाता है।
                    चारों सावन सोमवार को लाखों कांवड़िए गंगाजल लाकर जलाभिषेक करते हैं।
                  </p>
                </div>

                <div className="fest-detail-box">
                  <h3>3. लोटा-भंटा मेला (मार्गशीर्ष शुक्ल षष्ठी)</h3>
                  <p>
                    यह काशी का अति प्राचीन एवं पारंपरिक मेला है जो श्री रामेश्वर महादेव मंदिर परिसर में आयोजित होता है।
                    इस दिन स्थानीय ग्रामीण एवं श्रद्धालु वरुणा तट पर उपले जलाकर उसमें बैंगन (भंटा) और बाटी पकाते हैं और भगवान शिव को भोग लगाते हैं।
                  </p>
                </div>

                <div className="fest-detail-box">
                  <h3>4. पंचकोशी मेला (वैशाख / कार्तिक मास)</h3>
                  <p>
                    पंचकोशी यात्रा के दौरान रामेश्वर पड़ाव पर विशाल मेले का स्वरूप बन जाता है।
                    मंदिर ट्रस्ट द्वारा सभी पदयात्रियों के लिए निःशुल्क भोजन, चिकित्सा एवं विश्राम की व्यवस्था की जाती है।
                  </p>
                </div>
              </div>

              <div className="page-action-row">
                <Link to="/timings" className="btn btn-primary">आरती का समय देखें</Link>
                <Link to="/gallery" className="btn btn-secondary">उत्सव की तस्वीरें देखें</Link>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>उत्सव कैलेंडर</h3>
              <ul className="sidebar-info-list">
                <li><strong>फाल्गुन:</strong> महाशिवरात्रि</li>
                <li><strong>श्रावण:</strong> सावन सोमवार मेला</li>
                <li><strong>मार्गशीर्ष:</strong> लोटा-भंटा मेला</li>
                <li><strong>वैशाख:</strong> पंचकोशी परिक्रमा</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
