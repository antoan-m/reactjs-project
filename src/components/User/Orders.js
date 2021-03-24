import "./Orders.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Orders: [],
      current_category: this.props.match.params.category
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

}


  render() {
  return (
<div className="Orders">

    <section className="Orders-main">
        <section className="Orders-main-left">
         
          <section className="Orders-main-left-last-tasks">
          <h2 className="Orders-main-header">User Panel</h2>
          <ul className="Orders-main-left-last-tasks-list">
                 <Link to="/user/Orders/details/ID"><button className="btn waves-effect waves-light Orders-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Orders/Orderss"><button className="btn waves-effect waves-light Orders-list-item-btn-user">Orderss<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Orders/wishlist"><button className="btn waves-effect waves-light Orders-list-item-btn-user">Wishlist<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Orders/reviews"><button className="btn waves-effect waves-light Orders-list-item-btn-user">My Reviews<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/Orders/user-newsletter"><button className="btn waves-effect waves-light Orders-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
          </section>
          <section className="Orders-main-left-last-Orderss">
          <h2 className="Orders-main-header">Last Orders</h2>
                <ul className="Orders-main-left-last-Orderss-list">
                  <li>
                    <article className="Orders-main-left-last-Orderss-list-item"><article className="Orders-main-left-last-Orderss-list-item-image"><img src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/50-300x444.jpg" alt="###" /></article><article><h3 className="Orders-main-left-last-Orderss-list-item-title">The book</h3><p className="Orders-main-left-last-Orderss-list-item-price">$20.34</p></article><article className="Orders-main-left-last-Orderss-list-item-buttons">
                      <Link to="#"><button className="btn waves-effect waves-light Orders-list-item-btn">View Details<i className="material-icons right">import_contacts</i></button></Link>
                      </article>
                      </article>
                  </li>
                </ul>
          </section>
          
        </section>
     <section className="Orders-main-right">
       <h2 className="Orders-main-header">Admin Panel</h2>
                <ul className="Orders-main-left-last-admin-list">
                  <li><Link to="/user/Orders/addbook"><button className="btn waves-effect waves-light Orders-list-item-btn-admin">Add Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/Orders/editbook/###"><button className="btn waves-effect waves-light Orders-list-item-btn-admin">Edit Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/Orders/mybooks"><button className="btn waves-effect waves-light Orders-list-item-btn-admin">All Books<i className="material-icons right">import_contacts</i></button></Link></li>
                </ul>
        </section>

</section>
   </div>
  );
}
}

export default Orders;
