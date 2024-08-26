import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

function Teaching() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="teaching" className="section teaching">
      <div className="container">
        <h2>{t.teaching}</h2>
        <p>{t.teaching_info_1} <a href="https://kavalirka.cz/">{t.teaching_info_2}</a>{t.teaching_info_3} <a href="https://seminar.skovar.cz/">{t.teaching_info_4}</a>{t.teaching_info_5}</p>
      </div>
    </section>
  );
}

export default Teaching;
