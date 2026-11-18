"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ACHIEVEMENTS_DATA,
  ORGANIZATIONS_DATA,
  CERTIFICATIONS_DATA,
  PROFILE_DATA,
} from "@/data/portfolio";
import {
  Trophy,
  Award,
  Users,
  GraduationCap,
  ShieldCheck,
  Check,
  Calendar,
} from "lucide-react";

export default function AchievementsOrgSection() {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"achievements" | "organizations">("achievements");

  return (
    <>
      {/* Education & Cisco CCNA Certifications Section (Flat Solid Surfaces) */}
      <section id="about" className="py-16 sm:py-20 bg-[#111513] border-t border-[#1e2421]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: IPB University Education Card */}
            <div className="lg:col-span-5 rounded-xl border border-[#222926] bg-[#0c0f0e] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#141a17] border border-[#26302b] text-[#18b779] text-xs font-mono">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{lang === "en" ? "EDUCATION" : "PENDIDIKAN"}</span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {PROFILE_DATA.education.university}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#18b779] font-medium">
                  {t(PROFILE_DATA.education.degree)}
                </p>
                <p className="mt-1 text-xs font-mono text-zinc-400">
                  {t(PROFILE_DATA.education.period)}
                </p>

                <div className="mt-5 p-4 rounded-lg bg-[#121614] border border-[#222926] flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      {lang === "en" ? "Cumulative GPA" : "IPK Sementara"}
                    </p>
                    <p className="text-2xl font-bold font-mono text-white mt-0.5">
                      {PROFILE_DATA.education.gpa}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-mono text-zinc-400">
                      {lang === "en" ? "Competitions" : "Kompetisi"}
                    </p>
                    <p className="text-lg font-bold font-mono text-[#18b779] mt-0.5">
                      20+ National
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1e2421] text-xs text-zinc-300 space-y-1.5">
                <p className="font-medium text-white">
                  {lang === "en" ? "High School:" : "Pendidikan Menengah:"}
                </p>
                <p className="text-zinc-400">{PROFILE_DATA.education.highSchool}</p>
              </div>
            </div>

            {/* Right Column: Dual Cisco CCNA Certifications */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-5">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {lang === "en"
                    ? "Cisco Networking Academy Certifications"
                    : "Sertifikasi Cisco Networking Academy"}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-400">
                  {lang === "en"
                    ? "Official training in enterprise switching, routing, wireless LANs, and network diagnostics"
                    : "Pelatihan jaringan resmi mencakup switching, routing, wireless LAN, dan diagnostik jaringan"}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {CERTIFICATIONS_DATA.map((cert) => (
                  <div
                    key={cert.id}
                    className="rounded-xl border border-[#222926] bg-[#0c0f0e] p-5 flex flex-col sm:flex-row items-start gap-4"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-lg bg-[#151c19] border border-[#26312c] flex items-center justify-center text-[#18b779]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm sm:text-base font-semibold text-white">
                          {cert.name}
                        </h4>
                        <span className="px-2.5 py-0.5 rounded bg-[#141a17] border border-[#26302b] text-[11px] font-mono text-[#18b779]">
                          {cert.issuer} • {cert.year}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-zinc-300 leading-relaxed">
                        {t(cert.description)}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-[#151a18] border border-[#242c28] text-[10px] font-mono text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Achievements & Organizational Leadership Section */}
      <section
        id="achievements"
        className="py-20 sm:py-24 bg-[#0b0d0c] border-t border-[#1e2421]"
      >
        <div id="organizations" className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === "en"
                ? "National Awards & Leadership Track"
                : "Prestasi Nasional & Pengalaman Organisasi"}
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-zinc-400">
              {lang === "en"
                ? "6 national competition awards & finalist selections alongside leadership across 8+ campus organizations"
                : "6 gelar juara & finalis nasional serta kepemimpinan aktif di 8+ organisasi dan kepanitiaan kampus"}
            </p>

            {/* Tab Switcher (Flat Solid Style) */}
            <div className="mt-7 inline-flex items-center gap-1.5 p-1.5 rounded-xl bg-[#121614] border border-[#222926]">
              <button
                onClick={() => setActiveTab("achievements")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === "achievements"
                    ? "bg-[#16a36a] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>
                  {lang === "en"
                    ? `National Awards (${ACHIEVEMENTS_DATA.length})`
                    : `Prestasi Nasional (${ACHIEVEMENTS_DATA.length})`}
                </span>
              </button>

              <button
                onClick={() => setActiveTab("organizations")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === "organizations"
                    ? "bg-[#16a36a] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Users className="w-4 h-4" />
                <span>
                  {lang === "en"
                    ? `Organizations (${ORGANIZATIONS_DATA.length})`
                    : `Organisasi (${ORGANIZATIONS_DATA.length})`}
                </span>
              </button>
            </div>
          </div>

          {/* Tab 1: 6 National Achievements Grid */}
          {activeTab === "achievements" ? (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ACHIEVEMENTS_DATA.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-[#222926] hover:border-[#333f3a] bg-[#111513] p-5 flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#151c19] border border-[#26312c] text-[#18b779] text-[11px] font-semibold">
                        <Award className="w-3.5 h-3.5" />
                        {t(item.rank)}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">{item.year}</span>
                    </div>

                    <h3 className="mt-3.5 text-sm sm:text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-mono text-zinc-400">
                      {t(item.organizer)}
                    </p>
                    <p className="mt-2.5 text-xs text-zinc-300 leading-relaxed">
                      {t(item.description)}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1e2421] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>{t(item.category)}</span>
                    <span className="text-[#18b779]">National</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Tab 2: 6 Organizational Leadership Cards */
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
              {ORGANIZATIONS_DATA.map((org) => (
                <div
                  key={org.id}
                  className="rounded-xl border border-[#222926] hover:border-[#333f3a] bg-[#111513] p-5 sm:p-6 flex flex-col justify-between transition-colors"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#151c19] border border-[#26312c] text-[#18b779] text-[11px] font-semibold">
                        {t(org.role)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                        <Calendar className="w-3 h-3 text-[#18b779]" />
                        {org.period}
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-white">
                      {org.organization}
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">{t(org.description)}</p>

                    <ul className="mt-4 space-y-2">
                      {org.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed"
                        >
                          <Check className="w-3.5 h-3.5 text-[#18b779] shrink-0 mt-0.5" />
                          <span>{t(b)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
