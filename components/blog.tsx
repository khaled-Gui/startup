
"use client";

import React, { useState } from "react";
import {   ChevronRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import Link from "next/link";

import {
  LayoutDashboard,
  FolderOpen,
  DollarSign,
  FileText,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  X,
  Upload,
  ArrowUpRight,
  Users,
  BarChart3,
  Wallet,
  Target
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

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
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

const mockNotifications: Notification[] = [
  { id: "1", title: "تمت الموافقة على مشروعك", message: "مشروع الطاقة الشمسية تمت الموافقة عليه من قبل لجنة التقييم", time: "منذ ساعتين", read: false },
  { id: "2", title: "تمويل جديد", message: "تم استلام تمويل بقيمة 50,000 دج لمشروع تطبيق الذكاء الاصطناعي", time: "منذ 5 ساعات", read: false },
  { id: "3", title: "تذكير", message: "يرجى إكمال المستندات المطلوبة لمشروع التعليم الإلكتروني", time: "منذ يوم", read: true }
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

const StatCard = ({ icon: Icon, title, value, change, color }: any) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-slate-500 text-sm font-medium">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-2">{value}</h3>
        {change && (
          <p className={`text-sm mt-1 font-medium ${change.startsWith("+") ? "text-emerald-600" : "text-slate-400"}`}>
            {change}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
    </div>
  </div>
);

/*-----------*/
const blogPosts = [
  {
    category: "Technology",
    title: "A beginner's guide to blockchain for engineers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    readTime: "5 min read",
    image:
      "https://cdn.pixabay.com/photo/2021/08/27/18/50/water-6579313_1280.jpg",
  },
  {
    category: "Business",
    title: "Understanding React Server Components",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    readTime: "8 min read",
    image:
      "https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_1280.jpg",
  },
  {
    category: "Finance",
    title: "10 Useful Shadcn UI Components You Should Know",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    readTime: "6 min read",
    image:
      "https://cdn.pixabay.com/photo/2021/08/13/12/51/sea-6543041_1280.jpg",
  },
  
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProjects = mockProjects.filter(p =>
    p.title.includes(searchQuery) || p.category.includes(searchQuery)
  );
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
              {filteredProjects.map((project) => (
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
