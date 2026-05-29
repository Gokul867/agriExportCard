import {
  Instagram,
  MessageCircle,
  MoveRight
} from 'lucide-react'
import { useState } from "react";
import SectionTitle from '../SectionTitle'

import { contactCards } from '../../data/content'
import { FileText, Globe2 } from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    commodityInterest: "",
    inquiryDetails: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: "",
      error: "",
    });

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            company: formData.company,
            email: formData.email,
            commodityInterest: formData.commodityInterest,
            inquiryDetails: formData.inquiryDetails,
            source: "website-contact-form",
            submittedAt: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus({
        loading: false,
        success: "Your inquiry has been sent successfully.",
        error: "",
      });

      setFormData({
        fullName: "",
        company: "",
        email: "",
        commodityInterest: "",
        inquiryDetails: "",
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: "Unable to send inquiry right now. Please try again.",
      });
    }
  };
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
            <SectionTitle
            eyebrow="Contact"
            title="Connect with us for agricultural sourcing, supply, and trade inquiries."
            />
            <div className="mt-8 space-y-4">
            {contactCards.map((item) => {
                const Icon = item.icon
                return (
                <div key={item.label} className="flex min-h-11 items-center gap-4 rounded-[1.25rem] border border-forest/10 bg-white px-5 py-4 shadow-soft">
                    <div className="rounded-xl bg-sand p-3 text-forest"><Icon size={20} /></div>
                    <div>
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="text-sm text-ink/70">{item.value}</p>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
        <div className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-soft md:p-8">
            <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-ink">
                    Full name
                    <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="min-h-11 rounded-2xl border border-forest/10 bg-cream px-4 py-3 outline-none transition focus:border-forest/40"
                    />
                </label>

                <label className="grid gap-2 text-sm font-medium text-ink">
                    Company
                    <input
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="min-h-11 rounded-2xl border border-forest/10 bg-cream px-4 py-3 outline-none transition focus:border-forest/40"
                    />
                </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-ink">
                    Email
                    <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="min-h-11 rounded-2xl border border-forest/10 bg-cream px-4 py-3 outline-none transition focus:border-forest/40"
                    />
                </label>

                <label className="grid gap-2 text-sm font-medium text-ink">
                    Commodity interest
                    <input
                    name="commodityInterest"
                    type="text"
                    value={formData.commodityInterest}
                    onChange={handleChange}
                    placeholder="Rice, spices, pulses..."
                    className="min-h-11 rounded-2xl border border-forest/10 bg-cream px-4 py-3 outline-none transition focus:border-forest/40"
                    />
                </label>
                </div>

                <label className="grid gap-2 text-sm font-medium text-ink">
                Inquiry details
                <textarea
                    name="inquiryDetails"
                    rows="5"
                    value={formData.inquiryDetails}
                    onChange={handleChange}
                    placeholder="Share quantity, destination market, and packaging needs"
                    required
                    className="rounded-[1.5rem] border border-forest/10 bg-cream px-4 py-3 outline-none transition focus:border-forest/40"
                />
                </label>

                <button
                type="submit"
                disabled={status.loading}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-moss disabled:cursor-not-allowed disabled:opacity-70"
                >
                {status.loading ? "Sending..." : "Send business inquiry"}
                <MoveRight size={16} />
                </button>

                {status.success && (
                <p className="text-sm font-medium text-green-700">{status.success}</p>
                )}

                {status.error && (
                <p className="text-sm font-medium text-red-700">{status.error}</p>
                )}
            <div className="mt-2 border-t border-forest/10 pt-5">
                <p className="text-sm font-semibold text-ink">Quick connect</p>

                <div className="mt-4 flex flex-wrap gap-3">
                <a
                    href="https://wa.me/919025291577?text=Hello%20RK%20Import%20Exports%2C%20I%20want%20to%20enquire%20about%20your%20commodities."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle size={18} />
                    WhatsApp
                </a>
                </div>

                <p className="mt-4 text-sm text-ink/65">
                We respond within 4 business hours · All enquiries are confidential
                </p>
            </div>
            </form>
        </div>
        </div>
        <div className="mt-10 rounded-[2rem] border border-forest/10 bg-sand p-6 md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-earth">
                    Legal & compliance
                </p>
                <h3 className="mt-20 text-5xl font-bold text-ink">
                    Certified and registered for agricultural trade with trusted compliance credentials supporting sourcing, supply, and export operations.
                </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                    {/* GSTIN */}
                    <div className="rounded-[1.25rem] bg-white px-5 py-5 shadow-soft">
                        <div className="flex justify-center">
                            <img
                                src="/logos/gst.png"
                                alt="GST Logo"
                                className="mb-1 h-30 w-auto object-contain"
                            />
                        </div>

                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                        GSTIN
                        </p>

                        <p className="mt-2 text-sm text-ink">
                        33FOAPR3055B1ZC
                        </p>
                    </div>

                    {/* IEC */}
                    <div className="rounded-[1.25rem] bg-white px-5 py-5 shadow-soft">
                        <div className="flex justify-center">
                            <img
                                src="/logos/iec.png"
                                alt="IEC Logo"
                                className="mb-2.5 h-30 w-auto object-contain"
                            />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                        IEC Code
                        </p>
                        <p className="mt-2 text-sm text-ink">
                        FOAPR3055B
                        </p>
                    </div>

                    {/* APEDA */}
                    <div className="rounded-[1.25rem] bg-white px-5 py-5 shadow-soft">
                        <div className="flex justify-center">
                            <img
                                src="/logos/apeda.png"
                                alt="APEDA Logo"
                                className="mb-6 h-30 w-auto object-contain"
                            />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                        APEDA RCMC
                        </p>
                        <p className="mt-2 text-sm text-ink">
                        APEDA/29846/2026-2027
                        </p>
                    </div>

                    {/* MSME */}
                    <div className="rounded-[1.25rem] bg-white px-5 py-5 shadow-soft">
                        <div className="flex justify-center">
                            <img
                                src="/logos/msme.png"
                                alt="MSME Logo"
                                className="mb-1 h-30 w-auto object-contain"
                            />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                        MSME
                        </p>
                        <p className="mt-2 text-sm text-ink">
                        UDYAM-TN-02-0328013
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}