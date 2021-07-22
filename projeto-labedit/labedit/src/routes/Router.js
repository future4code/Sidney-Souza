import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from "../pages/LoginPage/LoginPage";
import FeedPostsPage from "../pages/FeedPostsPage/FeedPostsPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";


const Router =() => {
    return(
        <BrowserRouter>
            <Header/>
                <Switch>

                     <Route exact path = "/login">
                        <LoginPage/>
                     </Route>

                     <Route exact path= "/cadastro">
                        <SignUpPage/>
                     </Route>

                     <Route exact path= "/">
                        <FeedPostsPage/>
                     </Route>

                     <Route exact path= "/post/:id">
                        <PostPage/>
                     </Route>

                     <Route>
                       <ErrorPage />
                     </Route>

                </Switch>
           
        </BrowserRouter>
    )
}
export default Router