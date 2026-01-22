import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const PricingCard = ({ tier, price, features, highlight = false }) => (
  <div className={`p-8 rounded-2xl border ${highlight ? 'border-[#FF4500] ring-2 ring-[#FF4500]' : 'border-slate-800'} bg-[#001529] text-white flex flex-col h-full`}>
    <h3 className="text-xl font-bold mb-2">{tier}</h3>
    <div className="text-4xl font-bold mb-6">${price}<span className="text-sm font-normal text-slate-400">/mo</span></div>
    <ul className="space-y-4 mb-8 flex-grow text-slate-300">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 className="text-[#FF4500] w-5 h-5 mt-1 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-lg font-bold transition ${highlight ? 'bg-[#FF4500] hover:bg-orange-700' : 'bg-white text-[#002147] hover:bg-slate-200'}`}>
      Get Started
    </button>
  </div>
);

export default function App() {
  return (
    <div className="bg-[#002147] min-h-screen font-sans text-white">
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-black italic tracking-tighter">BRIDGEPOINT</div>
        <button className="bg-white text-[#002147] px-5 py-2 rounded-full font-bold text-sm">Contact Us</button>
      </nav>
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Fast Websites. <br/><span className="text-[#FF4500]">Faster Leads.</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">Professional React apps for NJ businesses with built-in Omni-Channel routing.</p>
      </section>
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-8">
        <PricingCard tier="Starter" price="50" features={["React App", "Cloud Hosting", "Standard Lead-Sync", "Domain Management"]} />
        <PricingCard tier="Professional" price="99" highlight={true} features={["Everything in Starter", "Omni-Channel Alerts", "CRM Integration", "Priority 24/7 Support"]} />
        <PricingCard tier="Scale" price="199" features={["Everything in Professional", "Workflow Automation", "Custom API Access", "Performance Analytics"]} />
      </section>
    </div>
  );
}
