
"use client";

import React, { useState } from "react";
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

const FundingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
    description: "",
    documents: [] as File[]
  });

  if (!isOpen) return null;

  const categories = ["تقنية", "طاقة متجددة", "تعليم", "زراعة", "صحة", "عقارات", "تصنيع", "سياحة"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-100 px-8 py-6 rounded-t-3xl z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">طلب تمويل جديد</h2>
              <p className="text-slate-500 mt-1">أكمل البيانات المطلوبة لطلب تمويل مشروعك</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={24} className="text-slate-400" />
            </button>
          </div>
          {/* Progress */}
          <div className="flex items-center gap-2 mt-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  step >= s ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`flex-1 h-1 rounded-full ${step > s ? "bg-indigo-600" : "bg-slate-100"}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">اسم المشروع</label>
                <input
                  type="text"
                  placeholder="مثال: مشروع تطوير تطبيق ذكاء اصطناعي"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-right"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">التصنيف</label>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFormData({ ...formData, category: cat })}
                      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                        formData.category === cat
                          ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">مبلغ التمويل المطلوب (دج)</label>
                <input
                  type="number"
                  placeholder="500,000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-right"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">وصف المشروع</label>
                <textarea
                  rows={5}
                  placeholder="صف مشروعك بالتفصيل..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-right resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">المستندات المرفقة</label>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-indigo-300 transition-colors cursor-pointer">
                  <Upload size={40} className="mx-auto text-slate-400 mb-3" />
                  <p className="text-slate-600 font-medium">اسحب الملفات هنا أو انقر للاختيار</p>
                  <p className="text-slate-400 text-sm mt-1">PDF, DOC, XLS حتى 20 ميجابايت</p>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={40} className="text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">تم إرسال طلب التمويل بنجاح!</h3>
              <p className="text-slate-500">سنقوم بمراجعة طلبك والرد عليك خلال 3-5 أيام عمل</p>
              <div className="mt-6 bg-slate-50 rounded-xl p-4 text-right">
                <p className="text-sm text-slate-600"><span className="font-semibold">رقم الطلب:</span> #REQ-2026-0042</p>
                <p className="text-sm text-slate-600 mt-1"><span className="font-semibold">تاريخ الإرسال:</span> 30 أبريل 2026</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-slate-100 px-8 py-6 rounded-b-3xl">
          <div className="flex gap-3">
            {step > 1 && step < 3 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
              >
                السابق
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex-1 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                {step === 2 ? "إرسال الطلب" : "التالي"}
              </button>
            ) : (
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                العودة للوحة التحكم
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Dashboard ──────────────────────────────────
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showFundingModal, setShowFundingModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = mockProjects.filter(p =>
    p.title.includes(searchQuery) || p.category.includes(searchQuery)
  );

  const totalRequested = mockProjects.reduce((sum, p) => sum + p.requestedAmount, 0);
  const totalFunded = mockProjects.reduce((sum, p) => sum + p.fundedAmount, 0);
  const activeProjects = mockProjects.filter(p => p.status === "funded" || p.status === "approved").length;
  const totalInvestors = mockProjects.reduce((sum, p) => sum + p.investors, 0);

  const unreadCount = mockNotifications.filter(n => !n.read).length;

  const navItems = [
    { id: "dashboard", label: "الرئيسية", icon: LayoutDashboard },
    { id: "projects", label: "مشاريعي", icon: FolderOpen },
    { id: "funding", label: "التمويل", icon: DollarSign },
    { id: "documents", label: "المستندات", icon: FileText },
    { id: "settings", label: "الإعدادات", icon: Settings },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <aside className="fixed right-0 top-0 h-full w-72 bg-white border-l border-slate-200 z-40 hidden lg:flex flex-col">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <Target size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">منصة التمويل</h1>
              <p className="text-xs text-slate-400">لوحة تحكم المستثمر</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-5 text-white">
            <p className="text-sm font-medium opacity-90">هل لديك مشروع جديد؟</p>
            <p className="text-xs opacity-70 mt-1 mb-4">قدم طلب تمويل واحصل على دعم مالي</p>
            <button
              onClick={() => setShowFundingModal(true)}
              className="w-full py-2.5 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-semibold hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              طلب تمويل
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:mr-72 min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-slate-200 z-30 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="البحث في المشاريع..."
                  className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors relative"
                >
                  <Bell size={20} className="text-slate-600" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1.5 left-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                  )}
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute left-0 top-full mt-2 w-96 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                      <h3 className="font-bold text-slate-900">الإشعارات</h3>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">{unreadCount} جديد</span>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {mockNotifications.map((notif) => (
                        <div key={notif.id} className={`p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors ${!notif.read ? "bg-indigo-50/30" : ""}`}>
                          <div className="flex items-start gap-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${!notif.read ? "bg-indigo-500" : "bg-slate-300"}`} />
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-slate-800">{notif.title}</p>
                              <p className="text-xs text-slate-500 mt-1">{notif.message}</p>
                              <p className="text-xs text-slate-400 mt-2">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 pr-4 border-r border-slate-200">
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">مصباحي</p>
                  <p className="text-xs text-slate-400">مستثمر</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-indigo-700 font-bold text-sm">أم</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Welcome */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900">مرحباً، مصباحي! 👋</h2>
            <p className="text-slate-500 mt-1">إليك نظرة عامة على مشاريعك وأدائك المالي</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            <StatCard
              icon={Wallet}
              title="إجمالي التمويل المطلوب"
              value={`${totalRequested.toLocaleString()} دج`}
              change="+12% عن الشهر الماضي"
              color="bg-indigo-600"
            />
            <StatCard
              icon={DollarSign}
              title="إجمالي التمويل المحصل"
              value={`${totalFunded.toLocaleString()} دج`}
              change="+8% عن الشهر الماضي"
              color="bg-emerald-500"
            />
            <StatCard
              icon={FolderOpen}
              title="المشاريع النشطة"
              value={activeProjects.toString()}
              change="مشروعين قيد التنفيذ"
              color="bg-amber-500"
            />
            <StatCard
              icon={Users}
              title="إجمالي المستثمرين"
              value={totalInvestors.toString()}
              change="+3 مستثمرين جدد"
              color="bg-violet-500"
            />
          </div>

          {/* Projects Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">مشاريعي</h3>
                <p className="text-sm text-slate-500 mt-1">إدارة ومتابعة مشاريعك الحالية</p>
              </div>
              <button
                onClick={() => setShowFundingModal(true)}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                <Plus size={18} />
                مشروع جديد
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {filteredProjects.map((project) => (
                <div key={project.id} className="p-6 hover:bg-slate-50/50 transition-colors group">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Image */}
                    <div className="w-full lg:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img
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

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-indigo-200 text-sm font-medium">ابدأ الآن</p>
                  <h3 className="text-xl font-bold mt-1">طلب تمويل جديد</h3>
                  <p className="text-indigo-200 text-sm mt-2">قدم مشروعك واحصل على فرصة التمويل</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Plus size={24} />
                </div>
              </div>
              <button
                onClick={() => setShowFundingModal(true)}
                className="mt-5 w-full py-3 bg-white text-indigo-700 rounded-xl font-semibold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
              >
                تقديم طلب
                <ArrowUpRight size={18} />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">الأداء</p>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">نسبة نجاح المشاريع</h3>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <TrendingUp size={24} className="text-emerald-600" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-bold text-slate-900">75%</span>
                  <span className="text-sm text-emerald-600 font-medium mb-1">+5%</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">3 من 4 مشاريع تم تمويلها</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-slate-500 text-sm font-medium">المستندات</p>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">المستندات المطلوبة</h3>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <FileText size={24} className="text-amber-600" />
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">خطة العمل</span>
                  <span className="text-emerald-600 font-medium">تم الرفع</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">الدراسة المالية</span>
                  <span className="text-amber-600 font-medium">قيد المراجعة</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">السجل التجاري</span>
                  <span className="text-red-500 font-medium">مطلوب</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Funding Modal */}
      <FundingModal isOpen={showFundingModal} onClose={() => setShowFundingModal(false)} />

      {/* Click outside to close notifications */}
      {showNotifications && (
        <div className="fixed inset-0 z-20" onClick={() => setShowNotifications(false)} />
      )}
    </div>
  );
}


