import "./HomePage.css";
import Slider from "../../components/Slider/Slider.jsx";
import {Notice} from "../../components/Notice/Notice.jsx";

export const HomePage = () => {
  return (
	  <div>
		  <Slider />
		  <Notice />
	  </div>
  )
}
