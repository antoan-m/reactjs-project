import "./App.css";
import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import BooksCategory from "./components/Books/BooksCategory";
import BooksAuthor from "./components/Books/BooksAuthor";
import BooksFormat from "./components/Books/BooksFormat";
import BooksPrice from "./components/Books/BooksPrice";
import BooksDiscounted from "./components/Books/BooksDiscounted";
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
import UserNewsletter from "./components/User/UserNewsletter";
import AddBook from "./components/User/AddBook";
import EditBook from "./components/User/EditBook";
import MyBooks from "./components/User/MyBooks";
import Orders from "./components/User/Orders";
import Order from "./components/User/Order";
import Wishlist from "./components/User/Wishlist";
import Admin from "./components/User/Admin";
import Cart from "./components/User/Cart";
import PageNotFound from "./components/Pages/PageNotFound";


export function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Route path="/books/category/:category" exact component={BooksCategory} />
        <Route path="/books/details/:id" exact component={BookArticleDetails} />
        <Route path="/books/author/:id" exact component={BooksAuthor} />
        <Route path="/books/format/:id" exact component={BooksFormat} />
        <Route path="/books/price/:id" exact component={BooksPrice} />
        <Route path="/books/discounted" exact component={BooksDiscounted} />
        <Route path="/books/oldest" exact component={BooksOldest} />
        <Route path="/books/newest" exact component={BooksNewest} />
        <Route path="/books/highprice" exact component={BooksHighPrice} />
        <Route path="/books/lowprice" exact component={BooksLowPrice} />
        <Route path="/news" exact component={News} />
        <Route path="/news/:id" exact component={NewsArticleDetails} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
        <Route path="/user/profile" exact component={Profile} />
        <Route path="/user/profile/newsletter" exact component={Newsletter} />
        <Route path="/user/profile/user-newsletter" exact component={UserNewsletter} />
        <Route path="/user/profile/addbook" exact component={AddBook} />
        <Route path="/user/profile/editbook/:id" exact component={EditBook} />
        <Route path="/user/profile/mybooks" exact component={MyBooks} />
        <Route path="/user/profile/orders" exact component={Orders} />
        <Route path="/user/profile/orders:id" exact component={Order} />
        <Route path="/user/profile/cart" exact component={Cart} />
        <Route path="/user/profile/wishlist" exact component={Wishlist} />
        <Route path="/user/profile/admin" exact component={Admin} />
        <Route path="/" component={PageNotFound} />
      </Switch>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
