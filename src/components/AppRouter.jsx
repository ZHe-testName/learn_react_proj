import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { privateRoutes, publicRoutes } from '../routes/routes';

const AppRouter = () => {
    const isAuth = false;

    return (
        isAuth
            ?
            <Switch>
                {
                    privateRoutes.map(r => <Route
                                                key={r.path} 
                                                path={r.path} 
                                                component={r.component} 
                                                exact={r.exact}/>)
                }

                {/* 
                конструкция switch позволяет выбрать
                один из представленых маршрутов
                если маршруты не сходятся
                то в конце конструкции switch
                можно добавить редирект с адресом который отработает
                если нужные адреса не будут найдены */}
                <Redirect to='/posts'/>
            </Switch> 
            :
            <Switch>
                {
                    publicRoutes.map(r => <Route
                                                key={r.path} 
                                                path={r.path} 
                                                component={r.component} 
                                                exact={r.exact}/>)
                }

                <Redirect to='/login'/>
            </Switch> 
    );
};

export default AppRouter;