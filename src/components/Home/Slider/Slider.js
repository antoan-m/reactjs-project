import "./Slider.css";

import { NavLink } from 'react-router-dom';

function Slider() {
  return (

    <article className="home-main-sliders">
       <section className="home-main-sliders-left">
         <article className="home-main-sliders-big">
           <div className="main-carousel">
             <img src="slide1.jpg" className="carousel-image" style={{height: "530px"}} alt="" />
           </div>
         </article>
       </section>
       <section className="home-main-sliders-right">
         <article className="home-main-sliders-small">
         <NavLink to="/news/F2EEF62C-8FE1-4881-839B-BEF4F08B625E">
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