import "./MyNewslettersPanel.css";
import newsletterService from "../../../services/newsletterService";
import { useState, useEffect } from 'react';
import M from 'materialize-css';


function MyNewslettersPanel(props) {

  const [email, setEmail] = useState('');
  const [subscribers, setSubscribers] = useState('');
  const [subscribed, setSubscribed] = useState('');

  useEffect(() => {
    setEmail(props.userData.email);
    setSubscribers(props.myNewsletters);
  });


  function newsletterUnsubscribeHandler(e, newsletter_id) {
      newsletterService.updateNewsletter(email, subscribers)
      .then(result => {
        M.toast({html: 'You have successfully unsubscribed!'});
        
        let userId = localStorage.getItem('id');
          if(userId) {
        newsletterService.updateUserNewsletterStatus(userId, false);
    }
    setSubscribed(false);
      })
  }
     
      
  return (
<section className="profile-main-my-newsletter">
          <h2 className="profile-main-header">Newsletters</h2>
                <ul className="profile-main-my-books-list">
                     <li className="profile-main-my-books-list-item-main" key='{x.objectId}'>
                     <article className="profile-main-my-books-list-item">   
                     <article className="profile-main-my-books-list-item-details">
                         <h5 className="profile-main-my-books-list-item-title">Newsletter</h5>
                     </article>
                     </article>
                     <article className="profile-main-my-books-list-item-book-buttons">
                       {props.userData.newsletter ?
                     <button onClick={(e) => {newsletterUnsubscribeHandler(e, "x.objectId")}} type="button" className="btn waves-effect waves-light btn-small unsubscribe-btn">Unsubscribe<i className="material-icons right">delete</i></button>
                     : <span>You are not subscribed.</span>}
                     </article>
                    </li>
                </ul>
</section>
  )
}

export default MyNewslettersPanel;