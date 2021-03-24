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
       <Link to={`/books/price/${x.price}`} className="books-sidebar-list-item-link" key={x.price}><article className="books-sidebar-list-item">{x.price.toUpperCase()}</article></Link>
       )
    })
      )}
    }

export default BooksSidebarPrices;