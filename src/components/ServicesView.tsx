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
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter leading-none">
          SERVICII COMPLETE DE RIDICARE
        </h1>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed">
          Suntem specializați în furnizarea de soluții logistice grele și ridicări mecanizate complexe. Deținem o flotă modernă proprie de automacarale gata de intervenție pe orice șantier din Republica Moldova.
        </p>
      </section>

      {/* Services List Detail Cards */}
      <div className="flex flex-col gap-12">
        
        {/* Service 1: Automacarale (Featured full-width block) */}
        <article className="bg-white border border-outline-variant shadow-sm relative overflow-hidden flex flex-col lg:flex-row group">
          {/* Top Yellow Ribbon design detail */}
          <div className="absolute top-0 left-0 w-full h-1 bg-safety-yellow z-10"></div>
          
          {/* Photo frame */}
          <div className="lg:w-1/2 h-80 lg:h-auto relative overflow-hidden bg-surface-container">
            <img 
              alt="Automacara XCMG XCT25 în parcul auto" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={CRANE_SERVICE_COVER}
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-primary text-safety-yellow px-4 py-2 font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 border border-safety-yellow">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span> 
              Flotă Proprie
            </div>
          </div>

          {/* Detailed specifications content */}
          <div className="p-6 md:p-10 flex flex-col gap-6 lg:w-1/2 justify-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-safety-yellow text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  precision_manufacturing
                </span>
                <h2 className="font-display text-xl md:text-2xl font-bold uppercase">
                  Închiriere Automacarale
                </h2>
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Oferim spre închiriere automacarale mobile de ultimă generație, deservite de operatori calificați și certificați ISCIR. Focusul nostru principal este pe modelul modern <strong>XCMG XCT25</strong>, recunoscut pe plan mondial pentru fiabilitate sporită, manevrabilitate sporită în zone urbane înghesuite și sisteme avansate de siguranță la supra-sarcină.
              </p>
            </div>

            {/* Technical Characteristics nested table */}
            <div className="border border-outline-variant rounded-none overflow-hidden">
              <div className="bg-surface-container px-4 py-2 border-b border-outline-variant">
                <span className="font-sans font-extrabold text-[10px] tracking-wider uppercase text-primary">
                  Specificații Tehnice XCMG XCT25
                </span>
              </div>
              <div className="flex flex-col text-xs font-sans">
                <div className="flex justify-between px-4 py-2.5 border-b border-outline-variant bg-surface-container-lowest">
                  <span className="text-on-surface-variant">Capacitate max. de ridicare</span>
                  <span className="font-bold text-primary">25 Tone (la rază de 3m)</span>
                </div>
                <div className="flex justify-between px-4 py-2.5 border-b border-outline-variant bg-surface-container-low">
                  <span className="text-on-surface-variant">Lungime braț principal</span>
                  <span className="font-bold text-primary">10.5m - 34m (Telescopic)</span>
                </div>
                <div className="flex justify-between px-4 py-2.5 border-b border-outline-variant bg-surface-container-lowest">
                  <span className="text-on-surface-variant">Lungime braț cu prelungitor (jib)</span>
                  <span className="font-bold text-primary">42.3m</span>
                </div>
                <div className="flex justify-between px-4 py-2.5 bg-surface-container-low">
                  <span className="text-on-surface-variant">Viteză maximă deplasare șosea</span>
                  <span className="font-bold text-primary">80 km/h</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onOpenQuoteModal("Închiriere Automacarale (XCMG XCT25)")}
              className="bg-safety-yellow text-primary font-sans font-bold text-xs tracking-wider uppercase px-6 py-4 hover:bg-primary hover:text-safety-yellow transition-all self-start border border-primary/10 w-full md:w-auto text-center flex items-center justify-center gap-2 industrial-shadow"
            >
              REZERVĂ ACUM <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </article>

        {/* Secondary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 2 Card */}
          <article className="bg-white border border-outline-variant p-8 flex flex-col gap-6 group hover:border-safety-yellow transition-colors duration-300 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary group-hover:bg-safety-yellow transition-colors"></div>
            <div className="w-16 h-16 bg-primary text-safety-yellow flex items-center justify-center border border-primary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                local_shipping
              </span>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-display text-lg font-bold uppercase text-primary">
                Transport Utilaje Grele
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Asigurăm logistică rutieră completă pentru utilaje și echipamente agabaritice sau de tonaj sporit. Folosim trailere cu pat coborât de ultimă generație și ne ocupăm integral de obținerea autorizațiilor speciale de transport (AST) și de coordonarea cu escorta poliției rutiere.
              </p>
              
              {/* Simple specs preview */}
              <div className="mt-2 text-xs bg-surface-container-low p-4 flex flex-col gap-1.5 border border-outline-variant/50">
                <div className="flex justify-between text-[11px]"><span className="text-on-surface-variant">Capacitate utilă:</span> <span className="font-bold">Până la 60 Tone</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-on-surface-variant">Servicii incluse:</span> <span className="font-bold">Proiectare traseu, Escortă</span></div>
              </div>
            </div>
            
            <button 
              onClick={() => onOpenQuoteModal("Transport Utilaje Grele")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 transition-colors duration-200 text-center w-full"
            >
              SOLICITĂ TRANSPORT
            </button>
          </article>

          {/* Service 3 Card */}
          <article className="bg-white border border-outline-variant p-8 flex flex-col gap-6 group hover:border-safety-yellow transition-colors duration-300 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary group-hover:bg-safety-yellow transition-colors"></div>
            <div className="w-16 h-16 bg-primary text-safety-yellow flex items-center justify-center border border-primary">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                engineering
              </span>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-display text-lg font-bold uppercase text-primary">
                Consultanță Tehnică
              </h3>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                Înainte de a demara orice procedură de ridicare mecanică grea, inginerii noștri pot realiza vizite pe teren pentru măsurători geometrice și studii geotehnice de presiune pe sol. Realizăm diagrame de sarcină personalizate (Lifting Plans) pentru ca totul să decurgă în maximă siguranță.
              </p>

              {/* Simple specs preview */}
              <div className="mt-2 text-xs bg-surface-container-low p-4 flex flex-col gap-1.5 border border-outline-variant/50">
                <div className="flex justify-between text-[11px]"><span className="text-on-surface-variant">Documentație:</span> <span className="font-bold">Lifting Plans 2D/3D</span></div>
                <div className="flex justify-between text-[11px]"><span className="text-on-surface-variant">Certificare:</span> <span className="font-bold">Avizat ISCIR / CNCAN</span></div>
              </div>
            </div>
            
            <button 
              onClick={() => onOpenQuoteModal("Consultanță Tehnică & Diagrame")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-sans font-bold text-xs tracking-wider uppercase px-6 py-3 transition-colors duration-200 text-center w-full"
            >
              PROGRAMEAZĂ EVALUARE
            </button>
          </article>

        </div>

      </div>

    </div>
  );
}
