import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CompanyLogos from "./components/CompanyLogos";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CompanyLogos/>
      <About/>
      <Services/>
    </>
  );
}

export default App;
