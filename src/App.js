// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar title="Online Text Converter" about="About Us" />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/home">
              <TextForm title="For Text Editor" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
