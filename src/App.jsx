import './App.css'
import {Navbar} from "./components/Navbar";
import {Hero} from "./components/Hero";
import {Highlights} from "./components/Highlights";
import {Model} from "./components/Model.jsx";
import {Features} from "./components/Features.jsx";
import {HowItWorks} from "./components/HowItWorks.jsx";
import {Footer} from "./components/Footer";

function App() {

  return (
     <main id="root" className="bg-black">
         <Navbar />
         <Hero />
         <Highlights />
         <Model />
         <Features />
         <HowItWorks />
         <Footer />
     </main>
  )
}

export default App
