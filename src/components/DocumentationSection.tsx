"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DOCUMENTATION_LOG_DATA, EXPERIENCE_PROJECTS_DATA } from "@/data/portfolio";
import {
  Camera,
  Cpu,
  Network,
  Trophy,
  Users,
  MapPin,
  Calendar,
  Wrench,
  Check,
  FolderOpen,
} from "lucide-react";

export default function DocumentationSection() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "iot" | "network" | "other">("all");
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>("kalta-farm-iot");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filteredDocs = DOCUMENTATION_LOG_DATA.filter((doc) => {
    if (filter === "all") return true;
    if (filter === "other") {
      return doc.category === "competition" || doc.category === "organization";
    }
    return doc.category === filter;
  });

  const activeProject =
    EXPERIENCE_PROJECTS_DATA.find((p) => p.id === activeWorkflowId) ||
    EXPERIENCE_PROJECTS_DATA[0];

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "iot":
        return <Cpu className="w-4 h-4 text-[#18b779]" />;
      case "network":
        return <Network className="w-4 h-4 text-[#18b779]" />;
      case "competition":
        return <Trophy className="w-4 h-4 text-[#18b779]" />;
      default:
        return <Users className="w-4 h-4 text-[#18b779]" />;
    }
  };

  return (
    <section
      id="documentation"
      className="py-20 sm:py-24 bg-[#0b0d0c] border-t border-[#1e2421]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1e2421]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131816] border border-[#242c28] text-xs font-mono text-[#18b779] mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>
                {lang === "en" ? "FIELD DOCUMENTATION & WORK LOG" : "DOKUMENTASI KERJA & KEGIATAN"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {lang === "en"
                ? "What I Built, Configured & Led"
                : "Dokumentasi Apa yang Saya Kerjakan"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-2xl">
              {lang === "en"
                ? "Detailed breakdown of physical hardware assembly, network migrations, mobile development, and national competition work."
                : "Rincian nyata pekerjaan teknis di lapangan mulai dari perakitan hardware IoT, instalasi jaringan & CCTV, hingga riset nasional."}
            </p>
          </div>

          {/* Filter Buttons (Flat, crisp, no gradients) */}
          <div className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#121614] border border-[#222926]">
            {[
              { key: "all", en: "All Logs (6)", id: "Semua (6)" },
              { key: "iot", en: "IoT & Mobile", id: "IoT & Mobile" },
              { key: "network", en: "Network & Security", id: "Jaringan & CCTV" },
              { key: "other", en: "Competitions & Org", id: "Lomba & Organisasi" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as "all" | "iot" | "network" | "other")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                  filter === tab.key
                    ? "bg-[#16a36a] text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {lang === "en" ? tab.en : tab.id}
              </button>
            ))}
          </div>
        </div>

        {/* Part 1: Step-by-Step "What I Did" Technical Breakdown Switcher */}
        <div className="mt-10 rounded-xl bg-[#111513] border border-[#222926] p-5 sm:p-7">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#1e2522]">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#18b779]">
                {lang === "en"
                  ? "STEP-BY-STEP EXECUTION BREAKDOWN"
                  : "TAHAPAN EKSEKUSI TEKNIS DI LAPANGAN"}
              </p>
              <h3 className="mt-1 text-lg sm:text-xl font-bold text-white">
                {activeProject.company} — {t(activeProject.role)}
              </h3>
            </div>

            {/* Project Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {EXPERIENCE_PROJECTS_DATA.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveWorkflowId(proj.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                    activeWorkflowId === proj.id
                      ? "bg-[#16a36a] border-[#16a36a] text-white"
                      : "bg-[#151a18] border-[#252d29] text-zinc-300 hover:border-zinc-600"
                  }`}
                >
                  {proj.company}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Execution Timeline */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {activeProject.executionSteps.map((stepItem) => (
              <div
                key={stepItem.step}
                className="rounded-lg bg-[#0d100f] border border-[#1f2623] p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded bg-[#151c19] border border-[#26312c] font-mono text-xs font-semibold text-[#18b779]">
                      STEP {stepItem.step}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {activeProject.location}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {t(stepItem.title)}
                  </h4>
                  <p className="mt-2 text-xs text-zinc-300 leading-relaxed">
                    {t(stepItem.detail)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Visual Documentation Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc, idx) => {
            const imgFailed = failedImages[doc.id] ?? false;

            return (
              <article
                key={doc.id}
                className="rounded-xl bg-[#111513] border border-[#222926] hover:border-[#333f3a] transition-colors overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Top Photo / Documentation Media Frame */}
                  <div className="relative h-48 w-full bg-[#0c0f0e] border-b border-[#1e2421] overflow-hidden flex flex-col justify-between p-4">
                    {!imgFailed && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={doc.imageSrc}
                        alt={t(doc.title)}
                        onError={() =>
                          setFailedImages((prev) => ({ ...prev, [doc.id]: true }))
                        }
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}

                    {/* Top Metadata Bar */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#141a17] border border-[#26302b] text-[11px] font-medium text-zinc-200">
                        {getCategoryIcon(doc.category)}
                        {t(doc.categoryLabel)}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#141a17] border border-[#26302b] font-mono text-[10px] text-zinc-400">
                        DOC-0{idx + 1}
                      </span>
                    </div>

                    {/* Center Technical Frame Placeholder (shown if user hasn't placed photo yet) */}
                    {imgFailed && (
                      <div className="relative z-10 my-auto text-center px-3">
                        <div className="w-9 h-9 rounded-lg bg-[#151c19] border border-[#26312c] flex items-center justify-center mx-auto text-[#18b779] mb-2">
                          <FolderOpen className="w-4 h-4" />
                        </div>
                        <p className="text-xs font-medium text-zinc-300">
                          {lang === "en" ? "Documentation Photo Slot" : "Slot Foto Dokumentasi"}
                        </p>
                        <p className="mt-0.5 text-[10px] font-mono text-zinc-500 truncate">
                          {doc.placeholderFile}
                        </p>
                      </div>
                    )}

                    {/* Bottom Location & Date Bar */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#18b779]" />
                        {doc.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#18b779]" />
                        {doc.location}
                      </span>
                    </div>
                  </div>

                  {/* Card Body: What I Did */}
                  <div className="p-5">
                    <p className="text-[11px] font-mono text-[#18b779]">
                      {doc.projectOrEvent}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-white leading-snug">
                      {t(doc.title)}
                    </h3>

                    <div className="mt-3 pt-3 border-t border-[#1e2421]">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                        {lang === "en" ? "What I Did:" : "Apa yang Saya Kerjakan:"}
                      </p>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {t(doc.whatIDid)}
                      </p>
                    </div>

                    {/* Tools & Hardware Used */}
                    <div className="mt-4">
                      <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 mb-2">
                        <Wrench className="w-3 h-3 text-[#18b779]" />
                        <span>
                          {lang === "en" ? "Tools & Equipment:" : "Perangkat & Alat:"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {doc.toolsUsed.map((tool) => (
                          <span
                            key={tool}
                            className="px-2 py-0.5 rounded bg-[#161b19] border border-[#252e2a] text-[10px] font-mono text-zinc-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Outcome */}
                <div className="px-5 py-3.5 bg-[#0e1210] border-t border-[#1e2421] flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#18b779] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-zinc-300 leading-snug">
                    {t(doc.outcome)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
