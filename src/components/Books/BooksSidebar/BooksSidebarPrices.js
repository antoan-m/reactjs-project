import "./BooksSidebarPrices.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksSidebarPrices extends Component {
  constructor(props) {
    super(props)
  }


render() {
  return (
<>
        <Link to={`/books/price/below/10`} className="books-sidebar-list-item-link" key="below10"><article className="books-sidebar-list-item">Below $10</article></Link>
        <Link to={`/books/price/10/20`} className="books-sidebar-list-item-link" key="10-19.99"><article className="books-sidebar-list-item">$10 - $19.99</article></Link>
        <Link to={`/books/price/over/20`} className="books-sidebar-list-item-link" key="over20"><article className="books-sidebar-list-item">Over $20</article></Link>
        {this.props.pricesList.map(x => {
    return (
       <Link to={`/books/price/${x.price}`} className="books-sidebar-list-item-link" key={x.price}><article className="books-sidebar-list-item">{x.price.toString().toUpperCase()}</article></Link>
       )
    })}
 </>       
         )
      }
    }

export default BooksSidebarPrices;