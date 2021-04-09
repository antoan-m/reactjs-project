import "./Slider.css";
import 'react-slideshow-image/dist/styles.css';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import slidesService from '../../../services/slidesService';
import { Slide } from 'react-slideshow-image';

function Slider() {

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    
    slidesService.getAllSlides()
    .then(slidesList => setSlides(slidesList));
    
  }, []);

  const sliderProperties = {
    duration: 5000,
    transitionDuration: 1000,
    pauseOnHover: true,
    easing: 'ease',
    infinite: true,
    indicators: true,
    prevArrow: <i className="material-icons slide-prev">play_circle_filled</i>,
    nextArrow: <i className="material-icons slide-next">play_circle_filled</i>
  };


  return (

    <article className="home-main-sliders">
       <section className="home-main-sliders-left">
         <article className="home-main-sliders-big">
           <div className="slideshow-container">
             <Slide {...sliderProperties}>
             {slides.map(x => {
      return (
          <div className="each-slide each-slide-background" style={{backgroundImage: `url(${x.background})`}} key={x.objectId}>
              <Link to={x.url}><h2 className="each-slide-title">{x.title}</h2></Link>
              <div className="each-slide-cover">
              <Link to={x.url}><img className="each-slide-cover-img" src={x.cover} alt={x.title} /></Link>
                </div>
              <p className="each-slide-description">{x.description}</p>
              <Link to={x.url}><p className="each-slide-readmore">READ MORE</p></Link>
          </div>
            )})}
            </Slide>
           </div>
         </article>
       </section>
       <section className="home-main-sliders-right">
         <article className="home-main-sliders-small">
         <NavLink to="/news/details/81DB6189-F694-4382-893E-8D94E309B0E8">
             <img src="slide-small-1.jpg" className="carousel-image" alt="" />
        </NavLink>
         </article>
         <article className="home-main-sliders-small">
         <NavLink to="/books/newest">
             <img src="slide-small-2.jpg" className="carousel-image" alt="" />
             </NavLink>
         </article>
       </section>
     </article>

  );
}

export default Slider;