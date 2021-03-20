import "./Home.css";

import InfoBoxes from './InfoBoxes/InfoBoxes';
import Slider from './Slider/Slider';
import WeeklyDeals from './WeeklyDeals/WeeklyDeals';
import FeaturedCategory from './FeaturedCategory/FeaturedCategory';
import BestSellers from './BestSellers/BestSellers';

function Home() {
  return (
    
   <div className="App">
     
     <Slider />

     <InfoBoxes />

     <WeeklyDeals />

     <FeaturedCategory />

     <BestSellers />

   </div>
  );
}

export default Home;
