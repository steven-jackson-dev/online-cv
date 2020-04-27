import React from 'react';
import { reusableFunction } from 'utils/common'
import { AppHeader, AppFooter } from 'components';
import AppRenderRoutes from 'global/AppRenderRoutes.module';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'global/global.scss';

function App() {
  reusableFunction()
  return (
    <div className="App">
      <AppHeader />
      <main className='content'>
      <AppRenderRoutes />
      </main>
       
      <AppFooter />
    </div>
  );
}

export default App;
