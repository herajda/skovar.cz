import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

function FAQ() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: t.question1, answer: t.answer1 },
    { question: t.question2, answer: t.answer2 },
    { question: t.question3, answer: t.answer3 },
  ];

  return (
    <section className="section faq">
      <h1>{t.FAQ_LONG}</h1>
      <div className="joke"><p>{t.FAQ_joke} &#128515;</p></div>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
            <button className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
