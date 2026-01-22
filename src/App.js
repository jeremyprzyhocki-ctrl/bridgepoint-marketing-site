import React, { useState, useEffect } from 'react';
import { Check, Zap, Send, Loader2, Sparkles, Star, ArrowRight, MessageSquare, User, Building2, Mail, Eye, Edit3, Save, Wand2, FileSearch, X } from 'lucide-react';

// --- PRODUCTION CONFIG ---
const HUB_PORTAL_ID = "244649678";
const HUB_FORM_ID = "c08a8f4e-d90e-443c-8c9a-3c2797dda522";

export default function App() {
  const [isEditor, setIsEditor] = useState(false);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'
  
  const [content, setContent] = useState({
    brandName: "Bridgepoint Marketing",
    contactTitle: "Hey, I heard your business is looking for more leads...",
    contactSubtitle: "Building lead engines is basically the only thing I'm good at. Let's talk.",
    contactSubmitBtn: "Send My Request",
    contactSuccessTitle: "Success! Bat-signal received. 🚀",
    contactSuccessBody: "Check your inbox. I'm diving into your market data now and will reach out within the hour.",
    // Default Hero Content
    heroTitle: "Stop Losing Leads to a Weak Website.",
    heroSubtitle: "We build high-performance engines for service businesses. Zero headaches. Just growth.",
    heroPrimaryCta: "Launch My Lead Engine",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditor) return;

    setStatus('sending');
    const formData = new FormData(e.target);
    
    // HubSpot v3 API Submission
    const payload = {
      fields: [
        { name: "firstname", value: formData.get('firstname') },
        { name: "email", value: formData.get('email') },
        { name: "company", value: formData.get('company') },
        { name: "message", value: formData.get('message') }
      ],
      context: {
        pageUri: window.location.href,
        pageName: "Bridgepoint Lead Engine Template"
      }
    };

    try {
      const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUB_PORTAL_ID}/${HUB_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setStatus('success');
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setStatus('idle');
      alert("Connectivity issue. Please try again!");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white"><Zap size={20} fill="currentColor" /></div>
            <span>{content.brandName}</span>
          </div>
          <div className="hidden md:flex gap-8 items-center font-medium text-slate-600">
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-black leading-tight mb-6">{content.heroTitle}</h1>
            <p className="text-xl text-slate-500 mb-10">{content.heroSubtitle}</p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-xl shadow-xl shadow-blue-100 flex items-center gap-2">
              {content.heroPrimaryCta} <ArrowRight size={20} />
            </button>
          </div>
          <div className="bg-slate-100 rounded-[3rem] aspect-square relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
             {/* Placeholder for your high-res dashboard image */}
             <div className="flex items-center justify-center h-full text-slate-400 font-bold">Engine Preview</div>
          </div>
        </div>
      </section>

      {/* Contact Form Section (The HubSpot Engine) */}
      <section id="contact" className="py-24 bg-slate-50 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative">
            
            {status === 'success' ? (
              <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <Check size={40} strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black mb-4">{content.contactSuccessTitle}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{content.contactSuccessBody}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-blue-600 font-bold hover:underline">Send another message</button>
              </div>
            ) : (
              <>
                <div className="mb-10">
                   <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-black mb-6 border border-blue-100">
                      <MessageSquare size={16} /> Strategy Session
                   </div>
                   <h2 className="text-4xl font-black text-slate-900 leading-tight">{content.contactTitle}</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</label>
                      <input name="firstname" required placeholder="John Doe" className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Company</label>
                      <input name="company" required placeholder="Your Business" className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                    <input name="email" type="email" required placeholder="name@company.com" className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">What's the goal?</label>
                    <textarea name="message" rows="4" placeholder="I need more calls for my plumbing business..." className="w-full p-4 rounded-2xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-blue-600 focus:bg-white transition-all"></textarea>
                  </div>
                  
                  <button 
                    disabled={status === 'sending'}
                    type="submit" 
                    className="w-full py-5 bg-blue-600 text-white font-black text-xl rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {status === 'sending' ? <Loader2 className="animate-spin" /> : <><Send size={20} /> {content.contactSubmitBtn}</>}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Editor/Preview Toggle (Fixed Bottom) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex bg-slate-900 text-white p-2 rounded-2xl shadow-2xl border border-slate-700">
        <button onClick={() => setIsEditor(false)} className={`flex items-center gap-2 px-6 py-2 rounded-xl transition ${!isEditor ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
          <Eye size={18} /> <span className="font-bold">Preview</span>
        </button>
        <button onClick={() => setIsEditor(true)} className={`flex items-center gap-2 px-6 py-2 rounded-xl transition ${isEditor ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>
          <Edit3 size={18} /> <span className="font-bold">Editor</span>
        </button>
      </div>
    </div>
  );
}
