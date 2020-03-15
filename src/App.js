import React from 'react';
import {Switch,Route } from 'react-router-dom'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './templates/pages/Homepage/Homepage';
import { Footer } from './templates/components/Footer/Footer';
import AppRoutes from './inc/AppRoutes'
function App() {
  console.log(AppRoutes)
  return (
    <div className="App">
      <main>
       <Switch>
          <Route exact path="/">
            <Homepage />
          </Route> 
          {AppRoutes.map(e => {
              return <Route key={e.path} exact path={e.path} component={e.component} />
          })}
        </Switch>
      </main>
       <Footer />
    </div>
  );
}

export default App;
