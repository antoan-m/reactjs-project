import "./BooksSidebarPrices.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksSidebarPrices extends Component {
//   constructor(props) {
//     super(props)
//   }


render() {
  return (
    this.props.pricesList.map(x => {
    return (
       <Link to={`/books/${x.price}`} exact className="books-sidebar-list-item-link" key={x.price}><li className="books-sidebar-list-item">{x.price.toUpperCase()}</li></Link>
       )
    })
      )}
    }

export default BooksSidebarPrices;