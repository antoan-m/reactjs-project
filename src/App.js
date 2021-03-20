import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import BooksCategory from "./components/Books/BooksCategory"
import Book from "./components/Books/Book/Book";
import News from "./components/News/News";
import NewsCategory from "./components/News/NewsCategory";
import NewsArticle from "./components/News/NewsArticle";
import Authors from "./components/Authors/Authors"
import Author from "./components/Authors/Author"
import About from "./components/Pages/Contact"
import Login from "./components/User/Login"
import Register from "./components/User/Register"

import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/books/:category" component={BooksCategory} />
        <Route path="/books/:category/:id" component={Book} />
        <Route path="/news" component={News} />
        <Route path="/news/:category" component={NewsCategory} />
        <Route path="/news/:category/:id" component={NewsArticle} />
        <Route path="/authors" component={Authors} />
        <Route path="/authors/:id" component={Author} />
        <Route path="/about" exact component={About} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
      </Switch>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
