import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-h-[calc(100vh-6rem)] flex flex-col items-center p-2    max-w-screen-xl mx-auto ">
    <div className="flex max-h-[600px] items-center justify-center    lg:px-16 ">
      <div className="max-h-[600px] mx-auto  grid w-full max-w-(--breakpoint-xl)    gap-12 lg:px-6    lg:grid-cols-2 ">
        <div>
          <Badge
            className="rounded-full border-border py-1"
            variant="secondary"
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] font-satoshi font-semibold text-6xl leading-[1.2]! tracking-tight md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
           منصة لدعم رواد الأعمال وتطوير المشاريع في الجزائر
          </h1>
          <p className="mt-6 max-w-[60ch] text-foreground/80 sm:text-lg">
                      تعلم، انطلق، وحقق مشروعك

          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button className="rounded-full text-base" size="lg">
                 إستكشف الآن  <ArrowUpRight className="h-5! w-5!" />
            </Button>
        { /*   <Button
              className="rounded-full text-base shadow-none"
              size="lg"
              variant="outline"
            >
              <CirclePlay className="h-5! w-5!" /> Watch Demo
            </Button>*/}
          </div>
        </div>
        <div className="hidden lg:block  w-full rounded-xl " >
          <Image
            src="/hero.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

      </div>
    </div>
    </div>            
  );
}
