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
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-primary uppercase tracking-tighter">
          PORTOFOLIU DE PROIECTE
        </h1>
        <p className="font-sans text-sm text-on-surface-variant max-w-2xl mt-3 leading-relaxed">
          O selecție a celor mai complexe structuri și intervenții realizate pe teritoriul Republicii Moldova cu echipamentele noastre de mare tonaj și operatori calificați.
        </p>
      </section>

      {/* Filter Tabs list */}
      <div className="flex gap-2 pb-4 border-b border-outline-variant overflow-x-auto hide-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 font-sans font-bold text-xs tracking-wider uppercase border whitespace-nowrap transition-all duration-150 ${
                isSelected
                  ? 'bg-primary text-safety-yellow border-primary'
                  : 'bg-white text-on-surface border-outline hover:bg-surface-container-low'
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
            className="bg-white border border-outline-variant relative group overflow-hidden border-t-4 border-t-safety-yellow shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            {/* Image section with category badge */}
            <div className="h-64 w-full relative overflow-hidden bg-surface-container">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={project.imageUrl}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-primary text-safety-yellow px-3 py-1 font-sans font-bold text-[10px] tracking-wider uppercase border border-safety-yellow">
                {project.category}
              </div>
            </div>

            {/* Project description content */}
            <div className="p-6 flex flex-col flex-1 gap-4">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-display text-base font-extrabold text-primary uppercase leading-snug">
                  {project.title}
                </h3>
                <span className="text-on-surface-variant font-sans font-bold text-xs border border-outline-variant px-2.5 py-0.5 whitespace-nowrap bg-surface-container-low">
                  {project.year}
                </span>
              </div>
              
              <p className="font-sans text-[11px] text-on-surface-variant leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Technical features quick review */}
              <div className="border-t border-outline-variant pt-4 mt-auto flex justify-between gap-4 text-[11px] font-sans text-outline font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">weight</span>
                  {project.capacity}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                  {project.duration}
                </span>
              </div>

              {/* Read more triggers detailed modal */}
              <button 
                onClick={() => setActiveProjectModal(project)}
                className="mt-2 w-full bg-surface hover:bg-primary hover:text-white text-primary font-sans font-bold text-xs tracking-wider uppercase py-3 border border-outline-variant transition-all text-center flex items-center justify-center gap-2"
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* backdrop click closes modal */}
          <div 
            className="fixed inset-0 bg-primary/80 transition-opacity" 
            onClick={() => setActiveProjectModal(null)} 
          />

          <div className="bg-white border-2 border-primary max-w-2xl w-full relative z-10 overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]">
            {/* Top design accent bar */}
            <div className="h-2 bg-safety-yellow" />

            {/* Header */}
            <div className="p-6 border-b border-outline-variant flex justify-between items-start gap-4">
              <div className="flex flex-col gap-1">
                <span className="bg-primary text-safety-yellow text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 w-max">
                  PROIECT {activeProjectModal.category.toUpperCase()}
                </span>
                <h2 className="font-display text-xl md:text-2xl font-extrabold text-primary uppercase tracking-tight">
                  {activeProjectModal.title}
                </h2>
              </div>
              <button 
                onClick={() => setActiveProjectModal(null)}
                className="text-primary hover:bg-surface-container p-1 rounded-none border border-outline-variant/50"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto flex flex-col gap-6 font-sans text-xs text-on-surface-variant leading-relaxed">
              <img 
                alt={activeProjectModal.title} 
                className="w-full h-64 object-cover border border-outline-variant"
                src={activeProjectModal.imageUrl}
                referrerPolicy="no-referrer"
              />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-surface p-4 border border-outline-variant">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-outline">LOCAȚIE</span>
                  <span className="font-bold text-primary mt-0.5">{activeProjectModal.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-outline">AN EXECUȚIE</span>
                  <span className="font-bold text-primary mt-0.5">{activeProjectModal.year}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-outline">CRITERIU</span>
                  <span className="font-bold text-primary mt-0.5">{activeProjectModal.capacity}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-outline">ECHIPAMENT</span>
                  <span className="font-bold text-primary mt-0.5">{activeProjectModal.equipment}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="font-display font-extrabold text-primary uppercase text-sm border-b pb-1">
                  Descrierea Lucrării & Detalii Tehnice
                </h4>
                <p>{activeProjectModal.details}</p>
                <p className="mt-2">
                  Toate ridicările mecanizate au fost planificate prealabil prin intermediul diagramelor noastre electronice de sarcină, asigurând o marjă de siguranță de peste 120% conform standardelor ISCIR aplicate în vigoare.
                </p>
              </div>
            </div>

            {/* Footer triggers quick booking inquiry */}
            <div className="p-6 border-t border-outline-variant bg-surface flex justify-between items-center gap-4">
              <div className="text-left">
                <p className="text-[10px] uppercase text-outline font-bold">Aveți un proiect similar?</p>
                <p className="text-primary font-bold text-xs mt-0.5">Suntem gata să ridicăm sarcina!</p>
              </div>
              <button 
                onClick={() => {
                  const srvName = `Închiriere Macara pentru ${activeProjectModal.title}`;
                  setActiveProjectModal(null);
                  onOpenQuoteModal(srvName);
                }}
                className="bg-safety-yellow text-primary px-5 py-3 font-bold text-xs uppercase border border-primary industrial-shadow hover:bg-primary hover:text-safety-yellow transition-all"
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
