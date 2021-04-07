import "./AdminDashboardPanel.css";
import cartService from "../../../services/cartService";
import React, { useState, useEffect } from 'react';
import Backendless from 'backendless';
import newsletterService from "../../../services/newsletterService";
import MyOrdersPanel from "../../User/panels/MyOrdersPanel"
import { UserContext } from "../../../context/UserContext";
import { useContext } from 'react';

function AdminDashboardPanel(props) {

    const [user, setUser, admin, setAdmin] = useContext(UserContext);
  
    // const [user, setUser] = useState(null);
    const [total_orders, setTotalOrders] = useState();
    const [total_sales, setTotalSales] = useState();
    const [users_ordered, setUsersOrdered] = useState();
    const [users_subscribed, setUsersSubscribed] = useState();


    useEffect(() => {
            var dataQueryBuilder = Backendless.DataQueryBuilder.create();
            dataQueryBuilder.setProperties("Count(objectId) as orders");
            Backendless.Data.of("orders").find(dataQueryBuilder)
            .then(result => setTotalOrders(result[0].orders));

        cartService.getTotalSales()
        .then(result => { setTotalSales(result[0].total_sales.toFixed(2)) });

        var dataQueryBuilder = Backendless.DataQueryBuilder.create();
            dataQueryBuilder.setProperties("Count(ownerId) as users");
            dataQueryBuilder.setGroupBy("ownerId");
            Backendless.Data.of("orders").find(dataQueryBuilder)
            .then(result => setUsersOrdered(result.length));

           newsletterService.countSubscribers()
           .then(result => setUsersSubscribed(result.subscribers.split(',').length));
    }, [])

    useEffect(() => {
        if (total_orders === '') {
            var dataQueryBuilder = Backendless.DataQueryBuilder.create();
            dataQueryBuilder.setProperties("Count(objectId) as orders");
            Backendless.Data.of("orders").find(dataQueryBuilder)
            .then(result => setTotalOrders(result[0].orders));
        }
        if (total_sales === '') {
            cartService.getTotalSales()
            .then(result => { setTotalSales(result[0].total_sales.toFixed(2)) });
        }
        if (users_ordered === '') {
            var dataQueryBuilder = Backendless.DataQueryBuilder.create();
            dataQueryBuilder.setProperties("Count(ownerId) as users");
            dataQueryBuilder.setGroupBy("ownerId");
            Backendless.Data.of("orders").find(dataQueryBuilder)
            .then(result => setUsersOrdered(result.length));
        }
        if (users_subscribed === '') {
            newsletterService.countSubscribers()
           .then(result => setUsersSubscribed(result.subscribers.split(',').length));
        }
    })
// console.log(user.user_type)
return (
    <>
    {user.user_type == 'admin' ?
<section className="profile-main-admin-dashboard">
        <article className="profile-main-admin-dashboard-row">
            <article className="admin-dashboard-sales admin-panel">
                <h2>Total Orders</h2>
                <p>{total_orders}</p>
            </article>
            <article className="admin-dashboard-total admin-panel">
                <h2>Total Sales</h2>
                <p>${total_sales}</p>
            </article>
        </article>
        <article className="profile-main-admin-dashboard-row">
            <article className="admin-dashboard-users-ordered admin-panel">
                <h2>Users Ordered</h2>
                <p>{users_ordered}</p>
            </article>
            <article className="admin-dashboard-users-subscribed admin-panel">
                <h2>Subscribed Users</h2>
                <p>{users_subscribed}</p>
            </article>
        </article>   
</section> : 
    <section className="user-profile-logo">
        <img src={process.env.PUBLIC_URL + '/user-profile-logo.jpg'} alt="Book Store" />
    </section> 
    }
</>
)
}

export default AdminDashboardPanel;