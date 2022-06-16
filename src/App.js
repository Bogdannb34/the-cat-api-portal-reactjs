import React from "react";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar";
import { Home, MyImages, PublicImages, Upload } from './pages';

import './App.css';

function App() {
  return (
    <div className="app__wrapper">
      <Navbar />
      <Switch>
        <Route path="/the-cat-api-portal-reactjs" component={Home} />
        <Route path='/upload' component={Upload} />
        <Route path='/myImages' component={MyImages} />
        <Route path='/publicImages' component={PublicImages} />
      </Switch>
    </div>
  );
}

export default App;
