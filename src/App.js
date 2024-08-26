import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { LanguageProvider } from './LanguageContext.js';
import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import FAQ from './FAQ.js';
import Teaching from './Teaching.js';
import './styles.css';



function App() {

  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/FAQ" component={FAQ} />
              <Route path="/contact" component={Contact} />
              <Route path="/teaching" component={Teaching} />
            </Switch>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
