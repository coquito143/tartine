import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Nav from './components/Nav'
import HomeSlider from './components/HomeSlider'
import Menu from './components/Menu'
import HomePageBottom from './components/HomePageBottom'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/" render={() => <HomeSlider />}></Route>
      <Route path="/gallery" render={() => <Gallery />}></Route>

      <Route path="/menu" render={() =>
            <Menu />}
          />
      <HomePageBottom />
    </div>
  );
}

export default App;
