import Clients from "./components/clients";
import Projects from "./components/projects"
import Intro from "../components/intro";


function Projectpage() {
  return (
    <header className="grid grid-cols-12">
      {/* Left Sticky Section (Intro) */}
      <div className="col-span-3 h-screen sticky top-0 hidden md:block">
        <Intro />
      </div>

      {/* Right Section ( About) */}
      <div className="col-span-12 md:col-span-9 ">
      
        <Projects/>
        <Clients deviceType="desktop" />
       
      </div>
    </header>
  );
}

export default Projectpage;
