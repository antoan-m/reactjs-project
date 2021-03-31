import "./LatestOrderPanel.css";
import { Link } from 'react-router-dom';


function LatestOrderPanel(props) {

  function myOrders(user_id, limit) {
    
    // booksService.getMyOrders(user_id, limit);
  }

  return (

<section className="profile-main-left-last-orders">
    <h2 className="profile-main-header">Last Order</h2>
          <ul className="profile-main-left-last-orders-list">
            <li>
              <article className="profile-main-left-last-orders-list-item"><article className="profile-main-left-last-orders-list-item-image"><img src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/50-300x444.jpg" alt="###" /></article><article><h3 className="profile-main-left-last-orders-list-item-title">The book</h3><p className="profile-main-left-last-orders-list-item-price">$20.34</p></article><article className="profile-main-left-last-orders-list-item-buttons">
                <Link to="#"><button className="btn waves-effect waves-light profile-list-item-btn">View Details<i className="material-icons right">import_contacts</i></button></Link>
                </article>
                </article>
            </li>
          </ul>
</section>
);
}

export default LatestOrderPanel;
