import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Identity from "@/components/home/Identity";
import Ecosystem from "@/components/home/Ecosystem";
import Roadmap from "@/components/home/Roadmap";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--dcv-black)] text-[var(--dcv-white)]">
      <Navbar />

      <Hero />
      <Identity />
      <Ecosystem />
      <Roadmap />
      <CTA />

      <Footer />
    </main>
  );
}