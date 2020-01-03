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
    bakery_selected: false,
    gallery_selected: false
  }

  handleClick = async (selection) => {
    if (selection === 'menu') {
      this.setState({
        menu_selected: true,
        bakery_selected: false,
        gallery_selected: false
      })
    }
    else if (selection === 'gallery') {
      this.setState({
        menu_selected: false,
        bakery_selected: false,
        gallery_selected: true
      })
    }
    else if (selection === 'home') {
      this.setState({
        menu_selected: false,
        bakery_selected: false,
        gallery_selected: false
      })
    }
    else if (selection === 'bakery') {
      this.setState({
        menu_selected: false,
        bakery_selected: true,
        gallery_selected: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Nav
          handleClick={this.handleClick}
          menu_selected={this.state.menu_selected}
          bakery_selected={this.state.bakery_selected}
          gallery_selected={this.state.gallery_selected}
          />
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
