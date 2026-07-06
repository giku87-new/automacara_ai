/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CRANE_SERVICE_COVER, SERVICES } from '../data';

interface ServicesViewProps {
  onOpenQuoteModal: (prefilledService?: string) => void;
}

export default function ServicesView({ onOpenQuoteModal }: ServicesViewProps) {
  return (
    <div className="w-full py-16 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-16">
      
      {/* Page Heading */}
      <section className="flex flex-col gap-4 border-l-4 border-safety-yellow pl-6">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter leading-none">
          SERVICII COMPLETE DE RIDICARE
        </h1>
        <p className="font-sans text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          Suntem specializați în furnizarea de soluții logistice grele și ridicări mecanizate complexe. Deținem o flotă modernă proprie de automacarale gata de intervenție pe orice șantier din Republica Moldova.
        </p>
      </section>

      {/* Services List Detail Cards */}
      <div className="flex flex-col gap-12">
        
        {/* Service 1: Automacarale (Featured full-width block) */}
        <article className="bg-[#111111] border border-[#222222] rounded-2xl shadow-lg relative overflow-hidden flex flex-col lg:flex-row group">
          {/* Top Yellow Ribbon design detail */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600 z-10"></div>
          
          {/* Photo frame */}
          <div className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden bg-surface-container">
            <img 
              alt="Automacara XCMG XCT25 în parcul auto" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={CRANE_SERVICE_COVER}
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-primary/95 text-safety-yellow px-4 py-2 font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-[#333333] rounded backdrop-blur-sm">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span> 
              Flotă Proprie
            </div>
          </div>

          {/* Detailed specifications content */}
          <div className="p-6 md:p-10 flex flex-col gap-6 lg:w-1/2 justify-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined text-safety-yellow text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  precision_manufacturing
                </span>
                <h2 className="font-display text-xl md:text-2xl font-bold uppercase">
                  Închiriere Automacarale
                </h2>
              </div>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Oferim spre închiriere automacarale mobile de ultimă generație, deservite de operatori calificați și certificați ISCIR. Focusul nostru principal este pe modelul modern <strong>XCMG XCT25</strong>, recunoscut pe plan mondial pentru fiabilitate sporită, manevrabilitate sporită în zone urbane înghesuite și sisteme avansate de siguranță la supra-sarcină.
              </p>
            </div>

            {/* Technical Characteristics nested table */}
            <div className="border border-[#222222] rounded-xl overflow-hidden">
              <div className="bg-[#1A1A1A] px-4 py-2 border-b border-[#222222]">
                <span className="font-sans font-extrabold text-[10px] tracking-wider uppercase text-white">
                  Specificații Tehnice XCMG XCT25
                </span>
              </div>
              <div className="flex flex-col text-xs font-sans">
                <div className="flex justify-between px-4 py-2.5 border-b border-[#222222] bg-[#0D0D0D]">
                  <span className="text-gray-400">Capacitate max. de ridicare</span>
                  <span className="font-bold text-white">25 Tone (la rază de 3m)</span>
                </div>
                <div className="flex justify-between px-4 py-2.5 border-b border-[#222222] bg-[#141414]">
                  <span className="text-gray-400">Lungime braț principal</span>
                  <span className="font-bold text-white">10.5m - 34m (Telescopic)</span>
                </div>
                <div className="flex justify-between px-4 py-2.5 border-b border-[#222222] bg-[#0D0D0D]">
                  <span className="text-gray-400">Lungime braț cu prelungitor (jib)</span>
                  <span className="font-bold text-white">42.3m</span>
                </div>
                <div className="flex justify-between px-4 py-2.5 bg-[#141414]">
                  <span className="text-gray-400">Viteză maximă deplasare șosea</span>
                  <span className="font-bold text-white">80 km/h</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onOpenQuoteModal("Închiriere Automacarale (XCMG XCT25)")}
              className="bg-safety-yellow text-primary font-sans font-bold text-xs tracking-wider uppercase px-6 py-4 rounded-lg hover:bg-white hover:text-primary transition-all self-start w-full md:w-auto text-center flex items-center justify-center gap-2"
            >
              REZERVĂ ACUM <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </article>

        {/* Secondary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 2 Card */}
          <article className="bg-[#111111] border border-[#222222] rounded-2xl p-8 flex flex-col gap-6 group hover:border-[#333333] transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#222222] group-hover:bg-safety-yellow transition-colors"></div>
            <div className="w-16 h-16 bg-[#1A1A1A] text-safety-yellow flex items-center justify-center border border-[#222222] rounded-lg">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_shipping
              </span>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-display text-lg font-bold uppercase text-white">
                Transport Utilaje Grele
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Asigurăm logistică rutieră completă pentru utilaje și echipamente agabaritice sau de tonaj sporit. Folosim trailere cu pat coborât de ultimă generație și ne ocupăm integral de obținerea autorizațiilor speciale de transport (AST) și de coordonarea cu escorta poliției rutiere.
              </p>
              
              {/* Simple specs preview */}
              <div className="mt-2 text-xs bg-[#141414] rounded-lg p-4 flex flex-col gap-1.5 border border-[#222222]">
                <div className="flex justify-between text-[11px]"><span className="text-gray-400">Capacitate utilă:</span> <span className="font-bold text-white">Până la 60 Tone</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-gray-400">Servicii incluse:</span> <span className="font-bold text-white">Proiectare traseu, Escortă</span></div>
              </div>
            </div>
            
            <button 
              onClick={() => onOpenQuoteModal("Transport Utilaje Grele")}
              className="border border-[#333333] text-white hover:bg-white hover:text-primary font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 transition-colors duration-200 text-center w-full rounded-lg"
            >
              SOLICITĂ TRANSPORT
            </button>
          </article>

          {/* Service 3 Card */}
          <article className="bg-[#111111] border border-[#222222] rounded-2xl p-8 flex flex-col gap-6 group hover:border-[#333333] transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#222222] group-hover:bg-safety-yellow transition-colors"></div>
            <div className="w-16 h-16 bg-[#1A1A1A] text-safety-yellow flex items-center justify-center border border-[#222222] rounded-lg">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                engineering
              </span>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-display text-lg font-bold uppercase text-white">
                Consultanță Tehnică
              </h3>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                Înainte de a demara orice procedură de ridicare mecanică grea, inginerii noștri pot realiza vizite pe teren pentru măsurători geometrice și studii geotehnice de presiune pe sol. Realizăm diagrame de sarcină personalizate (Lifting Plans) pentru ca totul să decurgă în maximă siguranță.
              </p>

              {/* Simple specs preview */}
              <div className="mt-2 text-xs bg-[#141414] rounded-lg p-4 flex flex-col gap-1.5 border border-[#222222]">
                <div className="flex justify-between text-[11px]"><span className="text-gray-400">Documentație:</span> <span className="font-bold text-white">Lifting Plans 2D/3D</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-gray-400">Certificare:</span> <span className="font-bold text-white">Avizat ISCIR / CNCAN</span></div>
              </div>
            </div>
            
            <button 
              onClick={() => onOpenQuoteModal("Consultanță Tehnică & Diagrame")}
              className="border border-[#333333] text-white hover:bg-white hover:text-primary font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 transition-colors duration-200 text-center w-full rounded-lg"
            >
              PROGRAMEAZĂ EVALUARE
            </button>
          </article>

        </div>

      </div>

    </div>
  );
}
