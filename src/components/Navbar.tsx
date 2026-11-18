"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PROFILE_DATA } from "@/data/portfolio";
import { Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    {
      href: "#home",
      label: { en: "Home", id: "Beranda" },
    },
    {
      href: "#documentation",
      label: { en: "Documentation", id: "Dokumentasi Kerja" },
    },
    {
      href: "#case-study",
      label: { en: "Experience", id: "Pengalaman" },
    },
    {
      href: "#services",
      label: { en: "Competencies", id: "Keahlian" },
    },
    {
      href: "#achievements",
      label: { en: "Achievements", id: "Prestasi" },
    },
    {
      href: "#about",
      label: { en: "Education & CCNA", id: "Pendidikan & CCNA" },
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0d0c]/95 backdrop-blur-sm border-b border-[#1e2421]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-18 flex items-center justify-between">
        {/* Left Navigation Links */}
        <div className="flex items-center gap-8">
          <a
            href="#home"
            className="text-white font-semibold tracking-tight text-sm sm:text-base flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#16a36a]" />
            <span>Nabil Zulfan</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs lg:text-[13px] text-zinc-400 hover:text-white transition-colors font-medium"
              >
                {t(item.label)}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Controls: Language Toggle + Solid Flat Emerald Contact Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-[#131715] hover:bg-[#191f1c] border border-[#242c28] transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#18b779]" />
            <span className={lang === "en" ? "text-white font-semibold" : "text-zinc-500"}>
              EN
            </span>
            <span className="text-zinc-600">/</span>
            <span className={lang === "id" ? "text-white font-semibold" : "text-zinc-500"}>
              ID
            </span>
          </button>

          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-[#16a36a] hover:bg-[#138a59] text-white text-xs lg:text-[13px] font-medium transition-colors"
          >
            {lang === "en" ? "Contact" : "Kontak"}
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-md text-xs font-medium text-zinc-200 bg-[#131715] border border-[#242c28]"
          >
            {lang.toUpperCase()}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg text-zinc-300 hover:text-white bg-[#131715] border border-[#242c28]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0e1110] border-b border-[#1e2421] px-5 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-[#151a18]"
              >
                {t(item.label)}
              </a>
            ))}
          </div>
          <div className="pt-2 flex items-center gap-2">
            <a
              href={PROFILE_DATA.cvUrl}
              download
              className="flex-1 text-center py-2.5 rounded-lg border border-[#26302b] bg-[#131715] text-xs font-medium text-white"
            >
              {t(PROFILE_DATA.ctaPrimary)}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex-1 text-center py-2.5 rounded-lg bg-[#16a36a] text-xs font-medium text-white"
            >
              {lang === "en" ? "Contact" : "Kontak"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
