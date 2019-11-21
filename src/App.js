import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import Nav from './components/Nav'
import HomeSlider from './components/HomeSlider'
import Menu from './components/Menu'
import HomePageBottom from './components/HomePageBottom'
import Gallery from './components/Gallery'

class App extends Component {
  state = { 
    menu_selected: false,
    gallery_selected: false
  }

  handleClick = async (selection) => {
    if (selection == 'menu') {
      debugger
      this.setState({
        menu_selected: true,
        gallery_selected: false
      })
    }
    else if (selection == 'gallery') {
      debugger
      this.setState({
        menu_selected: false,
        gallery_selected: true
      })
    }
    else if (selection == 'home') {
      debugger
      this.setState({
        menu_selected: false,
        gallery_selected: false
      })
    }
  }

  render() {
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
}

export default App;
