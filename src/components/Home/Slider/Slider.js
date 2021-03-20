import "./Slider.css";

import { NavLink } from 'react-router-dom';

function Slider() {
  return (

    <showcase className="home-main-sliders">
       <section className="home-main-sliders-left">
         <article className="home-main-sliders-big">
           <div className="main-carousel">
             <img src="slide1.jpg" className="carousel-image" style={{height: "530px"}} alt="" />
           </div>
         </article>
       </section>
       <section className="home-main-sliders-right">
         <article className="home-main-sliders-small">
         <NavLink to="/news/12esdif2ifsdfsdf23r">
             <img src="slide-small-1.jpg" className="carousel-image" alt="" />
        </NavLink>
         </article>
         <article className="home-main-sliders-small">
         <NavLink to="/news/sds43589s9dfhniwudhf">
             <img src="slide-small-2.jpg" className="carousel-image" alt="" />
             </NavLink>
         </article>
       </section>
     </showcase>

  );
}

export default Slider;