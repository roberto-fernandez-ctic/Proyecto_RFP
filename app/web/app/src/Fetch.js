import { useState, useEffect } from "react";
import devConfig from "./config.dev.json";

const Fetch = () => {
    useEffect(() => {
        console.log("DEVELOPMENT CONFIGURATION:");
        console.log(devConfig);
        window.CONFIG = devConfig;
      }, []);

  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch(`${window.CONFIG.SERVER_BASE_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setBackendData(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
  
    return () => {
        <div>
        <h1>Hello world!</h1>
          {backendData.map((user, i) => <p key={i}>{user.name}</p>)}
    
      </div>        
    }
  }, [])
};
export default Fetch;
