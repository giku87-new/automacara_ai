/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project, ProjectCategory } from '../types';

interface PortfolioViewProps {
  onOpenQuoteModal: (prefilledService?: string) => void;
}

export default function PortfolioView({ onOpenQuoteModal }: PortfolioViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Toate');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['Toate', 'Infrastructură', 'Industrial', 'Rezidențial'];

  const filteredProjects = selectedCategory === 'Toate'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full py-16 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-10">
      
      {/* Page Header */}
      <section className="border-l-4 border-safety-yellow pl-6">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
          PORTOFOLIU DE PROIECTE
        </h1>
        <p className="font-sans text-sm text-gray-400 max-w-2xl mt-3 leading-relaxed">
          O selecție a celor mai complexe structuri și intervenții realizate pe teritoriul Republicii Moldova cu echipamentele noastre de mare tonaj și operatori calificați.
        </p>
      </section>

      {/* Filter Tabs list */}
      <div className="flex gap-2 pb-4 border-b border-[#222222] overflow-x-auto hide-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 font-sans font-bold text-xs tracking-wider uppercase border rounded-lg whitespace-nowrap transition-all duration-150 ${
                isSelected
                  ? 'bg-safety-yellow text-primary border-transparent'
                  : 'bg-[#111111] text-gray-400 border-[#222222] hover:bg-[#1A1A1A] hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <article 
            key={project.id}
            className="bg-[#111111] border border-[#222222] relative group overflow-hidden rounded-2xl shadow-lg hover:border-[#333333] transition-all flex flex-col"
          >
            {/* Image section with category badge */}
            <div className="h-64 w-full relative overflow-hidden bg-surface-container">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={project.imageUrl}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-safety-yellow px-3 py-1 font-sans font-bold text-[10px] tracking-wider uppercase border border-safety-yellow/20 rounded">
                {project.category}
              </div>
            </div>

            {/* Project description content */}
            <div className="p-6 flex flex-col flex-1 gap-4">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display text-base font-extrabold text-white uppercase leading-snug">
                  {project.title}
                </h3>
                <span className="text-gray-400 font-sans font-bold text-xs border border-[#222222] px-2.5 py-0.5 rounded whitespace-nowrap bg-[#1A1A1A]">
                  {project.year}
                </span>
              </div>
              
              <p className="font-sans text-[11px] text-gray-400 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technical features quick review */}
              <div className="border-t border-[#222222] pt-4 mt-auto flex justify-between gap-4 text-[11px] font-sans text-gray-500 font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1 text-gray-300">
                  <span className="material-symbols-outlined text-sm text-safety-yellow">weight</span>
                  {project.capacity}
                </span>
                <span className="flex items-center gap-1 text-gray-300">
                  <span className="material-symbols-outlined text-sm text-safety-yellow">schedule</span>
                  {project.duration}
                </span>
              </div>

              {/* Read more triggers detailed modal */}
              <button 
                onClick={() => setActiveProjectModal(project)}
                className="mt-2 w-full bg-[#1A1A1A] hover:bg-[#222222] text-white font-sans font-bold text-xs tracking-wider uppercase py-3 border border-[#222222] rounded-lg transition-all text-center flex items-center justify-center gap-2"
              >
                VEZI CAZ DE STUDIU
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Modal Window */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          {/* backdrop click closes modal */}
          <div 
            className="fixed inset-0 bg-black/80 transition-opacity" 
            onClick={() => setActiveProjectModal(null)} 
          />

          <div className="bg-[#111111] border border-[#222222] max-w-2xl w-full relative z-10 overflow-hidden rounded-2xl animate-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]">
            {/* Top design accent bar */}
            <div className="h-1 bg-gradient-to-r from-amber-500 to-orange-600" />

            {/* Header */}
            <div className="p-6 border-b border-[#222222] flex justify-between items-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="bg-[#1A1A1A] text-safety-yellow text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 w-max rounded">
                  PROIECT {activeProjectModal.category.toUpperCase()}
                </span>
                <h2 className="font-display text-xl md:text-2xl font-extrabold text-white uppercase tracking-tight">
                  {activeProjectModal.title}
                </h2>
              </div>
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="text-white hover:bg-[#1A1A1A] p-1.5 rounded-lg border border-[#222222] flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto flex flex-col gap-6 font-sans text-xs text-gray-300 leading-relaxed">
              <img 
                alt={activeProjectModal.title} 
                className="w-full h-64 object-cover border border-[#222222] rounded-xl"
                src={activeProjectModal.imageUrl}
                referrerPolicy="no-referrer"
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0D0D0D] p-4 border border-[#222222] rounded-xl">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-500">LOCAȚIE</span>
                  <span className="font-bold text-white mt-0.5">{activeProjectModal.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-500">AN EXECUȚIE</span>
                  <span className="font-bold text-white mt-0.5">{activeProjectModal.year}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-500">CRITERIU</span>
                  <span className="font-bold text-white mt-0.5">{activeProjectModal.capacity}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-gray-500">ECHIPAMENT</span>
                  <span className="font-bold text-white mt-0.5">{activeProjectModal.equipment}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-display font-extrabold text-white uppercase text-sm border-b border-[#222222] pb-1">
                  Descrierea Lucrării & Detalii Tehnice
                </h4>
                <p>{activeProjectModal.details}</p>
                <p className="mt-2 text-gray-400">
                  Toate ridicările mecanizate au fost planificate prealabil prin intermediul diagramelor noastre electronice de sarcină, asigurând o marjă de siguranță de peste 120% conform standardelor ISCIR aplicate în vigoare.
                </p>
              </div>
            </div>

            {/* Footer triggers quick booking inquiry */}
            <div className="p-6 border-t border-[#222222] bg-[#0D0D0D] flex justify-between items-center gap-4">
              <div className="text-left">
                <p className="text-[10px] uppercase text-gray-500 font-bold">Aveți un proiect similar?</p>
                <p className="text-white font-bold text-xs mt-0.5">Suntem gata să ridicăm sarcina!</p>
              </div>
              <button 
                onClick={() => {
                  const srvName = `Închiriere Macara pentru ${activeProjectModal.title}`;
                  setActiveProjectModal(null);
                  onOpenQuoteModal(srvName);
                }}
                className="bg-safety-yellow text-primary px-5 py-3 font-bold text-xs uppercase border border-transparent rounded-lg hover:bg-white hover:text-primary transition-all shadow shadow-amber-500/10"
              >
                CERE SOLUȚIE
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
