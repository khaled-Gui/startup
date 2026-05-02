
"use client";

import React  from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";


import Link from "next/link";

import {
  
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  
  
  
  Users,
  BarChart3,
  
  
} from "lucide-react";

// ─── Types ─────────────────────────────────────────────
interface Project {
  id: string;
  title: string;
  category: string;
  status: "pending" | "approved" | "rejected" | "funded";
  requestedAmount: number;
  fundedAmount: number;
  progress: number;
  date: string;
  investors: number;
  image: string;
}



// ─── Mock Data ─────────────────────────────────────────
const mockProjects: Project[] = [
  {
    id: "1",
    title: "مشروع تطوير تطبيق ذكاء اصطناعي",
    category: "تقنية",
    status: "funded",
    requestedAmount: 500000,
    fundedAmount: 420000,
    progress: 84,
    date: "2026-04-15",
    investors: 12,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
  },
  {
    id: "2",
    title: "مشروع الطاقة الشمسية للمجتمعات",
    category: "طاقة متجددة",
    status: "approved",
    requestedAmount: 1200000,
    fundedAmount: 0,
    progress: 0,
    date: "2026-04-20",
    investors: 0,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop"
  },
  {
    id: "3",
    title: "منصة التعليم الإلكتروني المتكاملة",
    category: "تعليم",
    status: "pending",
    requestedAmount: 800000,
    fundedAmount: 0,
    progress: 0,
    date: "2026-04-28",
    investors: 0,
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop"
  },
  {
    id: "4",
    title: "مشروع الزراعة العمودية الذكية",
    category: "زراعة",
    status: "funded",
    requestedAmount: 350000,
    fundedAmount: 350000,
    progress: 100,
    date: "2026-03-10",
    investors: 8,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&h=250&fit=crop"
  }
];



// ─── Components ────────────────────────────────────────

const StatusBadge = ({ status }: { status: Project["status"] }) => {
  const styles = {
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    approved: "bg-blue-100 text-blue-700 border-blue-200",
    rejected: "bg-red-100 text-red-700 border-red-200",
    funded: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };
  const labels = {
    pending: "قيد المراجعة",
    approved: "تمت الموافقة",
    rejected: "مرفوض",
    funded: "تم التمويل",
  };
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${styles[status]}`}>
      {status === "funded" && <CheckCircle2 size={14} />}
      {status === "pending" && <Clock size={14} />}
      {status === "approved" && <TrendingUp size={14} />}
      {status === "rejected" && <AlertCircle size={14} />}
      {labels[status]}
    </span>
  );
};



/*-----------*/


const Blog = () => {
 
  return (
    
    <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-16 xl:px-64">
      <h2 className="text-pretty text-center max-w-md mx-auto font-satoshi font-semibold text-4xl tracking-tight md:text-5xl/[1.2]">
         المشاريع 
        </h2>
        
        <p className="mt-5 text-lg text-center max-w-md mx-auto text-muted-foreground md:text-2xl">
          Enhance your strategy with intelligent tools designed for success.
        </p>
        <div className="flex items-center justify-center mt-6">
                  <Button className="max-sm:hidden" size="sm" variant="outline">
            <Link href="/dashboard">المزيد...</Link>
          </Button>
        </div>
      <div className="mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {/*blogPosts.map((post) => (
          <Card
            className="gap-0 overflow-hidden rounded-lg py-0 shadow-none"
            key={post.title}
          >
            <CardHeader className="relative p-0">
              <div className="relative aspect-video w-full border-b">
                <Image
                  alt={post.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={post.image}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary shadow-none hover:bg-primary/5">
                  {post.category}
                </Badge>
                <span className="font-medium text-muted-foreground text-xs">
                  {post.readTime}
                </span>
              </div>

              <h3 className="mt-4 font-medium text-[1.4rem] text-xl tracking-[-0.02em]">
                {post.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{post.description}</p>

              <Button className="mt-6 shadow-none">
               المزيد        <ChevronLeft />
              </Button>
            </CardContent>
          </Card>
        ))*/}
         {/*filteredProjects.map((project) => (
          <Card
            className="gap-0 overflow-hidden rounded-lg py-0 shadow-none"
            key={post.title}
          >
            <CardHeader className="relative p-0">
              <div className="relative aspect-video w-full border-b">
                <Image
                  alt={post.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={post.image}
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/5 text-primary shadow-none hover:bg-primary/5">
                  {post.category}
                </Badge>
                <span className="font-medium text-muted-foreground text-xs">
                  {post.readTime}
                </span>
              </div>

              <h3 className="mt-4 font-medium text-[1.4rem] text-xl tracking-[-0.02em]">
                {post.title}
              </h3>
              <p className="mt-2 text-muted-foreground">{post.description}</p>

              <Button className="mt-6 shadow-none">
               المزيد        <ChevronLeft />
              </Button>
            </CardContent>
          </Card>
        ))*/}
            <div className="flex items-center gap-2 mt-6">
              {mockProjects.map((project) => (
                             <div key={project.id} className="p-6 hover:bg-slate-50/50 transition-colors group">
                               <div className="flex flex-col lg:flex-col gap-6">
                                 {/* Image */}
                                 <div className="relative w-full lg:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                                   <Image
                                   fill
                                     src={project.image}
                                     alt={project.title}
                                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                   />
                                 </div>
             
                                 {/* Content */}
                                 <div className="flex-1 min-w-0">
                                   <div className="flex items-start justify-between gap-4">
                                     <div className="flex-1">
                                       <div className="flex items-center gap-3 mb-2">
                                         <StatusBadge status={project.status} />
                                         <span className="text-xs text-slate-400 flex items-center gap-1">
                                           <Clock size={12} />
                                           {project.date}
                                         </span>
                                       </div>
                                       <h4 className="text-lg font-bold text-slate-900 mb-1">{project.title}</h4>
                                       <p className="text-sm text-slate-500">{project.category}</p>
                                     </div>
                                     <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                                       <ChevronLeft size={20} className="text-slate-400" />
                                     </button>
                                   </div>
             
                                   {/* Funding Progress */}
                                   <div className="mt-4">
                                     <div className="flex items-center justify-between text-sm mb-2">
                                       <span className="text-slate-600">
                                         تم جمع <span className="font-bold text-slate-900">{project.fundedAmount.toLocaleString()}</span> من{" "}
                                         <span className="font-bold text-slate-900">{project.requestedAmount.toLocaleString()}</span> دج
                                       </span>
                                       <span className="font-bold text-indigo-600">{project.progress}%</span>
                                     </div>
                                     <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                                       <div
                                         className="h-full bg-gradient-to-l from-indigo-600 to-violet-500 rounded-full transition-all duration-1000"
                                         style={{ width: `${project.progress}%` }}
                                       />
                                     </div>
                                   </div>
             
                                   {/* Meta */}
                                   <div className="flex items-center gap-6 mt-4">
                                     <div className="flex items-center gap-2 text-sm text-slate-500">
                                       <Users size={16} />
                                       <span>{project.investors} مستثمر</span>
                                     </div>
                                     <div className="flex items-center gap-2 text-sm text-slate-500">
                                       <BarChart3 size={16} />
                                       <span>نسبة الإنجاز {project.progress}%</span>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           ))}
          </div>
      </div>
    </div>
  );
};

export default Blog;
