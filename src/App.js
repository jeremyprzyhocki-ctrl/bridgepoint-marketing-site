import React, { useState } from 'react';
import { CheckCircle2, Mail, Phone, MapPin, Globe, Layout, MessageSquare, Zap } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 bg-[#001529] rounded-xl border border-slate-800 transition hover:border-orange-500">
    <div className="bg-orange-500/10 p-3 rounded-full mb-4">
      <Icon className="text-orange-500 w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400 text-sm">{desc}</p>
  </div>
);

const PricingCard = ({ tier, price, features, highlight = false }) => (
  <div className={`p-8 rounded-2xl border ${highlight ? 'border-orange-500 ring-2 ring-orange-500' : 'border-slate-800'} bg-[#001529] text-white flex flex-col h-full transform transition hover:scale-105`}>
    <h3 className="text-xl font-bold mb-2">{tier}</h3>
    <div className="text-4xl font-bold mb-6">${price}<span className="text-sm font-normal text-slate-400">/mo</span></div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
          <CheckCircle2 className="text-orange-500 w-5 h-5 mt-0.5 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-bold transition ${highlight ? 'bg-orange-600 hover:bg-orange-700' : 'bg-white text-[#002147] hover:bg-slate-200'}`}>
      Get Started
    </button>
  </div>
);

export default function App() {
  return (
    <div className="bg-[#002147] min-h-screen font-sans text-white selection:bg-orange-500/30">
      {/* Navigation */}
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center sticky top-0 bg-[#002147]/80 backdrop-blur-md z-50">
        <div className="text-2xl font-black italic tracking-tighter">BRIDGEPOINT</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-orange-500 transition">Services</a>
          <a href="#pricing" className="hover:text-orange-500 transition">Pricing</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>
        <a href="tel:2012137666" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-full font-bold text-sm transition">
          Call 201-213-7666
        </a>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <span className="text-orange-500 font-bold tracking-widest text-xs uppercase mb-4 block">Marketing & Web Design Specialist</span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Websites Built for <br/><span className="text-orange-500 italic">NJ Small Businesses</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          High-performance React apps with built-in Omni-Channel routing to ensure you never miss a lead again.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-white text-[#002147] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition">Start Your Project</a>
          <a href="#services" className="border border-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition text-slate-300">View Services</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-800">
        <h2 className="text-3xl font-bold text-center mb-16">Expert Solutions for Growth</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature icon={Layout} title="Web Design" desc="Custom React applications optimized for mobile speed and high conversion rates." />
          <Feature icon={Zap} title="Lead Generation" desc="Automated systems that sync new leads directly to your phone and email instantly." />
          <Feature icon={MessageSquare} title="Social Media" desc="Strategic social media support to build your brand authority and reach." />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-24 bg-gradient-to-b from-[#001529] to-[#002147] rounded-3xl mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-slate-400">Everything you need to run your business online.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard tier="Starter" price="50" features={["Professional React App", "Managed Cloud Hosting", "Standard Lead-Sync", "Domain Management", "24/7 Support"]} />
          <PricingCard tier="Professional" price="99" highlight={true} features={["Everything in Starter", "Omni-Channel Lead Routing", "Unlimited SMS Alerts", "CRM Integration", "Priority Support"]} />
          <PricingCard tier="Scale" price="199" features={["Everything in Professional", "Automated Workflows", "Custom API Connections", "Monthly Analytics Reports", "Dedicated Specialist"]} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-8">Let's Build Something Great</h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-6">
            <p className="text-slate-400 leading-relaxed">Based in Morristown, NJ. Specializing in helping small businesses and nonprofits grow through digital innovation.</p>
            <div className="flex items-center gap-4 text-slate-300">
              <Phone className="text-orange-500 w-5 h-5" />
              <a href="tel:2012137666" className="hover:text-white transition">201-213-7666</a>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <MapPin className="text-orange-500 w-5 h-5" />
              <span>Morristown, NJ</span>
            </div>
          </div>
          <form className="space-y-4 bg-[#001529] p-8 rounded-2xl border border-slate-800">
            <input type="text" placeholder="Your Name" className="w-full bg-[#002147] border border-slate-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none" />
            <input type="email" placeholder="Email Address" className="w-full bg-[#002147] border border-slate-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none" />
            <textarea placeholder="Tell me about your project..." rows="4" className="w-full bg-[#002147] border border-slate-700 rounded-lg p-3 text-white focus:border-orange-500 outline-none"></textarea>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-bold transition flex items-center justify-center gap-2">
              Send Message <Zap className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 p-10 text-center">
        <div className="text-xl font-black italic tracking-tighter mb-4">BRIDGEPOINT</div>
        <p className="text-slate-500 text-sm">© 2026 Bridgepoint Marketing Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
