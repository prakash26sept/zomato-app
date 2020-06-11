import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Navigation from './navigation/navigation';
import { connect } from "react-redux";

function App(props: any) {
  return (
    <div className={`App ${props.darkTheme ? "dark-app" : ""}`}>
      <Router>
        <Navigation />
      </Router>

    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    darkTheme: state.darkTheme
  };
};


function mapDispatchToProps(dispatch: any) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);