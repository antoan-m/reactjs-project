import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import Book from "./components/Books/Book/Book";
import News from "./components/News/News";
import NewsArticle from "./components/News/NewsArticle";
import Authors from "./components/Authors/Authors"
import Author from "./components/Authors/Author"
import About from "./components/Pages/Contact"

import { Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/books/:id" component={Book} />
        <Route path="/news" component={News} />
        <Route path="/news/:id" component={NewsArticle} />
        <Route path="/authors" component={Authors} />
        <Route path="/authors/:id" component={Author} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
