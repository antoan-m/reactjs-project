import "./App.css";
import React, { useEffect, useMemo, useState, useContext, Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { UserContext } from './context/UserContext';

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
import ContactBG from "./components/Pages/ContactBG";
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
import OrdersSeller from "./components/User/OrdersSeller";
import OrderSeller from "./components/User/OrderSeller";
import Wishlist from "./components/User/Wishlist";
import CartSuccess from "./components/User/CartSuccess";
import Cart from "./components/User/Cart";

import PageNotFound from "./components/Pages/PageNotFound";
import userService from "./services/userService";
import { ProtectedRoute, ProtectedRouteUser } from "./components/utils/ProtectedRoute";


export function App() {

  let [user, setUser] = useState('guest');
  let [loggedIn, setLoggedIn] = useState(false);
  let [cart, setCart] = useState(false);
  let [cartItems, setCartItems] = useState(false);
  // const value = useMemo(() => ({user, setUser}), [user, setUser]);

  
useEffect(() => {
  const userToken = localStorage.getItem('user-token');
  const userId = localStorage.getItem('id');

if(userToken) {
  userService.userValidate(userToken)
      .then(result => {
        setLoggedIn(result);
        console.log('check user: ', result)
        
      userService.userData(userId)
      .then(user => {
        setUser(user);
        })
      })
    }
    checkCartIfFull();
    
    function checkCartIfFull() {
      if (localStorage.getItem('cart')) {
      setCart(true) 
      setCartItems(localStorage.getItem('cart').split(','))
    } else {
      setCart(false)
    }
  }
},[])

console.log('logged: ', loggedIn);

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser, loggedIn, setLoggedIn, cartItems, setCartItems]}>
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
        <Route path="/contact-bg" exact component={ContactBG} />
        <Route path="/terms" exact component={Terms} />
        <ProtectedRouteUser path="/user/login" loggedIn={loggedIn} exact component={Login} />
        <ProtectedRouteUser path="/user/register" loggedIn={loggedIn} exact component={Register} />
        <ProtectedRoute path="/user/logout" loggedIn={loggedIn} exact component={Home} />
        <ProtectedRoute path="/user/profile" loggedIn={loggedIn} exact component={Profile} />
        <ProtectedRoute path="/user/profile/details/:userid" loggedIn={loggedIn} exact component={ProfileDetails} />
        <ProtectedRoute path="/user/profile/details/:userid/edit" loggedIn={loggedIn} exact component={ProfileDetailsEdit} />
        <ProtectedRoute path="/user/profile/mynewsletters" loggedIn={loggedIn} exact component={MyNewsletters} />
        <ProtectedRoute path="/user/profile/addbook" loggedIn={loggedIn} exact component={AddBook} />
        <ProtectedRoute path="/user/profile/editbook/:id" loggedIn={loggedIn} exact component={EditBook} />
        <ProtectedRoute path="/user/profile/mybooks" loggedIn={loggedIn} exact component={MyBooks} />
        <ProtectedRoute path="/user/profile/addnews" loggedIn={loggedIn} exact component={AddNews} />
        <ProtectedRoute path="/user/profile/editnews/:id" loggedIn={loggedIn} exact component={EditNews} />
        <ProtectedRoute path="/user/profile/mynews" loggedIn={loggedIn} exact component={MyNews} />
        <ProtectedRoute path="/user/profile/myslides" loggedIn={loggedIn} exact component={MySlides} />
        <ProtectedRoute path="/user/profile/addslide" loggedIn={loggedIn} exact component={AddSlide} />
        <ProtectedRoute path="/user/profile/editslide/:id" loggedIn={loggedIn} exact component={EditSlide} />
        <ProtectedRoute path="/user/profile/orders" loggedIn={loggedIn} exact component={Orders} />
        <ProtectedRoute path="/user/profile/orders/:id" loggedIn={loggedIn} exact component={Order} />
        <ProtectedRoute path="/user/profile/orders-seller" loggedIn={loggedIn} exact component={OrdersSeller} />
        <ProtectedRoute path="/user/profile/orders-seller/:id" loggedIn={loggedIn} exact component={OrderSeller} />
        <ProtectedRoute path="/user/profile/wishlist" loggedIn={loggedIn} exact component={Wishlist} />
        <Route path="/user/profile/cart" exact component={Cart} />
        <Route path="/user/profile/cart-success" exact component={CartSuccess} />
        <Route path="/" component={PageNotFound} />
      </Switch>
      <Newsletter />
      <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
