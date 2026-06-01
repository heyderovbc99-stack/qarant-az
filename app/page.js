"use client";
import React from 'react';
import { Shield, ArrowRight, CheckCircle2, Lock, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Yuxarı Panel / Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              Qarant<span className="text-blue-600">.az</span>
            </span>
          </div>
          <nav className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Giriş
            </button>
            <button className="text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md shadow-sm transition">
              Qeydiyyat
            </button>
          </nav>
        </div>
      </header>

      {/* Əsas Hissə / Hero Section */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 mb-4 border border-blue-100">
            🔒 100% Təhlükəsiz Escrow Sistemi
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight max-w-3xl mx-auto leading-none mb-6">
            Azərbaycanda İnternet üzərindən <span className="text-blue-600">Təhlükəsiz Alqı-Satqı</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Alıcı pulu köçürür, pul Qarant.az-da təhlükəsiz şəkildə bloklanır. Satıcı məhsulu təslim edib alıcı yoxladıqdan sonra pul satıcıya keçir.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
            <button className="w-full sm:w-auto inline-flex items-center justify-center bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-emerald-700 transition space-x-2 text-lg">
              <span>Təhlükəsiz Əməliyyat Başlat</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-gray-700 border border-gray-300 font-semibold px-8 py-4 rounded-xl shadow-sm hover:bg-gray-50 transition text-lg">
              Sistem Necə İşləyir?
            </button>
          </div>

          {/* 3 Sadə Addım Sxemi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-left">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. Depozit Yerləşdirilir</h3>
              <p className="text-sm text-gray-500">Alıcı müqavilə şərtlərinə uyğun olaraq məhsul və ya xidmət haqqını Qarant.az-ın qorunan hesabına köçürür.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-left">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. Təslim və Yoxlama</h3>
              <p className="text-sm text-gray-500">Satıcı malı alıcıya göndərir. Alıcı məhsulu tam yoxlayır və hər şeyin qaydasında olduğunu təsdiqləyir.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm text-left">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Ödəniş Azad Olunur</h3>
              <p className="text-sm text-gray-500">Alıcı təsdiq verdikdən dərhal sonra bloklanmış məbləğ tam təhlükəsiz şəkildə satıcının hesabına köçürülür.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Aşağı Panel / Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          © 2026 Qarant.az. Bütün hüquqlar qorunur. Azərbaycanda etibarlı zəmanət platforması.
        </div>
      </footer>
    </div>
  );
}
