import {React, useState, useEffect} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginForm from "../components/login";
import "../App.css";

export default function Login(props) {
  //Configure a localStorage variable that will storage the username of the actual User
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [logged,setLogged] = useState(false);
  
   return (
    <div className="mainContent">
      {/* HEADER-NAVBAR */}
      <Header />

      {/* MAIN PAGE CONTENT */}
      <div className="main content bg-translucent">
        <LoginForm/>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}