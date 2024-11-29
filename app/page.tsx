"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import { ThreeDCardDemo } from "@/components/Cards";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/Skills";
import NeonCursor from "@/components/ui/useCanvasCursor";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NeonCursor />
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <ThreeDCardDemo />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
