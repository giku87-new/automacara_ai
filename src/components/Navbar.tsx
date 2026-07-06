/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { LOGO_URL } from '../data';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenQuoteModal: () => void;
}

export default function Navbar({ currentTab, setCurrentTab, onOpenQuoteModal }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'acasa', label: 'Acasă' },
    { id: 'servicii', label: 'Servicii' },
    { id: 'portofoliu', label: 'Portofoliu' },
    { id: 'contact', label: 'Contact' },
    { id: 'calculator', label: 'Calculator Sarcini' },
    { id: 'admin', label: 'Panou Admin' }
  ];

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Main Header */}
      <header className="bg-primary border-b border-outline-variant sticky top-0 z-50 transition-all duration-300">
        <div className="flex justify-between items-center h-20 px-4 md:px-16 max-w-7xl mx-auto">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => handleTabClick('acasa')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-700 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md">
              <span className="text-white font-extrabold text-lg">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg md:text-xl font-extrabold text-white tracking-tighter uppercase leading-none">
                VERTICAL CONSTRUCT
              </span>
              <span className="text-[9px] text-safety-yellow font-bold tracking-widest uppercase">
                MOLDOVA CRANES
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link List */}
          <nav className="hidden lg:flex gap-1 h-full items-center">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabClick(link.id)}
                  className={`relative h-full px-4 font-sans font-bold text-xs tracking-wider uppercase transition-all duration-150 border-b-4 focus:outline-none ${
                    isActive 
                      ? 'text-safety-yellow border-safety-yellow bg-primary-container/40' 
                      : 'text-white border-transparent hover:text-safety-yellow hover:bg-primary-container/20'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:block">
            <button 
              onClick={onOpenQuoteModal}
              className="bg-safety-yellow text-primary font-sans font-bold text-xs tracking-wider uppercase px-5 py-3 hover:bg-white hover:text-primary active:scale-95 duration-150 border border-primary industrial-shadow transition-all"
            >
              SOLICITĂ OFERTĂ
            </button>
          </div>

          {/* Mobile Menu Trigger & Offer Icons */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={onOpenQuoteModal}
              aria-label="Cere ofertă rapidă"
              className="text-safety-yellow hover:bg-primary-container/50 p-2 active:scale-95 duration-150 flex items-center justify-center border border-safety-yellow/30"
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                add_circle
              </span>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu" 
              className="text-safety-yellow hover:bg-primary-container/50 p-2 active:scale-95 duration-150 border border-safety-yellow/30"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-Out Navigation Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay background shade */}
          <div 
            className="fixed inset-0 bg-primary/80 z-[60] transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          <aside className="fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-surface-container-lowest border-r border-outline-variant z-[70] flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div className="p-6 border-b border-outline-variant bg-primary flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-amber-500 to-orange-700 flex items-center justify-center shadow-sm">
                  <span className="text-white font-extrabold text-sm">V</span>
                </div>
                <span className="font-display font-extrabold text-xs text-white tracking-tighter uppercase">
                  VERTICAL CONSTRUCT
                </span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-safety-yellow p-1 hover:bg-primary-container/40 rounded-none"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Navigation Drawer links list */}
            <nav className="flex-1 py-4 flex flex-col font-sans font-bold text-xs tracking-wider uppercase">
              {navLinks.map((link) => {
                const isActive = currentTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleTabClick(link.id)}
                    className={`flex items-center gap-4 px-6 py-4 text-left transition-all duration-150 border-l-4 relative ${
                      isActive 
                        ? 'bg-safety-yellow/10 text-primary border-safety-yellow font-extrabold' 
                        : 'text-on-surface hover:bg-surface-container border-transparent'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">
                      {link.id === 'acasa' && 'home'}
                      {link.id === 'servicii' && 'engineering'}
                      {link.id === 'portofoliu' && 'construction'}
                      {link.id === 'contact' && 'contact_phone'}
                      {link.id === 'calculator' && 'calculate'}
                      {link.id === 'admin' && 'analytics'}
                    </span>
                    {link.label}
                    {link.id === 'admin' && (
                      <span className="ml-auto bg-primary text-safety-yellow text-[9px] px-2 py-0.5 font-bold uppercase tracking-normal">
                        LIVE TEST
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick stats / contact on drawer footer */}
            <div className="p-6 bg-surface-container border-t border-outline-variant text-[11px] font-medium text-on-surface-variant flex flex-col gap-2">
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">phone</span>
                +373 60 000 000
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">mail</span>
                contact@verticalconstruct.md
              </p>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="mt-2 w-full bg-safety-yellow text-primary py-3 text-center text-[10px] font-bold uppercase tracking-wider border border-primary industrial-shadow hover:bg-primary hover:text-safety-yellow transition-all"
              >
                SOLICITĂ ACUM
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
