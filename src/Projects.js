import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

function Projects() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];
  return (
    <section id="projects" className="section">
      <h2>{t.projects}</h2>
      <p>{t.projects_info}</p>
      <div className="project-grid">
        <div className="project-card">
          <h3>code-grader</h3>
          <p>{t.code_grader_info}</p>
          <p><a href="https://github.com/herajda/code-grader">GitHub link</a></p>
        </div>
        <div className="project-card">
          <h3>logistic-regression-haskell</h3>
          <p>{t.logistic_regression_info}</p>
          <p><a href="https://github.com/herajda/logistic_regression_haskell">GitHub link</a></p>
        </div>
        <div className="project-card">
          <h3>AlphaZero Chess</h3>
          <p>{t.alphazero_info}</p>
          <p><a href="https://github.com/herajda/alphazero_chess">GitHub link</a></p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
