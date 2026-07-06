/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QuoteRequest } from '../types';

interface ContactViewProps {
  onSubmitInquiry: (name: string, phone: string, service: string, details: string) => void;
  prefilledService?: string;
  setPrefilledService: (val: string) => void;
}

export default function ContactView({ onSubmitInquiry, prefilledService, setPrefilledService }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: prefilledService || 'Închiriere Automacarale (XCMG XCT25)',
    details: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const servicesList = [
    'Închiriere Automacarale (XCMG XCT25)',
    'Transport Utilaje Grele',
    'Consultanță Tehnică & Diagrame',
    'Alte Ridicări Speciale'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Numele complet este obligatoriu';
    if (!formData.phone.trim()) newErrors.phone = 'Numărul de telefon este obligatoriu';
    if (!formData.details.trim()) newErrors.details = 'Vă rugăm să oferiți detalii despre ridicare';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Call dynamic submit action to propagate to Admin Dashboard list!
    onSubmitInquiry(formData.name, formData.phone, formData.service, formData.details);
    
    setFormSubmitted(true);
    // clear prefilled service after submission
    setPrefilledService('');
    setFormData({
      name: '',
      phone: '',
      service: 'Închiriere Automacarale (XCMG XCT25)',
      details: ''
    });

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full py-16 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-12">
      
      {/* Contact Header */}
      <section className="border-l-4 border-safety-yellow pl-6">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
          CONTACT & SOLICITĂRI
        </h1>
        <p className="font-sans text-sm text-gray-400 max-w-2xl mt-2 leading-relaxed">
          Dispeceratul nostru tehnic vă stă la dispoziție pentru oferte imediate și planificări de șantier. Completați formularul de mai jos sau sunați direct la asistența noastră 24/7.
        </p>
      </section>

      {/* Emergency Call Action Banner */}
      <div className="bg-[#111111] text-white p-6 md:p-8 border border-[#222222] border-l-4 border-l-safety-yellow flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#F59E0B 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        <div className="flex items-center gap-4 relative z-10">
          <span className="material-symbols-outlined text-4xl text-safety-yellow animate-pulse">
            phone_in_talk
          </span>
          <div>
            <h3 className="font-display font-extrabold text-xs uppercase tracking-widest text-safety-yellow">
              Urgențe & Programări Rapide
            </h3>
            <p className="font-sans font-bold text-lg md:text-xl text-white mt-1">
              Dispecerat Direct: +373 60 000 000
            </p>
          </div>
        </div>
        <a 
          href="tel:+37360000000"
          className="bg-safety-yellow text-primary font-sans font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg hover:bg-white hover:text-primary transition-all relative z-10 whitespace-nowrap shadow shadow-amber-500/10"
        >
          APEL DIRECT ACUM
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        
        {/* Left Column: Form Info */}
        <section className="bg-[#111111] border border-[#222222] p-8 relative flex flex-col gap-6 rounded-2xl overflow-hidden animate-in fade-in duration-300">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
          
          <h2 className="font-display text-lg font-extrabold text-white uppercase border-b border-[#222222] pb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-safety-yellow text-xl">assignment</span>
            Solicitare Ofertă Personalizată
          </h2>

          {formSubmitted ? (
            <div className="bg-[#0D0D0D] border border-[#222222] rounded-xl p-8 flex flex-col items-center text-center gap-4 my-8 animate-in zoom-in-95 duration-200">
              <span className="material-symbols-outlined text-5xl text-safety-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>
                check_circle
              </span>
              <div>
                <h4 className="font-display font-bold text-white text-base uppercase">Solicitarea a fost trimisă!</h4>
                <p className="font-sans text-xs text-gray-400 mt-2 max-w-sm leading-relaxed">
                  Datele au fost înregistrate cu succes în sistem. Un inginer planificator va analiza schița șantierului și vă va contacta telefonic în cel mai scurt timp (de regulă sub 30 de minute).
                </p>
              </div>
              <p className="text-[10px] text-gray-500 font-semibold uppercase mt-2">
                Puteți vizualiza statusul solicitării în tab-ul "Panou Admin".
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Client Name Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-sans font-bold text-[10px] uppercase text-gray-500 tracking-wider">
                  Nume Complet / Companie
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ex: Constructor SRL / Ion Popescu"
                  className={`w-full bg-[#0D0D0D] border rounded-lg px-4 py-3 text-xs text-white font-sans focus:outline-none focus:border-safety-yellow transition-colors ${
                    errors.name ? 'border-red-500' : 'border-[#222222]'
                  }`}
                />
                {errors.name && <span className="text-red-500 text-[10px] font-bold uppercase">{errors.name}</span>}
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="font-sans font-bold text-[10px] uppercase text-gray-500 tracking-wider">
                  Număr de Telefon Contact
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Ex: +373 XX XXX XXX"
                  className={`w-full bg-[#0D0D0D] border rounded-lg px-4 py-3 text-xs text-white font-sans focus:outline-none focus:border-safety-yellow transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-[#222222]'
                  }`}
                />
                {errors.phone && <span className="text-red-500 text-[10px] font-bold uppercase">{errors.phone}</span>}
              </div>

              {/* Service Selection Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="font-sans font-bold text-[10px] uppercase text-gray-500 tracking-wider">
                  Tip Echipament sau Serviciu Dorit
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-[#0D0D0D] border border-[#222222] rounded-lg px-4 py-3 text-xs text-white font-sans focus:outline-none focus:border-safety-yellow transition-colors"
                >
                  {servicesList.map((srv) => (
                    <option key={srv} value={srv} className="bg-[#111111]">{srv}</option>
                  ))}
                </select>
              </div>

              {/* Work Details Input */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="font-sans font-bold text-[10px] uppercase text-gray-500 tracking-wider">
                  Detalii Lucrare (Locație, Greutate, Înălțime ridicare)
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="Ex: Avem de ridicat grinzi de oțel de 4 tone, la o înălțime de 12 metri. Șantierul se află în municipiul Chișinău."
                  className={`w-full bg-[#0D0D0D] border rounded-lg px-4 py-3 text-xs text-white font-sans focus:outline-none focus:border-safety-yellow transition-colors resize-none ${
                    errors.details ? 'border-red-500' : 'border-[#222222]'
                  }`}
                />
                {errors.details && <span className="text-red-500 text-[10px] font-bold uppercase">{errors.details}</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-safety-yellow text-primary font-sans font-bold text-xs tracking-wider uppercase py-4 rounded-lg hover:bg-white hover:text-primary transition-all text-center flex items-center justify-center gap-2 shadow shadow-amber-500/10"
              >
                TRIMITE SOLICITARE OFERTĂ
                <span className="material-symbols-outlined text-sm">send</span>
              </button>

            </form>
          )}
        </section>

        {/* Right Column: Information Coordinates & Heavy Vehicle Map */}
        <section className="flex flex-col gap-8">
          
          {/* Coordinates cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 flex flex-col gap-3">
              <span className="material-symbols-outlined text-safety-yellow text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
              <h4 className="font-display font-bold text-xs text-white uppercase">Adresă Sediu Tehnic</h4>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                Strada Industrială 42,<br/>
                Chișinău, MD-2036,<br/>
                Republica Moldova
              </p>
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 flex flex-col gap-3">
              <span className="material-symbols-outlined text-safety-yellow text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                schedule
              </span>
              <h4 className="font-display font-bold text-xs text-white uppercase">Program Operațional</h4>
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                Luni - Vineri: 08:00 - 18:00<br/>
                Sâmbătă: 08:00 - 14:00<br/>
                <strong className="text-red-500 font-bold">Intervenții Urgențe: 24/7</strong>
              </p>
            </div>
          </div>

          {/* Site Access Map Block (Interactive Styled Vector UI) */}
          <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1 border-b border-[#222222] pb-3">
              <h3 className="font-display text-xs font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-safety-yellow text-lg">local_shipping</span>
                Hartă Acces Șantier & Logistică Greu
              </h3>
              <p className="text-[10px] text-gray-500 font-semibold uppercase">
                INSTRUCȚIUNI LOGISTICE TRUCKS / AGABARITICE
              </p>
            </div>

            {/* Custom high-fidelity blueprint style map illustration */}
            <div className="bg-[#0D0D0D] text-white p-6 relative flex flex-col items-center justify-center border border-[#222222] rounded-xl overflow-hidden min-h-[220px]">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
              
              {/* Minimal architectural road elements in yellow */}
              <div className="relative z-10 w-full flex flex-col gap-3">
                <div className="border border-dashed border-safety-yellow/40 p-3 bg-[#111111]/80 rounded-lg flex flex-col gap-1.5">
                  <span className="text-[10px] font-display font-extrabold text-safety-yellow uppercase tracking-widest flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">directions_car</span>
                    ACCES AUTO GREU AUTORIZAT
                  </span>
                  <p className="text-[10px] text-gray-300 leading-relaxed">
                    Intrarea principală pentru trailere agabaritice și automacarale se efectuează exclusiv prin <strong className="text-safety-yellow font-bold">Poarta de Est</strong>, dinspre sensul giratoriu de centură. Înălțime limită poartă: Fără restricție.
                  </p>
                </div>

                <div className="flex justify-between items-center text-[9px] font-mono border-t border-[#222222] pt-3">
                  <span className="text-gray-500">COORDINATE GPS: 47.0142° N, 28.8921° E</span>
                  <span className="bg-safety-yellow text-primary px-2 py-0.5 rounded font-bold uppercase">PORȚI DESCHISE</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-[11px] text-gray-400 leading-relaxed">
              <span className="material-symbols-outlined text-base text-safety-yellow mt-0.5">info</span>
              <p>
                Parcul auto se află în incinta zonei industriale de Est a Chișinăului. Accesul este permis exclusiv camioanelor cu autorizație de tranzit urban emisă de primăria locală pentru vehicule de peste 10 tone.
              </p>
            </div>
          </div>

        </section>

      </div>

    </div>
  );
}
