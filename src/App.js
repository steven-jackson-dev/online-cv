import React from 'react';
import {Switch,Route } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './templates/components/Header/Header';
import Footer from './templates/components/Footer/Footer';
import Homepage from './templates/pages/Homepage/Homepage';
import AboutMe from './templates/pages/AboutMe/AboutMe'
import Experience from './templates/pages/Experience/Experience'
import Skills from './templates/pages/Skills/Skills'
import Portfolio from './templates/pages/Portfolio/Portfolio'
import Projects from './templates/pages/Projects/Projects'
import Contact from './templates/pages/Contact/Contact'

function App() {
  return (
    <div className="App">
      <main>
      <Header />
        <Switch>
          <Route exact path="/"  component={Homepage} />
          <Route exact path="/about" component={AboutMe}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/portfolio" component={Skills}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route path='' component={Homepage}/>
        </Switch>
      </main>
       <Footer />
    </div>
  );
}

export default App;
