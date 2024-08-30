import React, { useContext, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiSignal } from 'react-icons/si';
import { LanguageContext } from './LanguageContext';
import { translations } from './translations';

function Contact() {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>{t.get_in_touch}</h2>
        <div className="grid">
          <div className="bg-white">
            <h3>Social Links</h3>
            <ul className="space-y-4">
              <li>
                <FaGithub className="mr-2 text-gray-700 text-2xl" />
                <a href="https://github.com/herajda" className="text-lg">GitHub</a>
              </li>
              <li>
                <SiSignal className="mr-2 text-blue-400 text-2xl" />
                <a href="https://signal.me/#kovar_stepan.19" className="text-lg">Signal</a>
              </li>
              <li>
                <FaSquareXTwitter className="mr-2 text-blue-400 text-2xl" />
                <a href="https://x.com/kovar_stepan" className="text-lg">X</a>
              </li>
              <li>
                <FaFacebook className="mr-2 text-blue-400 text-2xl" />
                <a href="https://www.facebook.com/stepan.kovar1/" className="text-lg">Facebook</a>
              </li>
            </ul>
          </div>
          <div className="bg-white">
            <h3>Email</h3>
            <ul className="space-y-2">
              <li>
                <FaEnvelope className="mr-2 text-blue-500" />
                <a href="mailto:kovar@skovar.cz">kovar@skovar.cz</a>
              </li>
              <li>
                <FaEnvelope className="mr-2 text-green-500" />
                <a href="mailto:kovar.stepan@protonmail.com">kovar.stepan@protonmail.com</a>
              </li>
              <li>
                <FaEnvelope className="mr-2 text-purple-500" />
                <a href="mailto:kovar.stepan@kavalirka.cz">kovar.stepan@kavalirka.cz</a>
              </li>
              <li>
                <FaEnvelope className="mr-2 text-red-500" />
                <a href="mailto:skovar@studentsforliberty.org">skovar@studentsforliberty.org</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
