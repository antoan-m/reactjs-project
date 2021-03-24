import "./Order.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Order: [],
      current_category: this.props.match.params.category
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

}


  render() {
  return (
<div className="Order">

    <section className="Order-main">
        <section className="Order-main-left">
         
          <section className="Order-main-left-last-tasks">
          <h2 className="Order-main-header">User Panel</h2>
          <ul className="Order-main-left-last-tasks-list">
                 <Link to="/user/Order/details/ID"><button className="btn waves-effect waves-light Order-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Order/orders"><button className="btn waves-effect waves-light Order-list-item-btn-user">Orders<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Order/wishlist"><button className="btn waves-effect waves-light Order-list-item-btn-user">Wishlist<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Order/reviews"><button className="btn waves-effect waves-light Order-list-item-btn-user">My Reviews<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Order/user-newsletter"><button className="btn waves-effect waves-light Order-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
          </section>
          <section className="Order-main-left-last-orders">
          <h2 className="Order-main-header">Last Order</h2>
                <ul className="Order-main-left-last-orders-list">
                  <li>
                    <article className="Order-main-left-last-orders-list-item"><article className="Order-main-left-last-orders-list-item-image"><img src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/50-300x444.jpg" alt="###" /></article><article><h3 className="Order-main-left-last-orders-list-item-title">The book</h3><p className="Order-main-left-last-orders-list-item-price">$20.34</p></article><article className="Order-main-left-last-orders-list-item-buttons">
                      <Link to="#"><button className="btn waves-effect waves-light Order-list-item-btn">View Details<i className="material-icons right">import_contacts</i></button></Link>
                      </article>
                      </article>
                  </li>
                </ul>
          </section>
          
        </section>
     <section className="Order-main-right">
       <h2 className="Order-main-header">Admin Panel</h2>
                <ul className="Order-main-left-last-admin-list">
                  <li><Link to="/user/Order/addbook"><button className="btn waves-effect waves-light Order-list-item-btn-admin">Add Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/Order/editbook/###"><button className="btn waves-effect waves-light Order-list-item-btn-admin">Edit Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/Order/mybooks"><button className="btn waves-effect waves-light Order-list-item-btn-admin">All Books<i className="material-icons right">import_contacts</i></button></Link></li>
                </ul>
        </section>

</section>
   </div>
  );
}
}

export default Order;
