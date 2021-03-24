import "./Cart.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cart: [],
      current_category: this.props.match.params.category
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

}


  render() {
  return (
<div className="Cart">

    <section className="Cart-main">
        <section className="Cart-main-left">
         
          <section className="Cart-main-left-last-tasks">
          <h2 className="Cart-main-header">User Panel</h2>
          <ul className="Cart-main-left-last-tasks-list">
                 <Link to="/user/Cart/details/ID"><button className="btn waves-effect waves-light Cart-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Cart/orders"><button className="btn waves-effect waves-light Cart-list-item-btn-user">Orders<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Cart/Cart"><button className="btn waves-effect waves-light Cart-list-item-btn-user">Cart<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Cart/reviews"><button className="btn waves-effect waves-light Cart-list-item-btn-user">My Reviews<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Cart/user-newsletter"><button className="btn waves-effect waves-light Cart-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
          </section>
          <section className="Cart-main-left-last-orders">
          <h2 className="Cart-main-header">Last Order</h2>
                <ul className="Cart-main-left-last-orders-list">
                  <li>
                    <article className="Cart-main-left-last-orders-list-item"><article className="Cart-main-left-last-orders-list-item-image"><img src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/50-300x444.jpg" alt="###" /></article><article><h3 className="Cart-main-left-last-orders-list-item-title">The book</h3><p className="Cart-main-left-last-orders-list-item-price">$20.34</p></article><article className="Cart-main-left-last-orders-list-item-buttons">
                      <Link to="#"><button className="btn waves-effect waves-light Cart-list-item-btn">View Details<i className="material-icons right">import_contacts</i></button></Link>
                      </article>
                      </article>
                  </li>
                </ul>
          </section>
          
        </section>
     <section className="Cart-main-right">
       <h2 className="Cart-main-header">Admin Panel</h2>
                <ul className="Cart-main-left-last-admin-list">
                  <li><Link to="/user/Cart/addbook"><button className="btn waves-effect waves-light Cart-list-item-btn-admin">Add Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/Cart/editbook/###"><button className="btn waves-effect waves-light Cart-list-item-btn-admin">Edit Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/Cart/mybooks"><button className="btn waves-effect waves-light Cart-list-item-btn-admin">All Books<i className="material-icons right">import_contacts</i></button></Link></li>
                </ul>
        </section>

</section>
   </div>
  );
}
}

export default Cart;
