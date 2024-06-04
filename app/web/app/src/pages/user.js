import {React, useState, useEffect} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../App.css";

export default function User(props) {

    const [user, setUser] = useState({});
/* 
    useEffect(() => {
      const loggedUser = localStorage.getItem('loggedUser');
      if (loggedUser) {
        fetch(`${window.CONFIG.SERVER_BASE_URL}/user/${loggedUser}`)
         .then((response) => response.json())
         .then((data) => {
            setUser(data);
          })
         .catch((error) => {
            console.error(error);
          });
      } else {
        setUser({ message: 'No user logged right now' });
      }
    }, []); */

  return (
    <div className="mainContent">
      {/* HEADER-NAVBAR */}
      <Header />

      {/* MAIN PAGE CONTENT */}
      <div className="main content bg-translucent">
      {user.message? (
        <p>{user.message}</p>
      ) : (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          {/* Add more user info fields as needed */}
        </div>
      )}
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
