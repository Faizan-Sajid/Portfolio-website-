import Contact from "./components/contact";
import Intro from "../components/intro";





function Contactus() {
    return (
      <header className="grid grid-cols-12">
        {/* Left Sticky Section (Intro) */}
        <div className="col-span-3 h-screen sticky top-0 hidden md:block">
          <Intro />
        </div>
  
        {/* Right Section (Hero & About) */}
        <div className="col-span-12 md:col-span-9 ">
          <Contact/>
          
         
          
        </div>
      </header>
    );
  }
  
  export default Contactus;
  