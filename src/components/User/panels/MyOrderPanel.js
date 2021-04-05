import "./MyOrdersPanel.css";
import {  useState, useEffect } from 'react';

function MyOrdersPanel(props) {

    const [my_order_ids, setMyOrderIds] = useState();
    const [my_order, setMyOrder] = useState([]);
    const [my_order_data, setMyOrderData] = useState({});

    useEffect(() => {
        
        setMyOrderIds(props.orderIds);
        setMyOrder(props.myOrder);
        setMyOrderData(props.myOrderData);
    
    }, [] )

    useEffect(() => {
        if(my_order.length === 0) {
            setMyOrder(props.myOrder);
            setMyOrderData(props.myOrderData);
    }
    console.log(my_order_data.order_total)
    console.log(my_order_data.created);
    console.log(my_order)
    console.log(my_order_data)
    })
    
return (
    <section className="order-main-left">
          <section className="order-main-left-list">
          <h2 className="profile-main-header">Order Details</h2>
          <ul className="profile-main-my-books-list">
            {my_order && my_order.length > 0 ? my_order.map(x => {
                return (
                    <li className="profile-main-my-books-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-image">
                         <img src={x.image} alt={x.title} />
                     </article>
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-books-list-item-author">{x.author}</p>
                         <p className="profile-main-my-books-list-item-category">{x.category}</p>
                         <p className="profile-main-my-books-list-item-price">${x.price}</p>
                         
                     </article>
                     </article>
                    </li>
                  )}) : null }
            </ul>
            <article className="order-bottom-summary">
                    <span className="profile-main-my-books-list-item-order-id">ID: <span className="profile-main-my-books-list-item-order-id-value">{my_order_data.objectId}</span></span>
                    <span className="profile-main-my-books-list-item-order-total">Total: <span className="profile-main-my-books-list-item-order-total-value">${my_order_data.order_total}</span></span>
                    <span className="profile-main-my-books-list-item-order-date">Date: <span className="profile-main-my-books-list-item-order-date-value">{new Date(my_order_data.created).toLocaleDateString('en', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</span></span>                    
            </article>
        </section>
    </section>
)
}

export default MyOrdersPanel;