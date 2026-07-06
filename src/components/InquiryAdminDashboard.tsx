/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { QuoteRequest } from '../types';

interface InquiryAdminDashboardProps {
  inquiries: QuoteRequest[];
  onUpdateStatus: (id: string, status: QuoteRequest['status']) => void;
  onDeleteInquiry: (id: string) => void;
  onSimulateInquiry: () => void;
}

export default function InquiryAdminDashboard({
  inquiries,
  onUpdateStatus,
  onDeleteInquiry,
  onSimulateInquiry
}: InquiryAdminDashboardProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('Toate');

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch = inq.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          inq.phone.includes(searchTerm) ||
                          inq.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'Toate' || inq.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const totalInquiries = inquiries.length;
  const pendingInquiries = inquiries.filter(i => i.status === 'În aşteptare').length;
  const approvedInquiries = inquiries.filter(i => i.status === 'Aprobat').length;

  return (
    <div className="w-full py-16 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-10">
      
      {/* Dashboard Header */}
      <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 border-l-4 border-safety-yellow pl-6">
        <div>
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter">
            PANOU DE ADMINISTRARE
          </h1>
          <p className="font-sans text-sm text-on-surface-variant max-w-xl mt-2 leading-relaxed">
            Sistem electronic de management al cererilor de ofertă. Modificați stadiul lucrărilor și simulați fluxuri de intrare pentru testarea aplicației în timp real.
          </p>
        </div>
        
        {/* Simulation trigger */}
        <button
          onClick={onSimulateInquiry}
          className="bg-primary text-safety-yellow font-sans font-bold text-xs tracking-wider uppercase px-5 py-4 border border-safety-yellow hover:bg-safety-yellow hover:text-primary active:scale-95 duration-150 flex items-center justify-center gap-2 transition-all self-start md:self-auto shadow-md"
        >
          <span className="material-symbols-outlined text-sm animate-bounce">add_box</span>
          SIMULEAZĂ CERERE NOUĂ
        </button>
      </section>

      {/* Stats Counter Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white border border-outline-variant p-6 flex flex-col gap-2 border-l-4 border-l-primary">
          <span className="font-sans font-bold text-[10px] text-outline uppercase tracking-wider">TOTAL INQUIRIES</span>
          <span className="font-display text-3xl font-extrabold text-primary">{totalInquiries} Solicitări</span>
        </div>
        <div className="bg-white border border-outline-variant p-6 flex flex-col gap-2 border-l-4 border-l-amber-500">
          <span className="font-sans font-bold text-[10px] text-outline uppercase tracking-wider">ÎN AȘTEPTARE</span>
          <span className="font-display text-3xl font-extrabold text-amber-600">{pendingInquiries} Noi</span>
        </div>
        <div className="bg-white border border-outline-variant p-6 flex flex-col gap-2 border-l-4 border-l-green-600">
          <span className="font-sans font-bold text-[10px] text-outline uppercase tracking-wider">APROBATE / CONFIRMATE</span>
          <span className="font-display text-3xl font-extrabold text-green-600">{approvedInquiries} Contracte</span>
        </div>
      </div>

      {/* Filter and Search controls */}
      <div className="bg-white border border-outline-variant p-6 flex flex-col md:flex-row gap-4 items-center">
        {/* Search input */}
        <div className="flex-1 w-full relative">
          <span className="material-symbols-outlined absolute left-3.5 top-3 text-outline text-lg">search</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Căutare după nume client, telefon, sau detalii lucrare..."
            className="w-full bg-surface border border-outline-variant pl-11 pr-4 py-3 text-xs text-primary font-sans focus:outline-none focus:border-primary focus:bg-white transition-colors rounded-none"
          />
        </div>

        {/* Filter select */}
        <div className="w-full md:w-64 flex items-center gap-2">
          <span className="text-[10px] uppercase font-bold text-outline whitespace-nowrap">STARE:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="w-full bg-surface border border-outline-variant px-4 py-3 text-xs text-primary font-sans focus:outline-none focus:border-primary focus:bg-white transition-colors rounded-none"
          >
            <option value="Toate">Toate Cererile</option>
            <option value="În aşteptare">În aşteptare</option>
            <option value="Aprobat">Aprobate</option>
            <option value="Respins">Respinse</option>
          </select>
        </div>
      </div>

      {/* Inquiry Data Table / Cards */}
      <div className="bg-white border border-outline-variant overflow-hidden">
        {filteredInquiries.length === 0 ? (
          <div className="p-16 text-center flex flex-col gap-3 items-center">
            <span className="material-symbols-outlined text-4xl text-outline">inbox</span>
            <p className="font-sans text-xs text-on-surface-variant font-semibold">
              Nu s-au găsit solicitări care să corespundă criteriilor de filtrare selectate.
            </p>
            <button
              onClick={onSimulateInquiry}
              className="text-xs text-secondary font-bold uppercase underline hover:text-primary transition-colors"
            >
              Creează una acum automat!
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="bg-surface-container border-b border-outline-variant text-[10px] text-outline uppercase font-bold">
                  <th className="p-4">Client / Dată</th>
                  <th className="p-4">Contact Telefon</th>
                  <th className="p-4">Serviciu Preferat</th>
                  <th className="p-4">Detalii Șantier</th>
                  <th className="p-4">Stare Solicitare</th>
                  <th className="p-4 text-right">Acțiuni Manager</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {filteredInquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-surface-container-low transition-colors">
                    
                    {/* Client & Date */}
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary">{inq.name}</span>
                        <span className="text-[10px] text-outline mt-0.5">{inq.date}</span>
                      </div>
                    </td>

                    {/* Phone number */}
                    <td className="p-4">
                      <a href={`tel:${inq.phone}`} className="font-mono text-xs font-semibold hover:underline text-secondary">
                        {inq.phone}
                      </a>
                    </td>

                    {/* Selected Service */}
                    <td className="p-4">
                      <span className="bg-surface border border-outline-variant px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                        {inq.service}
                      </span>
                    </td>

                    {/* Details */}
                    <td className="p-4 max-w-xs">
                      <p className="line-clamp-2 leading-relaxed text-on-surface-variant">
                        {inq.details}
                      </p>
                    </td>

                    {/* Status Badge */}
                    <td className="p-4">
                      <span className={`inline-block px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider border rounded-none ${
                        inq.status === 'În aşteptare' ? 'bg-amber-50 text-amber-700 border-amber-300' :
                        inq.status === 'Aprobat' ? 'bg-green-50 text-green-700 border-green-300' :
                        'bg-red-50 text-red-700 border-red-300'
                      }`}>
                        {inq.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4 text-right whitespace-nowrap">
                      <div className="flex justify-end gap-1.5">
                        {inq.status === 'În aşteptare' && (
                          <>
                            <button
                              onClick={() => onUpdateStatus(inq.id, 'Aprobat')}
                              className="px-2.5 py-1.5 bg-green-600 text-white hover:bg-green-700 text-[10px] font-bold uppercase transition-colors"
                              title="Aprobă solicitarea"
                            >
                              Aprobă
                            </button>
                            <button
                              onClick={() => onUpdateStatus(inq.id, 'Respins')}
                              className="px-2.5 py-1.5 bg-red-600 text-white hover:bg-red-700 text-[10px] font-bold uppercase transition-colors"
                              title="Respinge solicitarea"
                            >
                              Respinge
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => onDeleteInquiry(inq.id)}
                          className="px-2.5 py-1.5 border border-outline hover:bg-primary hover:text-white text-[10px] font-bold uppercase transition-colors text-on-surface"
                          title="Șterge înregistrare"
                        >
                          Șterge
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
