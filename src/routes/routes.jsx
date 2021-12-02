import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    //exact нужен чтобы маршрутизатор
    //воспринимал путь именно таким каким он есть 
    //в противном случае /posts и /posts/id
    //будут восприняты как один и тотже маршрут 
    {path: '/about', component: About, exact: false},
    {path: '/posts', component: Posts, exact: true},

    //для того чтобы динамически добавлять часть маршрута
    //нужно поставить двоеточие перед параметром
    {path: '/posts/:id', component: PostIdPage, exact: true},
];

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
];