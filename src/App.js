import React from 'react';
import './App.css';
import Nav from './components/Nav'
import HomeSlider from './components/HomeSlider'
import HomePageBottom from './components/HomePageBottom'
import Gallery from './components/Gallery'
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" render={() => <HomeSlider />}></Route>
      <Route path="/gallery" render={() => <Gallery />}></Route>
      <HomePageBottom />
    </div>
  );
}

export default App;
