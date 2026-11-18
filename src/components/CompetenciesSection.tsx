"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { COMPETENCIES_DATA, WHY_HIRE_STATS } from "@/data/portfolio";
import {
  Cpu,
  Network,
  ShieldCheck,
  Smartphone,
  CloudCog,
  Award,
} from "lucide-react";

export default function CompetenciesSection() {
  const { lang, t } = useLanguage();
  const [showTags, setShowTags] = useState(true);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "cpu":
        return <Cpu className="w-5 h-5" />;
      case "network":
        return <Network className="w-5 h-5" />;
      case "shield":
        return <ShieldCheck className="w-5 h-5" />;
      case "smartphone":
        return <Smartphone className="w-5 h-5" />;
      case "cloud":
        return <CloudCog className="w-5 h-5" />;
      case "award":
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* Core Competencies (Flat Solid Surfaces, Zero Gradients) */}
      <section id="services" className="py-16 sm:py-20 bg-[#0b0d0c] border-t border-[#1e2421]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === "en" ? "Core Technical Competencies" : "Kompetensi Teknis Utama"}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-zinc-400">
              {lang === "en"
                ? "Practical capabilities across embedded hardware, Cisco networking, security infrastructure, and mobile telemetry"
                : "Kapabilitas teknis di bidang perangkat keras tertanam, jaringan Cisco, infrastruktur keamanan IT, dan aplikasi mobile"}
            </p>
          </div>

          {/* 3x2 Flat Solid Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {COMPETENCIES_DATA.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-[#222926] hover:border-[#333f3a] bg-[#111513] p-5 transition-colors"
              >
                <div className="flex items-start gap-4">
                  {/* Left Solid Flat Icon Box */}
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-[#151c19] border border-[#26312c] flex items-center justify-center text-[#18b779]">
                    {getIcon(item.iconName)}
                  </div>

                  {/* Right Text Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-[15px] font-semibold text-white tracking-tight">
                        {t(item.title)}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {item.code}
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                      {t(item.description)}
                    </p>

                    {showTags && (
                      <div className="mt-3 pt-2.5 border-t border-[#1e2421] flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded bg-[#161b19] border border-[#252e2a] text-[10px] font-mono text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowTags(!showTags)}
              className="px-5 py-2 rounded-lg border border-[#26302b] bg-[#121614] hover:bg-[#171c19] text-xs font-medium text-zinc-200 transition-colors cursor-pointer"
            >
              {showTags
                ? lang === "en"
                  ? "Compact View"
                  : "Tampilan Ringkas"
                : lang === "en"
                ? "Show Technical Tags"
                : "Tampilkan Tag Teknis"}
            </button>
          </div>
        </div>
      </section>

      {/* "Why Hire Me?" Band */}
      <section className="py-16 sm:py-20 bg-[#111513] border-y border-[#1e2421]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {lang === "en" ? "Why Hire Me?" : "Mengapa Merekrut Saya?"}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            {lang === "en"
              ? "Academic rigor at IPB University paired with real field delivery in banking IT & hydroponic automation"
              : "Perpaduan fondasi akademik di IPB University dengan eksekusi nyata pada IT perbankan & otomasi hidroponik"}
          </p>

          {/* 3 Stat Columns */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            {WHY_HIRE_STATS.map((stat, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#0c0f0e] border border-[#1f2623]"
              >
                <span className="text-xs font-mono font-semibold text-[#18b779]">
                  {stat.metric}
                </span>
                <h3 className="mt-1 text-base font-bold text-white tracking-tight">
                  {t(stat.title)}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">
                  {t(stat.subtitle)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg border border-[#26302b] bg-[#151a18] hover:bg-[#16a36a] hover:border-[#16a36a] text-xs font-semibold text-white transition-colors"
            >
              {lang === "en" ? "Contact for Internship" : "Hubungi untuk Magang"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
