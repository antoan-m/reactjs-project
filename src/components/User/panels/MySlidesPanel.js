import "./MySlidesPanel.css";
import { Link } from 'react-router-dom';
import slidesService from "../../../services/slidesService";

function MySlidesPanel(props) {

    function deleteSlideHandler(e, slide_id) {
        e.target.parentNode.parentNode.remove();
        slidesService.deleteSlide(slide_id);
      }
     

  return (
<section className="profile-main-my-slides">
          <h2 className="profile-main-header">My Slides</h2>
                <ul className="profile-main-my-slides-list">
                {props.mySlides.map(x => {
                return (
                    <li className="profile-main-my-slides-list-item-main" key={x.objectId}>
                     <article className="profile-main-my-slides-list-item" style={{backgroundImage: `url(${x.background})`}}>   
                     <article className="profile-main-my-slides-list-item-image">
                         <img src={x.cover} alt={x.title} />
                     </article>
                     <article className="profile-main-my-slides-list-item-details">
                       
                       {x.published ?
                       <article className="profile-main-my-slides-list-item-published"><span className="new badge green" data-badge-caption="">On</span></article>
                      :
                        <article className="profile-main-my-slides-list-item-published"><span className="new badge red" data-badge-caption="">Off</span></article>
                      }
                       <article className="profile-main-my-slides-list-item-priority badge">{x.priority}</article>
                       <article className="profile-main-my-slides-list-item-created badge">{new Date(x.created).toLocaleDateString('en', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</article>
                         <h5 className="profile-main-my-slides-list-item-title">{x.title}</h5>
                         <p className="profile-main-my-slides-list-item-description">{x.description}</p>
                     </article>
                     </article>
                     <article className="profile-main-my-slides-list-item-book-buttons">
                     <Link to={`/slides/details/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">View<i className="material-icons right">zoom_in</i></button></Link>
                     <Link to={`/user/profile/editslide/${x.objectId}`}><button className="btn waves-effect waves-light btn-small edit-book-btn">Edit<i className="material-icons right">create</i></button></Link>
                     <button onClick={(e) => {deleteSlideHandler(e, x.objectId)}} type="button" className="btn waves-effect waves-light btn-small delete-book-btn">Delete<i className="material-icons right">delete</i></button>
                     </article>
                    </li>
                  )})}
                </ul>
</section>
  )
}

export default MySlidesPanel;