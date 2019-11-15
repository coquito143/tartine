import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Gallery from './components/Gallery'
import HomePageBottom from './components/HomePageBottom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Gallery />
      <HomePageBottom />
    </div>
  );
}

export default App;
