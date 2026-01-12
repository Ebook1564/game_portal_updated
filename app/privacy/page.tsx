"use client";

import { useState } from "react";
import Navbar from "@/app/components/Navbar";
import MobileSidebar from "@/app/components/MobileSidebar";
import { Footer_on_page } from "@/app/components/Footeronpage";

export default function PrivacyPolicyPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.1),transparent_35%)]" />

      <Navbar onOpenSidebar={() => setMobileSidebarOpen(true)} />
      <MobileSidebar open={mobileSidebarOpen} onClose={() => setMobileSidebarOpen(false)} />

      <main className="relative z-10 mx-auto max-w-5xl px-6 pb-24 pt-32">

        {/* Header */}
        <div className="mb-12 space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">
            Legal Transparency
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400">
            Effective Date: January 9, 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-10 rounded-3xl border border-white/5 bg-white/5 p-8 md:p-12 backdrop-blur-xl leading-relaxed text-slate-300">

          <div className="space-y-4">
            <p>
              This privacy policy ("Policy") describes the data practices of
              SnappGames ("we," "us," or "Company"), an HTML5 web-based game portal,
              and its services including this website and games (collectively
              "Services"). By using the Services, you consent to this Policy and
              processing of your data as described, in compliance with the Digital
              Personal Data Protection Act, 2023 (DPDPA), Information Technology
              Act, 2000 (as amended), and related Indian rules.
            </p>

            <p>
              As your Data Fiduciary under DPDPA, we process data only with free,
              specific, informed, unconditional, and unambiguous consent. If you
              do not agree, please do not use the Services.
            </p>
          </div>

          {/* Information We Collect */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Information We Collect
            </h2>

            <p>
              We collect Personal Data necessary for Platform operation
              including username, email (registered users), IP address, device
              ID, browser type, cookies, approximate location, gameplay logs,
              and session data.
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong className="text-white">Account and Registration Data:</strong> Username, email
                address, and password hash (never stored in plain text).
              </li>
              <li>
                <strong className="text-white">Gameplay and Session Data:</strong> Session duration,
                levels completed, scores, leaderboards, and achievements.
              </li>
              <li>
                <strong className="text-white">Technical Identifiers:</strong> IP address, browser
                type/version, user agent, screen resolution, and time zone.
              </li>
              <li>
                <strong className="text-white">Advertising and Analytics Identifiers:</strong> Device
                identifiers and advertising IDs (Google AdSense/AdMob, Google
                Analytics) where consented.
              </li>
              <li>
                <strong className="text-white">Usage Interaction Data:</strong> Clicks, navigation
                paths, searches, and ad interactions.
              </li>
              <li>
                <strong className="text-white">Support and Feedback Data:</strong> Communications,
                timestamps, and related account information.
              </li>
            </ul>

            <p>
              Categories of Personal Data under DPDPA include identifiers,
              gameplay logs, device information, and usage patterns. We do not
              knowingly process children's data (under 18) without verifiable
              parental consent.
            </p>
          </section>

          {/* Use of Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              How We Use Information We Collect
            </h2>
            <p>
              As Data Fiduciary under the DPDPA, SnappGames processes Personal
              Data solely for specified, legitimate purposes with explicit user
              consent or lawful basis. Processing adheres to principles of
              purpose limitation, data minimization, and storage limitation.
            </p>
          </section>

          {/* Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Sharing and Disclosure
            </h2>

            <p>We share data only for limited purposes:</p>

            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Analytics providers (aggregated logs only)</li>
              <li>Hosting and infrastructure service providers</li>
              <li>Legal authorities on valid request</li>
              <li>Game partners via controlled APIs</li>
            </ul>

            <p>
              Personal Data sharing occurs only upon explicit, granular user
              consent and remains fully revocable via platform controls or by
              contacting <strong className="text-indigo-400">privacy@snappgames.com</strong>.
            </p>
          </section>

          {/* Data Processors */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              External Processing by Data Processors
            </h2>
            <p>
              All Data Processors operate under DPDPA-compliant agreements
              mandating confidentiality, security controls, breach notification,
              audit rights, and prohibition of unauthorized reuse.
            </p>
          </section>

          {/* Legal Disclosure */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Legally Compelled Disclosures
            </h2>
            <p>
              Disclosures to authorities occur only under valid legal process
              and are logged, reviewed, and auditable.
            </p>
          </section>

          {/* Transfers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Aggregated Data & Cross-Border Transfers
            </h2>
            <p>
              Aggregated and anonymized data may be shared for analytics.
              Primary data storage is localized in India (AWS Mumbai). Any
              cross-border transfers comply with DPDPA safeguards.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Cookies and Tracking
            </h2>
            <p>
              We use cookies, pixels, and similar technologies for essential
              functionality, performance optimization, analytics, and
              consented advertising.
            </p>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Data Security and Retention
            </h2>
            <p>
              SnappGames implements enterprise-grade security measures aligned
              with ISO 27001, SOC 2 Type II, and DPDPA standards.
            </p>
          </section>

          {/* Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Accessing and Updating Your Information
            </h2>
            <p>
              Users may request access, correction, or deletion of Personal
              Data by contacting <strong className="text-indigo-400">privacy@snappgames.com</strong>.
              Identity verification may be required.
            </p>
          </section>

          {/* Changes */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Changes to Policy
            </h2>
            <p>
              We may update this Policy periodically. Changes will be posted
              on this page with an updated effective date.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4 pt-10 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white">
              Contact Us
            </h2>
            <p>
              For questions, concerns, or grievances regarding this Policy,
              contact us at <strong className="text-indigo-400">privacy@snappgames.com</strong>.
            </p>
          </section>

        </div>
      </main>

      <Footer_on_page />
    </div>
  )
}
