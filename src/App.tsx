/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import PortfolioView from './components/PortfolioView';
import ContactView from './components/ContactView';
import LiftingCalculator from './components/LiftingCalculator';
import InquiryAdminDashboard from './components/InquiryAdminDashboard';
import { QuoteRequest } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('acasa');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  // Initial persistent database state for Quote Inquiries
  const [inquiries, setInquiries] = useState<QuoteRequest[]>([
    {
      id: 'inq-1',
      name: 'Ion Prisăcaru (Ialoveni Construct)',
      phone: '+373 68 123 456',
      service: 'Închiriere Automacarale (XCMG XCT25)',
      details: 'Avem de ridicat grinzi de oțel grele pentru un acoperiș industrial la or. Ialoveni. Sarcina maximă este de 4.5 tone, înălțimea maximă de ridicare este de 12 metri. Solicităm ofertă pentru 3 zile de închiriere.',
      date: '2026-07-06 14:32',
      status: 'În aşteptare'
    },
    {
      id: 'inq-2',
      name: 'Mihail Gore (AgroLogistics S.A.)',
      phone: '+373 79 987 654',
      service: 'Transport Utilaje Grele',
      details: 'Solicităm transport agabaritit pentru un excavator șenilat Case CX210 de 22 de tone, pe traseul Vama Leușeni - Chișinău (Zona Industrială). Avem nevoie de trailer coborât cu rampe rezistente.',
      date: '2026-07-05 10:15',
      status: 'Aprobat'
    },
    {
      id: 'inq-3',
      name: 'Elena Vasiliu (Urban Group Chișinău)',
      phone: '+373 60 555 444',
      service: 'Consultanță Tehnică & Diagrame',
      details: 'Avem nevoie de un Lifting Plan semnat și aprobat de un inginer autorizat pentru poziționarea unei macarale turn în sectorul Buiucani, strada Alba Iulia. Solicităm vizită pe teren pentru analiză sol.',
      date: '2026-07-04 11:20',
      status: 'Aprobat'
    }
  ]);

  // Floating notifications state
  const [notification, setNotification] = useState<string | null>(null);

  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  // 1. Submit Inquiry from Contact Form or Modal Form
  const handleAddInquiry = (name: string, phone: string, service: string, details: string) => {
    const newInquiry: QuoteRequest = {
      id: `inq-${Date.now()}`,
      name,
      phone,
      service,
      details,
      date: new Date().toLocaleString('ro-RO', { hour12: false }).slice(0, 16),
      status: 'În aşteptare'
    };

    setInquiries((prev) => [newInquiry, ...prev]);
    triggerNotification(`Solicitare înregistrată pentru clientul "${name}"!`);
  };

  // 2. Update Status of Inquiry (Approve / Reject)
  const handleUpdateInquiryStatus = (id: string, status: QuoteRequest['status']) => {
    setInquiries((prev) => 
      prev.map((inq) => inq.id === id ? { ...inq, status } : inq)
    );
    triggerNotification(`Stare solicitare actualizată la "${status}"!`);
  };

  // 3. Delete Inquiry record
  const handleDeleteInquiry = (id: string) => {
    setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    triggerNotification('Înregistrarea a fost eliminată din baza de date.');
  };

  // 4. Simulate a new incoming request
  const handleSimulateNewInquiry = () => {
    const names = ['Andrei Cebanu (Nord Construct)', 'Vasile Lupu', 'Sergiu Rusu (SteelCore SRL)', 'Mariana Bordeianu'];
    const phones = ['+373 69 888 777', '+373 78 555 111', '+373 60 222 333', '+373 79 444 888'];
    const services = [
      'Închiriere Automacarale (XCMG XCT25)',
      'Transport Utilaje Grele',
      'Consultanță Tehnică & Diagrame'
    ];
    const detailsList = [
      'Montaj stâlpi prefabricați din beton armat la o hală de producție în Hîncești. Greutate piesă 5 tone.',
      'Avem nevoie urgentă de macara de 25 tone la Bălți pentru descărcarea unor utilaje dintr-un autotren.',
      'Transport agregat de concasare de 32 tone din cariera Micăuți până la șantierul de pe centura Chișinău.',
      'Analiză de risc și studiu de înălțime pentru montarea unor echipamente de climatizare pe acoperișul unui bloc.'
    ];

    const randomIndex = Math.floor(Math.random() * names.length);
    const simulatedInquiry: QuoteRequest = {
      id: `inq-sim-${Date.now()}`,
      name: names[randomIndex],
      phone: phones[randomIndex],
      service: services[Math.floor(Math.random() * services.length)],
      details: detailsList[randomIndex],
      date: new Date().toLocaleString('ro-RO', { hour12: false }).slice(0, 16),
      status: 'În aşteptare'
    };

    setInquiries((prev) => [simulatedInquiry, ...prev]);
    triggerNotification(`[SIMULARE] Solicitare nouă primită de la "${simulatedInquiry.name}"!`);
  };

  // Helper to trigger Modal opening and auto-select service
  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  // Modal Submit handler
  const handleModalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('modalName') as string;
    const phone = data.get('modalPhone') as string;
    const service = data.get('modalService') as string;
    const details = data.get('modalDetails') as string;

    if (!name || !phone || !details) {
      alert('Vă rugăm să completați toate câmpurile obligatorii.');
      return;
    }

    handleAddInquiry(name, phone, service, details);
    setIsQuoteModalOpen(false);
    setPrefilledService('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface selection:bg-safety-yellow selection:text-primary">
      
      {/* Dynamic Floating Toast Alerts */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-white border-l-4 border-safety-yellow p-4 shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <span className="material-symbols-outlined text-safety-yellow text-xl">notifications_active</span>
          <p className="font-sans font-bold text-xs">{notification}</p>
        </div>
      )}

      {/* Top Header Navbar */}
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        onOpenQuoteModal={() => handleOpenQuoteModal()} 
      />

      {/* Main Screen Views Content */}
      <main className="flex-grow">
        {currentTab === 'acasa' && (
          <HomeView 
            setCurrentTab={setCurrentTab} 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentTab === 'servicii' && (
          <ServicesView 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentTab === 'portofoliu' && (
          <PortfolioView 
            onOpenQuoteModal={handleOpenQuoteModal} 
          />
        )}
        {currentTab === 'contact' && (
          <ContactView 
            onSubmitInquiry={handleAddInquiry} 
            prefilledService={prefilledService}
            setPrefilledService={setPrefilledService}
          />
        )}
        {currentTab === 'calculator' && (
          <LiftingCalculator />
        )}
        {currentTab === 'admin' && (
          <InquiryAdminDashboard 
            inquiries={inquiries}
            onUpdateStatus={handleUpdateInquiryStatus}
            onDeleteInquiry={handleDeleteInquiry}
            onSimulateInquiry={handleSimulateNewInquiry}
          />
        )}
      </main>

      {/* Bottom Footer block */}
      <Footer setCurrentTab={setCurrentTab} />

      {/* GLOBAL FLOATING QUICK-QUOTE MODAL */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-primary/80" onClick={() => { setIsQuoteModalOpen(false); setPrefilledService(''); }} />
          
          <div className="bg-white border-2 border-primary max-w-md w-full relative z-10 animate-in zoom-in-95 duration-150 flex flex-col overflow-hidden">
            <div className="h-2 bg-safety-yellow" />
            
            {/* Header */}
            <div className="p-6 border-b border-outline-variant flex justify-between items-center">
              <h2 className="font-display font-extrabold text-primary text-base uppercase tracking-tight flex items-center gap-2">
                <span className="material-symbols-outlined text-safety-yellow">add_task</span>
                Solicită Oferta Rapidă
              </h2>
              <button 
                onClick={() => { setIsQuoteModalOpen(false); setPrefilledService(''); }}
                className="text-primary hover:bg-surface-container p-1 rounded-none"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleModalSubmit} className="p-6 flex flex-col gap-4 font-sans text-xs">
              <div className="flex flex-col gap-1">
                <label className="font-bold text-[10px] text-outline uppercase tracking-wider">Nume / Companie *</label>
                <input 
                  type="text" 
                  name="modalName" 
                  required 
                  placeholder="Ex: Ion Popescu / Constructor SRL"
                  className="w-full bg-surface border border-outline-variant px-3 py-2.5 text-primary focus:outline-none focus:border-primary focus:bg-white transition-colors rounded-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-bold text-[10px] text-outline uppercase tracking-wider">Număr de Telefon Contact *</label>
                <input 
                  type="tel" 
                  name="modalPhone" 
                  required 
                  placeholder="Ex: +373 60 000 000"
                  className="w-full bg-surface border border-outline-variant px-3 py-2.5 text-primary focus:outline-none focus:border-primary focus:bg-white transition-colors rounded-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-bold text-[10px] text-outline uppercase tracking-wider">Serviciul Selectat</label>
                <select 
                  name="modalService" 
                  defaultValue={prefilledService || 'Închiriere Automacarale (XCMG XCT25)'}
                  className="w-full bg-surface border border-outline-variant px-3 py-2.5 text-primary focus:outline-none focus:border-primary focus:bg-white transition-colors rounded-none"
                >
                  <option value="Închiriere Automacarale (XCMG XCT25)">Închiriere Automacarale (XCMG XCT25)</option>
                  <option value="Transport Utilaje Grele">Transport Utilaje Grele</option>
                  <option value="Consultanță Tehnică & Diagrame">Consultanță Tehnică & Diagrame</option>
                  <option value="Alte Ridicări Speciale">Alte Ridicări Speciale</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-bold text-[10px] text-outline uppercase tracking-wider">Descriere Ridicare / Tonaj / Înălțime *</label>
                <textarea 
                  name="modalDetails" 
                  required 
                  rows={3} 
                  placeholder="Ex: Ridicare rezervoare oțel de 3 tone la 8m înălțime, în Chișinău."
                  className="w-full bg-surface border border-outline-variant px-3 py-2.5 text-primary focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none rounded-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-safety-yellow text-primary font-bold tracking-wider uppercase py-3.5 mt-2 border border-primary industrial-shadow hover:bg-primary hover:text-safety-yellow transition-all flex items-center justify-center gap-2"
              >
                TRIMITE ACUM <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
