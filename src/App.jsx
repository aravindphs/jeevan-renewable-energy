import About from "./Components/About/About";
import Achievement from "./Components/Achievement/Achievement";
import Contact from "./Components/Contact/Contact";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Teams from "./Components/Teams/Teams";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Achievement />
      <About />
      <Services />
      <Teams />
      <Projects />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
