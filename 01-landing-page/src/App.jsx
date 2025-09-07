import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Trial from "./components/Trial";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompanyLogos/>
      <About/>
      <Services/>
      <Testimonials/>
      <Pricing/>
      <Faq/>
      <Trial/>
    </>
  );
}

export default App;
