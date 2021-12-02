import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Posts from '../pages/Posts';
import About from '../pages/About'
import ErrorPage from '../pages/ErrorPage';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
    return (
        <>
            <Switch>
                {/* exact нужен чтобы маршрутизатор
                воспринимал путь именно таким каким он есть 
                в противном случае /posts и /posts/id
                будут восприняты как один и тотже маршрут */}
                <Route exact path='/posts'>
                    <Posts />
                </Route>

                <Route path='/about'>
                    <About />
                </Route>

                <Route path='/error'>
                    <ErrorPage />
                </Route>

                {/* для того чтобы динамически добавлять часть маршрута
                нужно поставить двоеточие перед параметроь */}
                <Route exact path='/posts/:id'>
                    <PostIdPage />
                </Route>

                {/* 
                конструкция switch позволяет выбрать
                один из представленых маршрутов
                если маршруты не сходятся
                то в конце конструкции switch
                можно добавить редирект с адресом который отработает
                если нужные адреса не будут найдены */}
                <Redirect to='/error'/>
            </Switch> 
        </>
    );
};

export default AppRouter;