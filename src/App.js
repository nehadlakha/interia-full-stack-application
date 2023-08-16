import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import News1 from "./components/News1";
import News2 from "./components/News2";
import News3 from "./components/News3";
import 'animate.css';
import WOW from 'wowjs';

class App extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/news1">
          <News1 />
        </Route>

        <Route path="/news2">
          <News2 />
        </Route>

        <Route path="/news3">
          <News3 />
        </Route>
      </Switch>
    )
  };
};

export default App;
