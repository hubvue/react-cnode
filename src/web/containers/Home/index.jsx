import React from "react";
import "./index.css";

import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import MainContainer from "../../components/MainContainer/index"; 
const App = () => {
    return (
        <>
            <Header />
            <MainContainer/>
            <Footer />
        </>
    )
}

export default App;
