/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HERO_BG_URL, CRANE_ACTION_URL, SERVICES, TESTIMONIALS } from '../data';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  onOpenQuoteModal: (prefilledService?: string) => void;
}

export default function HomeView({ setCurrentTab, onOpenQuoteModal }: HomeViewProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Statistics counter animations
  const [stats, setStats] = useState({
    projects: 120,
    capacity: 10,
    support: 12,
    experience: 2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        projects: prev.projects < 500 ? prev.projects + 19 : 500,
        capacity: prev.capacity < 25 ? prev.capacity + 1 : 25,
        support: prev.support < 24 ? prev.support + 1 : 24,
        experience: prev.experience < 10 ? prev.experience + 1 : 10
      }));
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex items-center py-16 text-white overflow-hidden bg-primary">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            alt="Macara galbenă masivă pe șantier de construcții" 
            className="w-full h-full object-cover opacity-45" 
            src={HERO_BG_URL}
            referrerPolicy="no-referrer"
          />
          {/* High-quality overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-start gap-6">
          <span className="bg-safety-yellow text-primary font-sans font-extrabold text-xs tracking-wider uppercase px-4 py-1.5 border border-primary shadow-[2px_2px_0px_rgba(24,31,33,1)]">
            Lider în Închirieri Macarale
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter uppercase max-w-3xl">
            RIDICĂRI GRELE <br/>
            <span className="text-safety-yellow">FĂRĂ LIMITE</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-surface-container-high max-w-xl leading-relaxed font-light">
            Echipăm șantierele Moldovei cu puterea flotei <strong className="font-semibold text-safety-yellow">XCMG XCT25</strong>. Soluții de ridicare sigure, precise și eficiente pentru orice provocare structurală sau industrială.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
            <button 
              onClick={() => onOpenQuoteModal()}
              className="bg-safety-yellow text-primary font-sans font-bold text-xs tracking-wider uppercase px-8 py-4 border-2 border-transparent hover:bg-white hover:text-primary active:translate-y-[2px] duration-150 transition-all flex items-center justify-center gap-2 industrial-shadow shadow-white/10"
            >
              SOLICITĂ OFERTĂ
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button 
              onClick={() => {
                setCurrentTab('servicii');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-transparent text-white font-sans font-bold text-xs tracking-wider uppercase px-8 py-4 border-2 border-white hover:bg-white hover:text-primary active:translate-y-[2px] duration-150 transition-all flex items-center justify-center gap-2"
            >
              VEZI FLOTA
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR SECTION */}
      <section className="bg-[#111111] py-10 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-display text-4xl md:text-5xl font-extrabold text-safety-yellow">
              {stats.projects}+
            </span>
            <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">
              Proiecte Finalizate
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-display text-4xl md:text-5xl font-extrabold text-safety-yellow">
              {stats.capacity}T
            </span>
            <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">
              Capacitate Max.
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-display text-4xl md:text-5xl font-extrabold text-safety-yellow">
              {stats.support}/7
            </span>
            <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">
              Suport Tehnic
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <span className="font-display text-4xl md:text-5xl font-extrabold text-safety-yellow">
              {stats.experience}
            </span>
            <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">
              Ani Experiență
            </span>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE / SERVICES SECTION */}
      <section className="py-24 bg-[#0A0A0A] max-w-7xl mx-auto px-6 md:px-16 flex flex-col gap-12">
        <div className="flex flex-col gap-3 border-l-4 border-safety-yellow pl-4">
          <h2 className="font-display text-3xl font-extrabold text-white uppercase tracking-tighter">
            Expertiza Noastră
          </h2>
          <p className="font-sans text-sm text-gray-400 max-w-xl">
            Oferim soluții complete de ridicare și transport greu pentru construcții civile și industriale, operate exclusiv de personal tehnic autorizat ISCIR.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((srv) => (
            <div 
              key={srv.id}
              className="bg-[#141414] border border-[#222222] p-8 flex flex-col gap-6 relative overflow-hidden rounded-2xl group hover:border-[#333333] transition-all"
            >
              <div className="bg-[#1A1A1A] p-4 w-max text-safety-yellow rounded-lg border border-[#222222]">
                <span className="material-symbols-outlined text-3xl">
                  {srv.icon}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold text-white uppercase">
                  {srv.title}
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  {srv.description}
                </p>
              </div>
              <button 
                onClick={() => {
                  setCurrentTab('servicii');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-auto font-sans font-bold text-xs text-safety-yellow uppercase flex items-center gap-2 hover:text-white transition-colors self-start"
              >
                Detalii Serviciu 
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREF_EQUIPMENT BLOCK (XCMG XCT25 showcase) */}
      <section className="bg-[#0D0D0D] py-20 border-t border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Showcase */}
          <div className="relative group overflow-hidden border border-[#222222] rounded-2xl shadow-xl">
            <img 
              alt="Macara XCMG XCT25 pe șantier" 
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105" 
              src={CRANE_ACTION_URL}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-primary text-safety-yellow font-sans font-bold text-[10px] tracking-wider uppercase px-4 py-1.5 border border-[#333333] rounded">
              ECHIPAMENT PREMIUM
            </div>
          </div>

          {/* Technical Details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-safety-yellow text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                precision_manufacturing
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-white uppercase">
                XCMG XCT25
              </h2>
            </div>
            <p className="font-sans text-xs text-gray-400 leading-relaxed">
              Automacara de ultimă generație, proiectată pentru eficiență maximă în medii urbane și industriale restrânse. Performanță ridicată, siguranță optimizată prin senzori automați de sarcină și precizie milimetrică în manevrare.
            </p>

            {/* Micro spec table */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-[#222222] py-6 text-xs">
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 uppercase font-medium text-[10px] tracking-wider">CAPACITATE MAXIMĂ</span>
                <span className="font-bold text-white text-sm">25 Tone</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 uppercase font-medium text-[10px] tracking-wider">LUNGIME BRAȚ TELESCOPIC</span>
                <span className="font-bold text-white text-sm">34 m</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 uppercase font-medium text-[10px] tracking-wider">LUNGIME CU PRELUNGITOR</span>
                <span className="font-bold text-white text-sm">42.3 m</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 uppercase font-medium text-[10px] tracking-wider">TRACȚIUNE ȘASIU</span>
                <span className="font-bold text-white text-sm">6x4 Greu</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                onClick={() => onOpenQuoteModal("Închiriere Automacarale (XCMG XCT25)")}
                className="bg-safety-yellow text-primary font-sans font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-lg border border-transparent hover:bg-white hover:text-primary active:translate-y-[2px] transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/5"
              >
                REZERVĂ ECHIPAMENTUL
              </button>
              <button 
                onClick={() => {
                  setCurrentTab('calculator');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-transparent border border-[#333333] text-white hover:bg-[#111111] hover:border-gray-500 rounded-lg font-sans font-bold text-xs tracking-wider uppercase px-6 py-4 transition-all flex items-center justify-center gap-2"
              >
                VERIFICĂ CAPACITATE
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#0A0A0A] border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col gap-8 items-center">
          <span className="material-symbols-outlined text-5xl text-safety-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>
            format_quote
          </span>
          <h2 className="font-display text-2xl font-extrabold text-white uppercase tracking-tighter">
            Ce Spun Partenerii Noștri
          </h2>

          <div className="relative min-h-[180px] flex items-center justify-center">
            <div className="transition-all duration-500 animate-in fade-in zoom-in-95">
              <p className="font-sans text-xs md:text-sm text-gray-300 italic leading-relaxed max-w-2xl mx-auto">
                "{TESTIMONIALS[activeTestimonial].text}"
              </p>
              <h4 className="font-sans font-bold text-xs text-white mt-4 uppercase">
                {TESTIMONIALS[activeTestimonial].author}
              </h4>
              <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                {TESTIMONIALS[activeTestimonial].company}
              </p>
            </div>
          </div>

          {/* Testimonial toggler controls */}
          <div className="flex gap-4">
            <button 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-[#222222] bg-[#111111] hover:bg-[#1A1A1A] hover:border-[#333333] text-white transition-all rounded-lg flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
            </button>
            <button 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-[#222222] bg-[#111111] hover:bg-[#1A1A1A] hover:border-[#333333] text-white transition-all rounded-lg flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION CONTAINER */}
      <section className="bg-[#111111] py-24 text-white text-center relative overflow-hidden border-b border-[#222222]">
        {/* subtle geometric micro grid */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F59E0B 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase tracking-tight max-w-2xl">
            GATA SĂ RIDICĂM PROIECTUL TĂU?
          </h2>
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-xl leading-relaxed">
            Contactați dispeceratul nostru tehnic chiar astăzi pentru a primi consultanță gratuită, diagrame de sarcină specifice și o ofertă personalizată adaptată perfect șantierului dumneavoastră.
          </p>
          <button 
            onClick={() => onOpenQuoteModal()}
            className="bg-safety-yellow text-primary font-sans font-bold text-xs tracking-wider uppercase px-10 py-5 rounded-lg hover:bg-white hover:text-primary transition-all active:translate-y-[2px]"
          >
            SOLICITĂ OFERTĂ ACUM
          </button>
        </div>
      </section>

    </div>
  );
}
