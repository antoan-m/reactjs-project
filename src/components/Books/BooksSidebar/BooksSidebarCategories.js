import "./BooksSidebarCategories.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksSidebarCategories extends Component {
//   constructor(props) {
//     super(props)
//   }


render() {
  return (
    this.props.categoriesList.map(x => {
    return (
       <Link to={`/books/${x.category}`} className="books-sidebar-list-item-link" key={x.category}><article className="books-sidebar-list-item">{x.category.toUpperCase()}</article></Link>
       )
    })
      )}
    }

export default BooksSidebarCategories;