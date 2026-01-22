import React from 'react';
import { CheckCircle2, Zap, Clock, ShieldCheck, Phone, MapPin, Globe, Layout, Instagram, Facebook } from 'lucide-react';

const SuccessStory = ({ title, service, result, image, reverse = false }) => (
  <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center py-16 border-b border-slate-800`}>
    <div className="w-full md:w-1/2">
      <img src={image} alt={title} className="rounded-2xl shadow-2xl border border-slate-700 w-full object-cover h-64 md:h-96" />
    </div>
    <div className="w-full md:w-1/2 space-y-4">
      <h3 className="text-3xl font-bold text-orange-500">{title}</h3>
      <p className="text-xl font-semibold text-white">{service}</p>
      <p className="text-slate-400 leading-relaxed text-lg">{result}</p>
    </div>
  </div>
);

const PricingCard = ({ tier, price, features, highlight = false }) => (
  <div className={`p-8 rounded-2xl border ${highlight ? 'border-orange-500 ring-2 ring-orange-500' : 'border-slate-800'} bg-[#001529] flex flex-col h-full`}>
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
    <button className={`w-full py-3 rounded-lg font-bold transition ${highlight ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-white text-[#002147] hover:bg-slate-200'}`}>
      Get Started
    </button>
  </div>
);

export default function App() {
  return (
    <div className="bg-[#002147] min-h-screen font-sans text-white">
      {/* Navbar */}
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center sticky top-0 bg-[#002147]/90 backdrop-blur-sm z-50">
        <div className="text-2xl font-black italic tracking-tighter">BRIDGEPOINT</div>
        <a href="tel:2012137666" className="bg-orange-600 px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-orange-700 transition">
          <Phone size={16} /> 201-213-7666
        </a>
      </nav>

      {/* Hero */}
      <header className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Built for the <span className="text-orange-500 italic">Trade.</span></h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
          We build high-performance React systems for HVAC, Plumbers, and Accountants. Stop losing jobs to slow follow-ups.
        </p>
      </header>

      {/* Success Stories */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Proven Success</h2>
        
        <SuccessStory 
          title="JPP Accounting"
          service="Web Design • Email Marketing • Social Media"
          result="Full digital transformation for a professional CPA firm, ensuring brand authority across all social channels and consistent client communication through automated email marketing."
          image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
        />

        <SuccessStory 
          title="Seton Hall Softball"
          service="Registration Systems • Lead Gen • Digital Waivers"
          result="Streamlined complex camp registrations and sign-ups. We replaced manual paperwork with 100% digital waiver forms and automated lead generation for athletic programs."
          reverse={true}
          image="https://images.unsplash.com/photo-1593766788306-28561086694e?auto=format&fit=crop&q=80&w=800"
        />

        <SuccessStory 
          title="Rockaway Barbershop"
          service="Online Booking • Automation"
          result="Eliminated phone distractions by implementing a seamless online booking system. This change saved the owner 10+ hours a week, allowing them to focus entirely on their clients."
          image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800"
        />
      </section>

      {/* Service Pro Benefits */}
      <section className="bg-slate-900/50 py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <Zap className="mx-auto text-orange-500 mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">Speed-to-Lead</h4>
            <p className="text-slate-400">SMS alerts hit your phone the second a lead arrives. Respond in seconds, not hours.</p>
          </div>
          <div className="text-center">
            <Clock className="mx-auto text-orange-500 mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">10+ Hours Saved</h4>
            <p className="text-slate-400">Automate your bookings, registrations, and paperwork so you can stay on the job.</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto text-orange-500 mb-4" size={48} />
            <h4 className="text-xl font-bold mb-2">NJ Based Trust</h4>
            <p className="text-slate-400">We're in Morristown. We know the local market and the people you serve.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-8">
        <PricingCard tier="Starter" price="50" features={["React App", "Cloud Hosting", "Lead-Sync", "Domain Management"]} />
        <PricingCard tier="Professional" price="99" highlight={true} features={["Everything in Starter", "Omni-Channel Alerts", "Unlimited SMS Alerts", "CRM Integration"]} />
        <PricingCard tier="Scale" price="199" features={["Everything in Professional", "Automated Workflows", "Custom API Access", "Monthly Performance Reports"]} />
      </section>

      {/* Footer */}
      <footer className="bg-[#001529] pt-20 pb-10 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-2xl font-black italic tracking-tighter mb-4">BRIDGEPOINT</div>
            <p className="text-slate-400">Empowering NJ Service Professionals through digital automation and high-performance design.</p>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-lg">Contact Us</h5>
            <div className="flex items-center gap-3 text-slate-400">
              <Phone size={18} className="text-orange-500" /> 201-213-7666
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <MapPin size={18} className="text-orange-500" /> Morristown, NJ
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold text-lg">Follow Our Work</h5>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-orange-500 transition"><Instagram size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition"><Facebook size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-slate-600 text-sm border-t border-slate-800 pt-8">
          © 2026 Bridgepoint Marketing Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
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

