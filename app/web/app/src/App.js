import React, {Suspense, useEffect, useState } from 'react'
import axios from 'axios';
import devConfig from "./config.dev.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import Fetch from './Fetch';

function App() {

/*   useEffect(() => {
    console.log("DEVELOPMENT CONFIGURATION:");
    console.log(devConfig);
    window.CONFIG = devConfig;
  }, []); */

  return (
    <Fetch/>
  )
}

export default App

function PageComposer(props) {
  return (
    <div>
      {props.page()}
    </div>
  );
}
