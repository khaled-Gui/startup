"use client";

import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async () => {
    // Reset previous messages
    setError("");
    setSuccess(false);

    // Validation
    if (!name || !email || !password) {
      setError("يرجى ملء جميع الحقول (الاسم والبريد الإلكتروني وكلمة المرور)");
      return;
    }

    if (password.length < 8) {
      setError("كلمة المرور يجب أن تكون 8 أحرف على الأقل");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "حدث خطأ في التسجيل");
      } else {
        setSuccess(true);
        setName("");
        setEmail("");
        setPassword("");
        
        // Redirect after 2 seconds
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    } catch (err) {
      setError("خطأ في الخادم. يرجى المحاولة لاحقاً");
      console.error("Registration error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">

        <h2 className="text-2xl font-bold text-center mb-6">
          إنشاء حساب 🚀
        </h2>

        {/* Success Message */}
        {success && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            ✅ تم إنشاء الحساب بنجاح! سيتم تحويلك الآن...
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
            ❌ {error}
          </div>
        )}

        {/* Name */}
        <input
          type="text"
          placeholder="الاسم الكامل"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          disabled={loading || success}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 rounded-lg transition"
        >
          {loading ? "جاري التسجيل..." : "تسجيل"}
        </button>

        {/* Login Link */}
        <p className="text-center mt-6 text-sm text-gray-600">
          لديك حساب؟{" "}
          <a href="/login" className="text-green-600 font-semibold hover:underline">
            تسجيل الدخول
          </a>
        </p>

      </div>

    </div>
  );
}