import "./Wishlist.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Wishlist: [],
      current_category: this.props.match.params.category
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

}


  render() {
  return (
<div className="Wishlist">

    <section className="Wishlist-main">
        <section className="Wishlist-main-left">
         
          <section className="Wishlist-main-left-last-tasks">
          <h2 className="Wishlist-main-header">User Panel</h2>
          <ul className="Wishlist-main-left-last-tasks-list">
                 <Link to="/user/Wishlist/details/ID"><button className="btn waves-effect waves-light Wishlist-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Wishlist/orders"><button className="btn waves-effect waves-light Wishlist-list-item-btn-user">Orders<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Wishlist/wishlist"><button className="btn waves-effect waves-light Wishlist-list-item-btn-user">Wishlist<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Wishlist/reviews"><button className="btn waves-effect waves-light Wishlist-list-item-btn-user">My Reviews<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Wishlist/user-newsletter"><button className="btn waves-effect waves-light Wishlist-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
          </section>
          <section className="Wishlist-main-left-last-orders">
          <h2 className="Wishlist-main-header">Last Order</h2>
                <ul className="Wishlist-main-left-last-orders-list">
                  <li>
                    <article className="Wishlist-main-left-last-orders-list-item"><article className="Wishlist-main-left-last-orders-list-item-image"><img src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/50-300x444.jpg" alt="###" /></article><article><h3 className="Wishlist-main-left-last-orders-list-item-title">The book</h3><p className="Wishlist-main-left-last-orders-list-item-price">$20.34</p></article><article className="Wishlist-main-left-last-orders-list-item-buttons">
                      <Link to="#"><button className="btn waves-effect waves-light Wishlist-list-item-btn">View Details<i className="material-icons right">import_contacts</i></button></Link>
                      </article>
                      </article>
                  </li>
                </ul>
          </section>
          
        </section>
     <section className="Wishlist-main-right">
       <h2 className="Wishlist-main-header">Admin Panel</h2>
                <ul className="Wishlist-main-left-last-admin-list">
                  <li><Link to="/user/Wishlist/addbook"><button className="btn waves-effect waves-light Wishlist-list-item-btn-admin">Add Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/Wishlist/editbook/###"><button className="btn waves-effect waves-light Wishlist-list-item-btn-admin">Edit Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/Wishlist/mybooks"><button className="btn waves-effect waves-light Wishlist-list-item-btn-admin">All Books<i className="material-icons right">import_contacts</i></button></Link></li>
                </ul>
        </section>

</section>
   </div>
  );
}
}

export default Wishlist;
