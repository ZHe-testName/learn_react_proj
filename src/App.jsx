import React from "react";
import './App.css';
import Posts from "./pages/Posts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App (){
    return (
        <div className='app'>
            <Router>
                <Navbar />

                <Switch>
                    <Route path='/posts'>
                        <Posts />
                    </Route>

                    <Route path='/about'>
                        <About />
                    </Route>

                    {/* 
                    конструкция switch позволяет выбрать
                    один из представленых маршрутов
                    если маршруты не сходятся
                    то в конце конструкции switch
                    можно добавить редирект с адресом который отработает
                    если нужные адреса не будут найдены */}
                    <Redirect to='/posts'/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;