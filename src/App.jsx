import React from "react";
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

function App (){
    return (
        <div className='app'>
            <Router>
                <Navbar />

                <AppRouter />
            </Router>
        </div>
    );
};

export default App;