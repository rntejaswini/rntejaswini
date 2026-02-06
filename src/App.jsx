import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements"; // Correct import
import Certificates from "./components/Certificates";
import Research from "./components/Research";
import SocialImpact from "./components/SocialImpact";
import BookJourney from "./components/BookJourney";
import Consistency from "./components/Consistency";



import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="overflow-x-hidden bg-black">
      <Navbar />

      <main>
      
        <About />
         <Education/>
        
        <Skills />
        <Projects />
        <Achievements /> {/* Add achievements section */}
        <Certificates />
        <SocialImpact/>
        <Research />
        <BookJourney />
<Consistency />

       
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
