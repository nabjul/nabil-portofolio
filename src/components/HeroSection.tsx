"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PROFILE_DATA } from "@/data/portfolio";
import { Download, ArrowDownRight, Star, Cpu, Network, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#0b0d0c]"
    >
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Top Centered Pill Badge (Flat matte surface, no gradient) */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#242c28] bg-[#121614] text-zinc-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#16a36a]" />
            <span>{t(PROFILE_DATA.badge)}</span>
          </div>
        </div>

        {/* Centered 2-Line Headline */}
        <div className="text-center max-w-3xl mx-auto relative z-20">
          <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-bold tracking-tight text-white leading-[1.15]">
            <span className="block">{t(PROFILE_DATA.heroHeadlineLine1)}</span>
            <span className="block mt-1">{t(PROFILE_DATA.heroHeadlineLine2)}</span>
          </h1>
        </div>

        {/* Centerpiece Stage (Portrait + Subtle Studio Backdrop + Callouts + Bottom CTA Dock) */}
        <div className="relative mt-4 sm:mt-2 min-h-[420px] sm:min-h-[470px] flex flex-col items-center justify-end">
          {/* Single Controlled Studio Backlight Behind Portrait Only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[42%] w-[280px] sm:w-[440px] h-[280px] sm:h-[320px] rounded-full bg-[#16a36a]/25 blur-[75px]"
          />

          {/* Desktop Left Callouts */}
          <div className="hidden lg:flex flex-col justify-between absolute left-4 xl:left-8 top-12 bottom-16 w-[250px] z-20">
            <div className="pl-3 border-l-2 border-[#16a36a]">
              <div className="flex items-baseline gap-1.5">
                <span className="text-[#18b779] text-2xl font-bold font-mono tracking-tight">
                  {PROFILE_DATA.heroStatLeftNumber}
                </span>
                <span className="text-xs text-zinc-200 font-medium whitespace-pre-line leading-snug">
                  {t(PROFILE_DATA.heroStatLeftLabel)}
                </span>
              </div>
            </div>

            <p className="text-xs leading-[1.65] text-zinc-300 font-normal">
              {t(PROFILE_DATA.heroSummaryLeft)}
            </p>
          </div>

          {/* Desktop Right Callout (Flat Matte Card) */}
          <div className="hidden lg:flex flex-col items-start absolute right-4 xl:right-8 top-1/2 -translate-y-8 z-20">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#121614] border border-[#242c28]">
              <div className="flex -space-x-1.5">
                <span className="w-7 h-7 rounded-full bg-[#161c19] border border-[#2b3631] flex items-center justify-center text-[10px] font-bold text-[#18b779]">
                  IPB
                </span>
                <span className="w-7 h-7 rounded-full bg-[#161c19] border border-[#2b3631] flex items-center justify-center text-[#18b779]">
                  <Cpu className="w-3.5 h-3.5" />
                </span>
                <span className="w-7 h-7 rounded-full bg-[#161c19] border border-[#2b3631] flex items-center justify-center text-[#18b779]">
                  <Network className="w-3.5 h-3.5" />
                </span>
                <span className="w-7 h-7 rounded-full bg-[#161c19] border border-[#2b3631] flex items-center justify-center text-[#18b779]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] font-semibold text-white mt-0.5">
                  {t(PROFILE_DATA.heroRightBadgeTop)}
                </p>
                <p className="text-[10px] text-zinc-400">
                  {t(PROFILE_DATA.heroRightBadgeSub)}
                </p>
              </div>
            </div>
          </div>

          {/* Center Portrait of Nabil wearing IPB University Alma Mater Jacket */}
          <div className="relative z-10 w-[280px] sm:w-[350px] md:w-[380px] h-[350px] sm:h-[420px] flex items-end justify-center select-none">
            <div className="relative w-full h-full overflow-hidden rounded-t-[130px] [mask-image:radial-gradient(ellipse_82%_88%_at_50%_46%,#000_66%,transparent_100%)]">
              <Image
                src={PROFILE_DATA.portraitUrl}
                alt={`${PROFILE_DATA.name} - IPB University Alma Mater`}
                fill
                priority
                sizes="(max-width: 768px) 320px, 400px"
                className="object-cover object-top scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0d0c] via-[#0b0d0c]/60 to-transparent" />
            </div>
          </div>

          {/* Overlapping Flat Matte CTA Dock (No Neon Glows) */}
          <div className="relative z-30 -mt-12 sm:-mt-14">
            <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-[#121614] border border-[#26302b] shadow-xl">
              <a
                href={PROFILE_DATA.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-[#16a36a] hover:bg-[#138a59] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t(PROFILE_DATA.ctaPrimary)}</span>
              </a>

              <a
                href="#documentation"
                className="inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-lg bg-[#171c19] hover:bg-[#1e2521] text-zinc-100 text-xs sm:text-sm font-medium border border-[#29332e] transition-colors"
              >
                <span>{t(PROFILE_DATA.ctaSecondary)}</span>
                <ArrowDownRight className="w-4 h-4 text-[#18b779]" />
              </a>
            </div>
          </div>

          {/* Mobile Summary & Quick Stats */}
          <div className="lg:hidden mt-8 text-center max-w-md mx-auto space-y-4 px-2">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {t(PROFILE_DATA.heroSummaryLeft)}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-md bg-[#121614] border border-[#242c28] text-[#18b779] font-medium">
                {t(PROFILE_DATA.heroRightBadgeTop)}
              </span>
              <span className="px-3 py-1 rounded-md bg-[#121614] border border-[#242c28] text-zinc-300">
                20+ {lang === "en" ? "National Competitions" : "Kompetisi Nasional"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
