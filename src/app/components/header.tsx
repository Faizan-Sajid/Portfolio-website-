


import About from "./about";
import Clients from "./clients";
import Contact from "./contact";
import Countup from "./countup";
import Intro from "./intro";
import Projects from "./projects";
import Hero from "./rightside";
import Services from "./services";
import Skill from "./skills";

function Header() {
  return (
    <header className="grid grid-cols-12">
      {/* Left Sticky Section (Intro) */}
      <div className="col-span-3 h-screen sticky top-0 hidden md:block">
        <Intro />
      </div>

      {/* Right Section (Hero & About) */}
      <div className="col-span-12 md:col-span-9 ">
        <Hero />
        <About />
        <Services />
        <Countup/>
        <Skill />
        <Projects />
        <Clients deviceType="desktop" />
        <Contact/>
        
      </div>
    </header>
  );
}

export default Header;
