import About from "./components/about";
import Skill from "./components/skills";
import Intro from "../components/intro";


function Aboutpage() {
  return (
    <header className="grid grid-cols-12">
      {/* Left Sticky Section (Intro) */}
      <div className="col-span-3 h-screen sticky top-0 hidden md:block">
        <Intro />
      </div>

      {/* Right Section ( About) */}
      <div className="col-span-12 md:col-span-9 ">
        <About />
        <Skill />
        
      </div>
    </header>
  );
}

export default Aboutpage;
