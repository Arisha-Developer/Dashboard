import React from 'react';
import Main from './main';
import { Route, Routes } from "react-router-dom";
import News from './NavDashboard/Rootlayout';
import Messages from './NavDashboard/Dashlayout';
import Router from './Router/Router';
// import Home from './Home';
function App() {
  return (
    <Router/>
  );
}

export default App;
