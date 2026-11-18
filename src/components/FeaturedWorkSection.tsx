"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { EXPERIENCE_PROJECTS_DATA } from "@/data/portfolio";
import { Check, MapPin, Calendar } from "lucide-react";

export default function FeaturedWorkSection() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<"all" | "iot" | "network">("all");

  const filteredItems = EXPERIENCE_PROJECTS_DATA.filter((item) =>
    activeFilter === "all" ? true : item.category === activeFilter
  );

  return (
    <section id="case-study" className="py-20 sm:py-24 bg-[#0b0d0c] border-t border-[#1e2421]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Centered Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            {lang === "en" ? (
              <>
                Work Experience & Technical Roles
                <span className="block mt-1">In Real Operational Environments</span>
              </>
            ) : (
              <>
                Pengalaman Kerja & Peran Teknis
                <span className="block mt-1">Pada Lingkungan Operasional Nyata</span>
              </>
            )}
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400">
            {lang === "en"
              ? "Direct contributions at Kalta Farm, Bank Syariah Indonesia (BSI), and Cisco Networking Academy"
              : "Kontribusi langsung di Kalta Farm, Bank Syariah Indonesia (BSI), dan Cisco Networking Academy"}
          </p>

          {/* Filter Pills (Flat solid surface) */}
          <div className="mt-6 inline-flex items-center gap-1.5 p-1 rounded-lg bg-[#121614] border border-[#222926]">
            {[
              { key: "all", en: "All Roles (3)", id: "Semua Peran (3)" },
              { key: "iot", en: "IoT & Mobile Dev", id: "IoT & Aplikasi Mobile" },
              { key: "network", en: "Network & IT Security", id: "Jaringan & Keamanan IT" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as "all" | "iot" | "network")}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  activeFilter === tab.key
                    ? "bg-[#16a36a] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {lang === "en" ? tab.en : tab.id}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Vertical Flat Cards (Matching Reference Structure Without Gradient Slop) */}
        <div
          className={`mt-14 grid grid-cols-1 ${
            filteredItems.length === 1
              ? "max-w-md mx-auto"
              : filteredItems.length === 2
              ? "md:grid-cols-2 max-w-4xl mx-auto"
              : "lg:grid-cols-3"
          } gap-6 pt-3`}
        >
          {filteredItems.map((item) => {
            const isFeatured = !!item.featured;

            return (
              <div
                key={item.id}
                className={`relative rounded-xl border ${
                  isFeatured
                    ? "border-[#16a36a]/60 bg-[#121715]"
                    : "border-[#222926] bg-[#111513]"
                } p-6 pt-8 flex flex-col justify-between transition-colors hover:border-[#333f3a]`}
              >
                {/* Top Straddling Pill Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span
                    className={`inline-block px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wide whitespace-nowrap ${
                      isFeatured
                        ? "bg-[#16a36a] text-white"
                        : "bg-[#161c19] text-zinc-200 border border-[#2a342f]"
                    }`}
                  >
                    {t(item.badge)}
                  </span>
                </div>

                <div>
                  {/* Company & Domain */}
                  <div className="text-center">
                    <p className="text-xs font-mono text-[#18b779]">{item.company}</p>
                    <p className="text-xs text-zinc-400 mt-0.5">{t(item.domain)}</p>
                  </div>

                  {/* Role Box */}
                  <div className="mt-4 text-center py-3.5 px-4 rounded-lg bg-[#0c0f0e] border border-[#1f2623]">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                      {t(item.role)}
                    </h3>
                    <div className="mt-1.5 flex items-center justify-center gap-3 text-[11px] font-mono text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#18b779]" />
                        {t(item.period)}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#18b779]" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables List */}
                  <ul className="mt-5 space-y-3 text-left">
                    {item.highlights.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed"
                      >
                        <span className="w-4 h-4 rounded bg-[#151d19] border border-[#26332d] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#18b779]" />
                        </span>
                        <span>{t(bullet)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-5 pt-4 border-t border-[#1e2421]">
                    <p className="text-[11px] font-mono text-zinc-400 mb-2">
                      {t(item.metrics)}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#161b19] border border-[#252e2a] text-[10px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="mt-6 pt-2 text-center">
                  <a
                    href="#documentation"
                    className="inline-block w-full py-2.5 rounded-lg bg-[#16a36a] hover:bg-[#138a59] text-white text-xs font-semibold transition-colors"
                  >
                    {lang === "en" ? "See Work Documentation" : "Lihat Dokumentasi Kerja"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
