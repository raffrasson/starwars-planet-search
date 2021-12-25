import React from 'react';
import './App.css';
import Table from './components/Table';
import Header from './components/Header';
import StarProvider from './context/starProvider';

function App() {
  return (
    <StarProvider>
      <Header />
      <Table />
    </StarProvider>
  );
}

export default App;
