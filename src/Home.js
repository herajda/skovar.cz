import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';


function Home() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];


  return (
    <section className="section home" style={{ backgroundImage: "url('background_stepan.jpg')", backgroundSize: 'cover' }}>
      <h1>{t.welcome}</h1>
      <p>{t.intro}</p>
    </section>
  );
}

export default Home;
