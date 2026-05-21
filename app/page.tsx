import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

import Image from "next/image";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* Tech Stack */}
      <TechStack />

      {/* Projects */}
      <Projects />

      {/* About */}
      <About />
      {/* Engineering Approach */}
      <Approach />
      {/* Contact / Footer */}
      <Contact />
    </main>
  );
}
