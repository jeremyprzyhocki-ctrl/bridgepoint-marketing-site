import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, Zap, Send, Loader2, Sparkles, Star, ArrowRight, MessageSquare, 
  User, Building2, Mail, Eye, Edit3, Save, Wand2, FileSearch, X, Clock, Globe, Shield, BarChart3
} from 'lucide-react';

// --- PRODUCTION CONFIG ---
const HUB_PORTAL_ID = "244649678";
const HUB_FORM_ID = "c08a8f4e-d90e-443c-8c9a-3c2797dda522";

// --- THEME CONSTANTS ---
const THEME = {
  primary: "#2563EB",      // Bridgepoint Blue
  secondary: "#0F172A",    // Midnight Slate
  accent: "#6366F1",       // Indigo
  bgLight: "#F8FAFC",
  success: "#10B981"
};

// --- HELPER: HUBSPOT API ---
const submitToHubSpot = async (formData) => {
  const endpoint = `https://api-na2.hsforms.com/submissions/v3/integration/submit/${HUB_PORTAL_ID}/${HUB_FORM_ID}`;
  
  const payload = {
    fields: [
      { name: "firstname", value: formData.firstname },
      { name: "email", value: formData.email },
      { name: "company", value: formData.company },
      { name: "message", value: formData.message }
    ],
    context: {
      pageUri: window.location.href,
      pageName: document.title
    }
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    return res.ok;
  } catch (err) {
    return false;
  }
};

export default function App() {
  const [isEditor, setIsEditor] = useState(false);
  const [status, setStatus] = useState('idle');
  const [content, setContent] = useState({
    brandName: "Bridgepoint Marketing",
    heroTitle: "Stop Losing Leads to a Weak Website.",
    heroSubtitle: "We build high-performance engines for service businesses. Zero tech headaches. Just growth.",
    heroCta: "Launch My Lead Engine",
    contactTitle: "Hey, I heard your business is looking for more leads...",
    contactSubtitle: "Building lead engines is basically the only thing I'm good at. Let's talk.",
    contactSubmitBtn: "Get My Free Strategy Audit",
    contactSuccessTitle: "Bat-Signal Received! 🚀",
    contactSuccessBody: "I'm diving into your market data right now. Keep your phone handy—I'll be reaching out within the hour.",
  });

  const updateContent = (key, val) => setContent(prev => ({ ...prev, [key]: val }));

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* 1. STICKY NAV */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"><Zap size={20} fill="currentColor" /></div>
            <span>{content.brandName}</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#benefits" className="text-slate-600 hover:text-blue-600 font-medium">Benefits</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:shadow-lg transition">Get Started</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO (Paid Traffic Landing Spot) */}
      <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
            <Sparkles size={14} /> New for 2026: Managed Lead Engines
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight max-w-4xl mx-auto">
            {content.heroTitle}
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
            {content.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-200 hover:scale-105 transition-all">
              {content.heroCta}
            </a>
          </div>
        </div>
      </section>

      {/* 3. TRUST SIGNALS (Organic SEO Value) */}
      <section id="benefits" className="py-20 px-6 border-y border-slate-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { icon: <Clock />, title: "1-Hour Response", desc: "Speed to lead is everything. We respond before your competitors even see the notification." },
            { icon: <Shield />, title: "Fully Managed", desc: "Hosting, security, and updates. We handle the tech so you can handle the new business." },
            { icon: <BarChart3 />, title: "Conversion First", desc: "Built with sales psychology to ensure strangers turn into high-value clients." }
          ].map((item, i) => (
            <div key={i} className="group p-8 rounded-3xl hover:bg-slate-50 transition-colors">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE ENGINE (Contact Form) */}
      <section id="contact" className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{content.contactTitle}</h2>
            <p className="text-xl text-slate-400 mb-12 font-medium">{content.contactSubtitle}</p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400"><Globe size={20} /></div>
                <span className="font-bold">Based in Morristown, NJ</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-blue-400"><Mail size={20} /></div>
                <span className="font-bold">Direct Line: jeremy@bridgepointms.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] text-slate-900 shadow-2xl">
            {status === 'success' ? (
              <SuccessState content={content} />
            ) : (
              <form onSubmit={async (e) => {
                e.preventDefault();
                setStatus('sending');
                const data = Object.fromEntries(new FormData(e.target));
                const ok = await submitToHubSpot(data);
                setStatus(ok ? 'success' : 'idle');
              }} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Input label="Your Name" name="firstname" />
                  <Input label="Business" name="company" />
                </div>
                <Input label="Work Email" name="email" type="email" />
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">Project Goals</label>
                  <textarea name="message" required rows="4" className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 transition-all"></textarea>
                </div>
                <button disabled={status === 'sending'} className="w-full py-5 bg-blue-600 text-white font-black text-xl rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all flex items-center justify-center gap-3">
                  {status === 'sending' ? <Loader2 className="animate-spin" /> : content.contactSubmitBtn}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center text-slate-400 font-bold text-xs uppercase tracking-[0.3em]">
        &copy; {new Date().getFullYear()} {content.brandName} • Digital Marketing & Web Design Agency
      </footer>

      {/* EDITOR CONTROLS (Only visible in dev) */}
      <EditorControls isEditor={isEditor} setIsEditor={setIsEditor} />
    </div>
  );
}

// --- SUB-COMPONENTS ---
const Input = ({ label, name, type = "text" }) => (
  <div className="space-y-2">
    <label className="text-xs font-black uppercase text-slate-400 ml-1">{label}</label>
    <input name={name} type={type} required className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 transition-all" />
  </div>
);

const SuccessState = ({ content }) => (
  <div className="text-center py-10 animate-in zoom-in duration-500">
    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><Check size={40} /></div>
    <h3 className="text-3xl font-black mb-4">{content.contactSuccessTitle}</h3>
    <p className="text-slate-500 font-medium leading-relaxed">{content.contactSuccessBody}</p>
  </div>
);

const EditorControls = ({ isEditor, setIsEditor }) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex bg-slate-900 text-white p-2 rounded-2xl shadow-2xl border border-slate-700">
    <button onClick={() => setIsEditor(false)} className={`flex items-center gap-2 px-6 py-2 rounded-xl transition ${!isEditor ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
      <Eye size={18} /> <span className="font-bold">Preview</span>
    </button>
    <button onClick={() => setIsEditor(true)} className={`flex items-center gap-2 px-6 py-2 rounded-xl transition ${isEditor ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
      <Edit3 size={18} /> <span className="font-bold">Editor</span>
    </button>
  </div>
);
