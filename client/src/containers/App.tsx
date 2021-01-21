import * as React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import HomeContainer from './HomeContainer';
import './App.css';

function App() {
  return (
    <div>
      <AppLayout>
        <HomeContainer />
      </AppLayout>
    </div>
  );
}

export default App;
