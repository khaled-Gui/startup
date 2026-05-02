"use client";

import Blog from "@/components/blog";
import CarouselDemo from "@/components/carousel";
import Courses from "@/components/courses";
import CTABanner from "@/components/cta-banner";
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero2";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import { useEffect } from "react";

 

export default function Home() {





  return (
    <> 
   
    
    
    
    <Navbar /> 
      <main className="pt-16 xs:pt-20 sm:pt-24 ">
         <div className="w-full lg:my-44 my-14  mx-auto">
     
     <Hero />
        </div>
        
        <div className="w-full bg-gray-100/50  dark:bg-gray-900/50  mx-auto">

        <Courses />
        </div>
        <Blog />
        <div className="w-full bg-gray-100/50  dark:bg-gray-900/50  mx-auto">

        <CarouselDemo />
        </div>
       {/* <Testimonials />*/}
        <CTABanner />
        <Footer />
      </main>
    
    </>
  );
}