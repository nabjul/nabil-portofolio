"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { PROFILE_DATA } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
  ArrowUpRight,
} from "lucide-react";

export default function ContactFooter() {
  const { lang, t } = useLanguage();
  const [senderName, setSenderName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      lang === "en"
        ? `Internship Inquiry from ${senderName || "Recruiter"} (${company || "Company"})`
        : `Tawaran Magang dari ${senderName || "Recruiter"} (${company || "Perusahaan"})`
    );
    const body = encodeURIComponent(
      `${message}\n\n---\nFrom: ${senderName}\nCompany: ${company}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      id="contact"
      className="bg-[#111513] border-t border-[#1e2421] pt-20 pb-12"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#141a17] border border-[#26302b] text-[#18b779] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#16a36a]" />
              <span>
                {lang === "en"
                  ? "OPEN FOR INTERNSHIP"
                  : "SIAP MENGIKUTI PROGRAM MAGANG"}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              {lang === "en"
                ? "Let's Discuss Your Internship Role"
                : "Mari Diskusikan Kebutuhan Magang Tim Anda"}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-lg">
              {lang === "en"
                ? "Available for internship roles in IoT & Embedded Systems, Network & Cloud Infrastructure, and IT Support. Reach out directly via Email or WhatsApp."
                : "Tersedia untuk posisi magang di bidang IoT & Embedded Systems, Network & Cloud Infrastructure, serta IT Support. Hubungi saya langsung melalui Email atau WhatsApp."}
            </p>

            {/* Flat Contact Cards */}
            <div className="space-y-3 pt-1">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center justify-between p-4 rounded-xl border border-[#222926] bg-[#0c0f0e] hover:border-[#333f3a] transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#151c19] border border-[#26312c] flex items-center justify-center text-[#18b779]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-zinc-400">Email</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {PROFILE_DATA.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#18b779] transition-colors" />
              </a>

              <a
                href={PROFILE_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-[#222926] bg-[#0c0f0e] hover:border-[#333f3a] transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#151c19] border border-[#26312c] flex items-center justify-center text-[#18b779]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-zinc-400">Phone / WhatsApp</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      {PROFILE_DATA.phone}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#18b779] transition-colors" />
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-[#222926] bg-[#0c0f0e]">
                <div className="w-10 h-10 rounded-lg bg-[#151c19] border border-[#26312c] flex items-center justify-center text-[#18b779] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-zinc-400">
                    {lang === "en" ? "Location" : "Domisili"}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-zinc-200">
                    {t(PROFILE_DATA.location)}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links & Download CV */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE_DATA.cvUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#16a36a] hover:bg-[#138a59] text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t(PROFILE_DATA.ctaPrimary)} (PDF)</span>
              </a>

              <a
                href={PROFILE_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#151a18] hover:bg-[#1b221f] border border-[#26302b] text-xs font-medium text-zinc-200 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 fill-[#18b779]"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#151a18] hover:bg-[#1b221f] border border-[#26302b] text-xs font-medium text-zinc-200 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-4 h-4 fill-[#18b779]"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Flat Solid Message Box */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSendEmail}
              className="rounded-xl border border-[#222926] bg-[#0c0f0e] p-6 sm:p-8 space-y-4"
            >
              <h3 className="text-lg font-bold text-white">
                {lang === "en" ? "Send a Direct Message" : "Kirim Pesan Langsung"}
              </h3>
              <p className="text-xs text-zinc-400">
                {lang === "en"
                  ? "Fill out the fields below to open a pre-formatted email directly to Nabil."
                  : "Isi form singkat di bawah untuk mengirim email langsung ke Nabil."}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                    {lang === "en" ? "Your Name" : "Nama Anda"}
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={lang === "en" ? "e.g. Budi Santoso" : "Contoh: Budi Santoso"}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111513] border border-[#242c28] focus:border-[#18b779] focus:outline-none text-xs text-white placeholder:text-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                    {lang === "en" ? "Company / Organization" : "Perusahaan / Instansi"}
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={lang === "en" ? "e.g. PT Telkom / BSI" : "Contoh: PT Telkom / BSI"}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#111513] border border-[#242c28] focus:border-[#18b779] focus:outline-none text-xs text-white placeholder:text-zinc-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-zinc-300 mb-1.5 font-medium">
                  {lang === "en" ? "Message / Internship Role" : "Pesan / Posisi Magang"}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === "en"
                      ? "Hi Nabil, we would love to invite you for an internship interview..."
                      : "Halo Nabil, kami tertarik mengundang Anda untuk diskusi posisi magang..."
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#111513] border border-[#242c28] focus:border-[#18b779] focus:outline-none text-xs text-white placeholder:text-zinc-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-[#16a36a] hover:bg-[#138a59] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{lang === "en" ? "Compose Email" : "Kirim Pesan Email"}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-14 pt-6 border-t border-[#1e2421] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © 2026 {PROFILE_DATA.name}.{" "}
            {lang === "en"
              ? "Computer Engineering Technology, IPB University."
              : "Teknologi Rekayasa Komputer, IPB University."}
          </p>
          <p className="font-mono text-[11px] text-zinc-500">
            IoT & Embedded • Cisco Networking (CCNA) • IT Infrastructure
          </p>
        </div>
      </div>
    </footer>
  );
}
