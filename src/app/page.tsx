"use client"

import Contact from "@/components/landing/Contact";
import Courses from "@/components/landing/Courses";
import Hero from "@/components/landing/Hero";
import Poster from "@/components/landing/Poster";

export default function Home() {
  return (
    <main className="w-screen h-full">
      <section id="hero-section">
        <Hero />
      </section>
      <section id="links">
        <Poster />
      </section>
      <section id="trending">
        <Courses />
      </section>
      <section id="get-in-touch">
        <Contact />
      </section>
    </main>
  );
}
