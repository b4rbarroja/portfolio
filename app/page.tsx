import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-[#020617] via-[#0B1120] to-[#020617] text-white min-h-screen">
      {/* 🔵 Global Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[100px] rounded-full bottom-[-100px] left-[-100px]" />

      {/* Navbar */}
      <Container>
        <Navbar />
      </Container>

      {/* Hero */}
      <Container>
        <Hero />
      </Container>

      {/* Skills */}
      <Container>
        <Skills />
      </Container>
    </main>
  );
}
