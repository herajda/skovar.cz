import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  const highlightJSON = (obj, depth = 0) => {
    const indent = '  '.repeat(depth);
    let result;

    if (Array.isArray(obj)) {
      // Handle arrays differently to maintain their structure without enumeration
      result = '[\n';
      obj.forEach((item, index) => {
        result += `${indent}  ${highlightJSON(item, depth + 1)}`;
        if (index < obj.length - 1) {
          result += ',';
        }
        result += '\n';
      });
      result += `${indent}]`;
    } else if (typeof obj === 'object' && obj !== null) {
      result = '{\n';
      Object.keys(obj).forEach((key, index, array) => {
        const value = obj[key];
        result += `${indent}  <span class="key">"${key}"</span>: `;
        result += highlightJSON(value, depth + 1);
        
        if (index < array.length - 1) {
          result += ',';
        }
        result += '\n';
      });
      result += `${indent}}`;
    } else if (typeof obj === 'string') {
      // Check if the string is a URL or an email and wrap appropriately
      if (obj.startsWith('http://') || obj.startsWith('https://')) {
        result = `<span class="string">"<a href="${obj}" target="_blank" rel="noopener noreferrer">${obj}</a>"</span>`;
      } else if (obj.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        result = `<span class="string">"<a href="mailto:${obj}">${obj}</a>"</span>`;
      } else {
        result = `<span class="string">"${obj}"</span>`;
      }
    } else if (typeof obj === 'number') {
      result = `<span class="number">${obj}</span>`;
    } else if (typeof obj === 'boolean') {
      result = `<span class="boolean">${obj}</span>`;
    } else if (obj === null) {
      result = `<span class="null">null</span>`;
    }

    return result;
  };

  const highlightedJSON = highlightJSON(t.aboutInfo);

  return (
    <section id="about" className="section">
      <h2>{t.about}</h2>
      <pre className="json-code">
        <code dangerouslySetInnerHTML={{ __html: highlightedJSON }}></code>
      </pre>
    </section>
  );
}

export default About;
