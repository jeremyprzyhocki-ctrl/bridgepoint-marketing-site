import React, { useState, useEffect } from 'react';
import { 
  Check, Zap, Send, Loader2, Sparkles, ArrowRight, 
  Clock, Globe, Shield, BarChart3, Target, Layers, Rocket, ChevronRight
} from 'lucide-react';

// --- PRODUCTION CONFIG ---
const HUB_PORTAL_ID = "244649678";
const HUB_FORM_ID = "c08a8f4e-d90e-443c-8c9a-3c2797dda522";

export default function App() {
  const [status, setStatus] = useState('idle');

  // Page Title & Meta (For Organic SEO)
  useEffect(() => {
    document.title = "Bridgepoint Marketing Solutions | High-Performance Web Design Morristown";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    
    const payload = {
      fields: [
        { name: "firstname", value: formData.get('firstname') },
        { name: "email", value: formData.get('email') },
        { name: "company", value: formData.get('company') },
        { name: "message", value: formData.get('message') }
      ],
      context: {
        pageUri: window.location.href,
        pageName: "Bridgepoint Production Landing Page"
      }
    };

    try {
      const res = await fetch(`https://api-na2.hsforms.com/submissions/v3/integration/submit/${HUB_PORTAL_ID}/${HUB_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) setStatus('success');
      else throw new Error();
    } catch (err) {
      setStatus('idle');
      alert("Submission error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      
      {/* 1. NAV: Ultra-Premium */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-5 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 text-2xl font-black tracking-tighter">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Zap size={24} fill="currentColor" />
            </div>
            <span>BRIDGEPOINT</span>
          </div>
          <div className="hidden md:flex gap-10 items-center font-bold text-xs uppercase tracking-widest text-slate-500">
            <a href="#process" className="hover:text-blue-600 transition">The Engine</a>
            <a href="#contact" className="bg-slate-900 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition shadow-xl shadow-slate-200">Request Audit</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO: Built for Paid Ads (Google/FB) */}
      <section className="pt-48 pb-32 px-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#eff6ff_0%,_transparent_70%)] -z-10"></div>
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-blue-100">
            <Sparkles size={14} /> Managed Lead Generation for Service Businesses
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 mb-8 leading-[0.9] tracking-tight">
            Stop Buying Leads. <br/><span className="text-blue-600">Start Owning Them.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            We build and manage high-performance web engines for service businesses. No tech headaches. Just a 24/7 sales machine that delivers high-value clients.
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-2xl shadow-2xl shadow-blue-200 hover:-translate-y-1 transition-all flex items-center gap-3 group">
              Get Your Free Growth Audit <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 3. THE ENGINE: Authority-Driven Framework */}
      <section id="process" className="py-32 bg-slate-50 px-8">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">The Bridgepoint Method</h2>
          <p className="text-xl text-slate-500">A custom framework designed to dominate local service markets.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Target />, title: "Market Gap Analysis", desc: "We identify exactly where your local competitors are failing and where the highest intent leads are hiding." },
            { icon: <Layers />, title: "High-Performance Build", desc: "A fully managed, mobile-first system optimized for speed and conversion psychology. No bloated templates." },
            { icon: <Rocket />, title: "Continuous Growth", desc: "We handle hosting, security, and monthly optimizations. You focus on running your business." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group border border-slate-100">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">{item.icon}</div>
              <h3 className="text-2xl font-black mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CONVERSION: High-Trust HubSpot Engine */}
      <section id="contact" className="py-32 px-8 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Ready to Scale?</h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
              Join local businesses in **Morristown** and the surrounding areas who have ditched shared lead platforms for their own managed engine.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400"><Clock size={28} /></div>
                <div>
                  <div className="font-black text-xl text-white">60-Minute Response</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Direct Access to Jeremy</div>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-400"><Globe size={28} /></div>
                <div>
                  <div className="font-black text-xl text-white">Local Partner</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Based in Morristown, NJ</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[4rem] text-slate-900 shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"><Check size={48} strokeWidth={3} /></div>
                <h3 className="text-4xl font-black mb-4 text-slate-950">Audit Requested</h3>
                <p className="text-slate-500 text-lg font-medium leading-relaxed">I've received your request. I am currently reviewing your market data and will reach out personally within the hour.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                    <input name="firstname" required placeholder="Full Name" className="w-full p-5 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Business Name</label>
                    <input name="company" required placeholder="Company Name" className="w-full p-5 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Business Email</label>
                  <input name="email" type="email" required placeholder="name@email.com" className="w-full p-5 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Growth Goals</label>
                  <textarea name="message" required rows="4" placeholder="How can we help you grow?" className="w-full p-5 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 transition-all"></textarea>
                </div>
                <button type="submit" disabled={status === 'sending'} className="w-full py-6 bg-blue-600 text-white font-black text-2xl rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-100 transition-all flex items-center justify-center gap-3">
                  {status === 'sending' ? <Loader2 className="animate-spin" /> : "Start My Growth Audit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="py-20 bg-slate-50 text-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">
            &copy; 2026 BRIDGEPOINT MARKETING SOLUTIONS • MORRISTOWN, NJ
          </div>
          <p className="text-slate-300 text-[10px] font-bold">BUILT BY JEREMY PRZYHOCKI • HIGH PERFORMANCE ONLY.</p>
        </div>
      </footer>
    </div>
  );
}
