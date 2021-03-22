import "./BooksSidebarFormats.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';

class BooksSidebarFormats extends Component {
//   constructor(props) {
//     super(props)
//   }


render() {
  return (
    this.props.formatsList.map(x => {
    return (
       <Link to={`/books/${x.format}`} exact className="books-sidebar-list-item-link" key={x.format}><li className="books-sidebar-list-item">{x.format.toUpperCase()}</li></Link>
       )
    })
      )}
    }

export default BooksSidebarFormats;