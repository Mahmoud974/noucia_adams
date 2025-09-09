import About from "@/components/About";
import BuyBook from "@/components/BuyBook";
import { Comments } from "@/components/Comments";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import VideoBook from "@/components/VideoBook";
import Image from "next/image";
import React from "react";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Velocity Scroll"
      default_velocity={5}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <VideoBook />
      {/* <Citation /> */}
      <section className="text-center ">
        <Comments />

        <BuyBook />

        <Newsletter />
        <Contact />
        <Footer />
      </section>
    </>
  );
}
