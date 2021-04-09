import "./Home.css";

import InfoBoxes from './InfoBoxes/InfoBoxes';
import Slider from './Slider/Slider';
import WeeklyDeals from './WeeklyDeals/WeeklyDeals';
import FeaturedCategory from './FeaturedCategory/FeaturedCategory';
import MostWanted from './MostWanted/MostWanted';


function Home() {
  return (
    
   <div className="App">
    
     <Slider />

     <InfoBoxes />

     <WeeklyDeals />

     <FeaturedCategory />

     <MostWanted />

   </div>
  );
}

export default Home;
