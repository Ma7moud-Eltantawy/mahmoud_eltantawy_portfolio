import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Credentials from "./components/Credentials.jsx";
import { Contact, Footer } from "./components/Contact.jsx";
import Assistant from "./assistant/Assistant.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <Assistant />
    </>
  );
}
