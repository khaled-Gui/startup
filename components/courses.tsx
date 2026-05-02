import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    category: "Marketing and Sales",
    title: "Collect and Enrich Leads Your Way",
    details:
      "Take control over how and when to follow up with your leads. Store and reference leads in multiple tables and automatically send them personalized emails.",
    tutorialLink: "https://pixabay.com/images/download/pix1861-chart-1905225_1920.jpg",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/18/54/technology-1283624_1280.jpg",
  },
  {
    category: "Project Management",
    title: "Streamline Your Workflows Easily",
    details:
      "Organize tasks, deadlines, and team collaboration in one place. Use customizable boards to manage projects efficiently and automate routine updates.",
    tutorialLink: "#",
    image:
      "https://cdn.pixabay.com/photo/2021/08/12/10/38/mountains-6540497_1280.jpg",
  },
  {
    category: "Customer Support",
    title: "Deliver Seamless Customer Experiences",
    details:
      "Track customer queries faster with an integrated ticketing system. Set priorities, automate follow-ups, and enhance satisfaction with personalized responses.",
    tutorialLink: "https://pixabay.com/photos/stock-chart-apple-bitcoin-6596910/",
    image:
      "https://cdn.pixabay.com/photo/2017/08/30/12/45/water-6579313_640.jpg",
  },
  
];

const Courses = () => {
  return (
    <div className="flex min-h-screen items-center justify-center max-w-5xl mx-auto ">
      <div className="w-full max-w-(--breakpoint-lg) px-6 py-10">
<h2 className="text-pretty text-center max-w-md mx-auto font-satoshi font-semibold text-4xl tracking-tight md:text-5xl/[1.2]">
         الدورات 
        </h2>
        <p className="mt-5 text-lg text-center max-w-md mx-auto text-muted-foreground md:text-2xl">
          Enhance your strategy with intelligent tools designed for success.
        </p>
          <div className="flex items-center justify-center mt-6">
                  <Button className="max-sm:hidden" size="sm" variant="outline">
            <Link href="/products">المزيد...</Link>
          </Button>
        </div>
        <Card className="mx-auto mt-8 w-full space-y-20 md:mt-18 border-none bg-transparent shadow-none">
          {features.map((feature) => (
            <div
              className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse 
              "
              key={feature.category}
             >
              <CardHeader className="relative aspect-14/9 w-full flex-1 basis-1/2 rounded-2xl border border-border/50 bg-muted min-h-[270px]   " >
                <Image
                  alt={feature.title}
                 className="object-cover border-rounded-2xl"
                  src={feature.image}
                  fill
                />
             
              </CardHeader>
              <CardContent className="flex flex-1 basis-1/2 flex-col items-start">
                {/* <span className="font-medium text-muted-foreground text-sm uppercase">
                  {feature.category}
                </span> */}
                <h4 className="mt-3 mb-2 font-medium text-2xl tracking-[-0.02em] md:text-[1.75rem]/snug">
                  {feature.title}
                </h4>
                <p className="mb-6 text-lg text-muted-foreground">
                  {feature.details}
                </p>
             <div className="flex items-center justify-center mt-6">
                  <Button className="max-sm:hidden" size="sm" variant="outline">
            <Link href="/products">المزيد...</Link>
          </Button>
        </div>
              </CardContent>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default Courses;
