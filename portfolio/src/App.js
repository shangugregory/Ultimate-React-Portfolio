import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/Home/Home";
import AppNav from "./PortfolioContainer/Navigation/AppNav";
import Navigation from "./PortfolioContainer/Navigation/Navigation";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonial from "./PortfolioContainer/Testmonial/Testimonial";

function App() {
  return (
    <>
    <AppNav/>
     <Home/>
     <AboutMe/>
     <Resume/>
     <Testimonial/>
    </>
  );
}

export default App;
