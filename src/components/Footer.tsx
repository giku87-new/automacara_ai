/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LOGO_URL } from '../data';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
}

export default function Footer({ setCurrentTab }: FooterProps) {
  const handleLinkClick = (tabId: string) => {
    setCurrentTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary border-t border-[#222222] w-full py-16 text-white font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-gradient-to-tr from-amber-500 to-orange-700 flex items-center justify-center shadow-md">
              <span className="text-white font-extrabold text-base">V</span>
            </div>
            <span className="font-display font-extrabold text-lg text-white tracking-tighter uppercase">
              VERTICAL CONSTRUCT
            </span>
          </div>
          <p className="text-on-primary-container text-xs leading-relaxed max-w-sm">
            Partenerul dumneavoastră de încredere pentru servicii profesionale de închiriere automacarale de mare tonaj, transport agabaritic și logistică de șantier în Republica Moldova. Siguranță, precizie și forță structurală.
          </p>
          
          {/* Social icons */}
          <div className="flex gap-4 mt-2">
            <a href="#facebook" className="text-on-primary-container hover:text-safety-yellow text-xs font-bold uppercase transition-colors">
              Facebook
            </a>
            <span className="text-on-primary-container">|</span>
            <a href="#instagram" className="text-on-primary-container hover:text-safety-yellow text-xs font-bold uppercase transition-colors">
              Instagram
            </a>
            <span className="text-on-primary-container">|</span>
            <a href="#linkedin" className="text-on-primary-container hover:text-safety-yellow text-xs font-bold uppercase transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Useful Links Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-safety-yellow pb-2 border-b border-primary-container w-max">
            Link-uri Utile
          </h4>
          <nav className="flex flex-col gap-3 text-xs text-on-primary-container">
            <button 
              onClick={() => handleLinkClick('acasa')} 
              className="hover:text-white hover:translate-x-1 duration-150 text-left transition-all"
            >
              Acasă (Pagina de Pornire)
            </button>
            <button 
              onClick={() => handleLinkClick('servicii')} 
              className="hover:text-white hover:translate-x-1 duration-150 text-left transition-all"
            >
              Serviciile Noastre Industriale
            </button>
            <button 
              onClick={() => handleLinkClick('portofoliu')} 
              className="hover:text-white hover:translate-x-1 duration-150 text-left transition-all"
            >
              Portofoliu de Proiecte
            </button>
            <button 
              onClick={() => handleLinkClick('calculator')} 
              className="hover:text-white hover:translate-x-1 duration-150 text-left transition-all"
            >
              Calculator Sarcini Macarale
            </button>
            <button 
              onClick={() => handleLinkClick('contact')} 
              className="hover:text-white hover:translate-x-1 duration-150 text-left transition-all"
            >
              Contact & Solicitări Ofertă
            </button>
          </nav>
        </div>

        {/* Quick Contacts Column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-sans font-extrabold text-xs tracking-wider uppercase text-safety-yellow pb-2 border-b border-primary-container w-max">
            Informații Contact
          </h4>
          <div className="flex flex-col gap-3 text-xs text-on-primary-container leading-relaxed">
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-safety-yellow text-base">location_on</span>
              Str. Industrială 42, Chișinău, Republica Moldova
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-safety-yellow text-base">phone</span>
              <a href="tel:+37360000000" className="hover:text-white transition-colors">
                +373 60 000 000 (Urgențe Dispecerat 24/7)
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-safety-yellow text-base">mail</span>
              <a href="mailto:contact@verticalconstruct.md" className="hover:text-white transition-colors">
                contact@verticalconstruct.md
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined text-safety-yellow text-base">schedule</span>
              Luni - Sâmbătă: 08:00 - 18:00 (Duminică închis)
            </p>
          </div>
        </div>

      </div>

      {/* Underbar Copyright statement */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-16 pt-8 border-t border-primary-container text-center text-[11px] text-on-primary-container flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 Vertical Construct Moldova. Toate drepturile rezervate.</p>
        <div className="flex gap-4">
          <a href="#termeni" className="hover:text-white transition-colors">Termeni și Condiții</a>
          <span>·</span>
          <a href="#confidentialitate" className="hover:text-white transition-colors">Politică de Confidențialitate</a>
          <span>·</span>
          <p className="text-safety-yellow font-bold">XCMG Premium Partner</p>
        </div>
      </div>
    </footer>
  );
}
