import "./App.css";
import React, { useEffect, useMemo, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { UserContext } from './services/UserContext';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import BooksCategory from "./components/Books/BooksCategory";
import BooksAuthor from "./components/Books/BooksAuthor";
import BooksFormat from "./components/Books/BooksFormat";
import BooksPrice from "./components/Books/BooksPrice";
import BooksPriceBelow10 from "./components/Books/BooksPriceBelow10";
import BooksPriceBetween10AND20 from "./components/Books/BooksPriceBetween10AND20";
import BooksPriceOver20 from "./components/Books/BooksPriceOver20";
import BooksPromo from "./components/Books/BooksPromo";
import BooksOldest from "./components/Books/BooksOldest";
import BooksNewest from "./components/Books/BooksNewest";
import BooksHighPrice from "./components/Books/BooksHighPrice";
import BooksLowPrice from "./components/Books/BooksLowPrice";
import BookArticleDetails from "./components/Books/BookArticleDetails";
import News from "./components/News/News";
import NewsArticleDetails from "./components/News/NewsArticleDetails";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Terms from "./components/Pages/Terms";
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Profile from "./components/User/Profile";
import ProfileDetails from "./components/User/ProfileDetails";
import ProfileDetailsEdit from "./components/User/ProfileDetailsEdit";
import MyNewsletters from "./components/User/MyNewsletters";
import AddBook from "./components/User/AddBook";
import EditBook from "./components/User/EditBook";
import AddNews from "./components/User/AddNews";
import EditNews from "./components/User/EditNews";
import MyBooks from "./components/User/MyBooks";
import MyNews from "./components/User/MyNews";
import MySlides from "./components/User/MySlides";
import AddSlide from "./components/User/AddSlide";
import EditSlide from "./components/User/EditSlide";
import Orders from "./components/User/Orders";
import Order from "./components/User/Order";
import Wishlist from "./components/User/Wishlist";
import Admin from "./components/User/Admin";
import Cart from "./components/User/Cart";
import PageNotFound from "./components/Pages/PageNotFound";
import userService from "./services/userService";

export function App() {

  let [user, setUser] = useState('guest');
  let [loggedIn, setLoggedIn] = useState('guest');
  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  
useEffect(() => {
  const userToken = localStorage.getItem('user-token');
  const userId = localStorage.getItem('id');

if(userToken) {
  userService.userValidate(userToken)
      .then(result => {
        console.log(result);
        setLoggedIn(result);
      userService.userData(userId)
      .then(user => {
        setUser(user);
          
          //setUser(JSON.stringify(user))
          // localStorage.setItem('user', JSON.stringify(user))
        })
      })
    }

},[])

  return (
    <div className="App">
      <UserContext.Provider value={value}>
      <Header userData={user} loggedIn={loggedIn} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Route path="/books/category/:category" exact component={BooksCategory} />
        <Route path="/books/details/:id" exact component={BookArticleDetails} />
        <Route path="/books/author/:id" exact component={BooksAuthor} />
        <Route path="/books/format/:id" exact component={BooksFormat} />
        <Route path="/books/price/:id" exact component={BooksPrice} />
        <Route path="/books/price/below/10" exact component={BooksPriceBelow10} />
        <Route path="/books/price/10/20" exact component={BooksPriceBetween10AND20} />
        <Route path="/books/price/over/20" exact component={BooksPriceOver20} />
        <Route path="/books/promo" exact component={BooksPromo} />
        <Route path="/books/oldest" exact component={BooksOldest} />
        <Route path="/books/newest" exact component={BooksNewest} />
        <Route path="/books/highprice" exact component={BooksHighPrice} />
        <Route path="/books/lowprice" exact component={BooksLowPrice} />
        <Route path="/news" exact component={News} />
        <Route path="/news/details/:id" exact component={NewsArticleDetails} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
        <Route path="/user/logout" exact component={Home} />
        <Route path="/user/profile" exact component={Profile} />
        <Route path="/user/profile/details/:userid" exact component={ProfileDetails} />
        <Route path="/user/profile/details/:userid/edit" exact component={ProfileDetailsEdit} />
        <Route path="/user/profile/mynewsletters" exact component={MyNewsletters} />
        {/* <Route path="/user/profile/user-newsletter" exact component={UserNewsletter} /> */}
        <Route path="/user/profile/addbook" exact component={AddBook} />
        <Route path="/user/profile/editbook/:id" exact component={EditBook} />
        <Route path="/user/profile/mybooks" exact component={MyBooks} />
        <Route path="/user/profile/addnews" exact component={AddNews} />
        <Route path="/user/profile/editnews/:id" exact component={EditNews} />
        <Route path="/user/profile/mynews" exact component={MyNews} />
        <Route path="/user/profile/myslides" exact component={MySlides} />
        <Route path="/user/profile/addslide" exact component={AddSlide} />
        <Route path="/user/profile/editslide/:id" exact component={EditSlide} />
        <Route path="/user/profile/orders" exact component={Orders} />
        <Route path="/user/profile/orders/:id" exact component={Order} />
        <Route path="/user/profile/cart" exact component={Cart} />
        <Route path="/user/profile/wishlist" exact component={Wishlist} />
        <Route path="/user/profile/admin" exact component={Admin} />
        <Route path="/" component={PageNotFound} />
      </Switch>
      <Newsletter />
      <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
