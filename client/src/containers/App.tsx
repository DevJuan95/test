import * as React from 'react';
import AppLayout from '../components/layouts/AppLayout';
import TracksContainer from './TracksContainer';
import './App.css';

function App() {
  return (
    <div>
      <AppLayout>
        <TracksContainer />
      </AppLayout>
    </div>
  );
}

export default App;
