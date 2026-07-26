import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Services from "./components/Services";
import About from "./components/About";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Blogs from "./components/Blogs";

export default function Home() {
  return (
    <main className="relative min-h-screen">

      <Hero />
      <Services />
      <Skills />
      <About />
      <Projects />
      <Blogs />
    </main>
  );
}
