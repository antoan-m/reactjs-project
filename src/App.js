import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import BooksCategory from "./components/Books/BooksCategory"
import Book from "./components/Books/Book/Book";
import News from "./components/News/News";
import NewsArticleDetails from "./components/News/NewsArticleDetails";
import Authors from "./components/Authors/Authors"
import Author from "./components/Authors/Author"
import About from "./components/Pages/About"
import Contact from "./components/Pages/Contact"
import Terms from "./components/Pages/Terms";
import PageNotFound from "./components/Pages/PageNotFound";
import Login from "./components/User/Login"
import Register from "./components/User/Register"


import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books" exact component={Books} />
        <Route path="/books/:category" exact component={BooksCategory} />
        <Route path="/books/:category/:id" exact component={Book} />
        <Route path="/news" exact component={News} />
        <Route path="/news/:id" exact component={NewsArticleDetails} />
        <Route path="/authors" exact component={Authors} />
        <Route path="/authors/:id" exact component={Author} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/terms" exact component={Terms} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
        <Route path="/" component={PageNotFound} />
      </Switch>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
