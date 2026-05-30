import About from "../components/About";
import Contact from "../components/Contact";
import Herosection from "../components/Herosection";
import Project from "../components/Project";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <Skills />
      <Project />
      <Contact />
      
    </>
  );
}
