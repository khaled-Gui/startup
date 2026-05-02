import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";


const Hero = () => {
  return (
    
      <div className="md:mt-6 flex items-center justify-center  p-6">
        <div className="text-center max-w-3xl">
          <Badge className="bg-primary rounded-full py-1 border-none">
            v1.0.0 is available now! 🚀
          </Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
           منصة لدعم رواد الأعمال وتطوير المشاريع في الجزائر
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            تعلم، انطلق، وحقق مشروعك
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-base"
            >
              إستكشف الآن <ArrowUpRight className="!h-5 !w-5" />
            </Button>
       {     /*<Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-none"
            >
              <CirclePlay className="!h-5 !w-5" /> Watch Demo
            </Button>*/}
          </div>
        </div>
      </div>
        
   
  );
};

export default Hero;
