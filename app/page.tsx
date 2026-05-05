"use client";

import Blog from "@/components/blog";
import CarouselDemo from "@/components/carousel";
import Courses from "@/components/courses";
import CTABanner from "@/components/cta-banner";

import Footer from "@/components/footer";
import Hero from "@/components/hero2";
import { Navbar } from "@/components/navbar";


 

export default function Home() {





  return (
    <> 
   
    
    
    
    <Navbar /> 
      <main className="pt-16 xs:pt-20 sm:pt-24 ">
        {/*  <div className="w-full lg:my-44 my-14  mx-auto">
      </div>*/}
     <Hero />
       
        
       {/* <div className="w-full bg-gray-100/50  dark:bg-gray-900/50  mx-auto">
 </div>*/}
        <Courses />
       
        <Blog />
       {/* <div className="w-full bg-gray-100/50  dark:bg-gray-900/50  mx-auto">
 </div> */}
        <CarouselDemo />
       
       {/* <Testimonials />*/}
        <CTABanner />
        <Footer />
      </main>
    
    </>
  );
}
