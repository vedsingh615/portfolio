import About from "./about/page";
import Hero from "./Hero";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import './globals.css'; // Ensure you have a global CSS file for styles

export const metadata = {
  title: "Ved Singh | Portfolio", 
};

export default function Home() {
  return (
    <>
   <Hero/>
   <About/>
   <Projects/>
   <Skills/>
    <Contact/>

    </>
  );
}
