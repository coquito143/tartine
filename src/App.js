import React from 'react';
import './App.css';
import Nav from './components/Nav'
import HomeSlider from './components/HomeSlider'
import HomePageBottom from './components/HomePageBottom'

function App() {
  return (
    <div className="App">
      <Nav />
      <HomeSlider />
      <HomePageBottom />
      
    </div>
  );
}

export default App;
