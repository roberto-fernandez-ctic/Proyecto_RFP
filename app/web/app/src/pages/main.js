import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Main(props) {
    return (
        <div className="mainContent">
            {/* HEADER-NAVBAR */}
            <Header/> 

            {/* MAIN PAGE CONTENT */}
            <div className="main">
                <header>
                    
                </header>
            </div>

            {/* FOOTER */}
            <Footer/>
        </div>  
    );
};
