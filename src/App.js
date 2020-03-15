import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './templates/pages/Homepage/Homepage';
import { Footer } from './templates/components/Footer/Footer';

function App() {


  return (
    <div className="App">
      <main>
        <Homepage />
        <Footer />
      </main>
    </div>
  );
}

export default App;
