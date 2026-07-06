/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BLUEPRINT_URL } from '../data';

export default function LiftingCalculator() {
  const [loadWeight, setLoadWeight] = useState<number>(5.5); // tons
  const [boomLength, setBoomLength] = useState<number>(20); // meters
  const [workingRadius, setWorkingRadius] = useState<number>(8); // meters

  // Constrain radius to not exceed boom length
  const activeRadius = Math.min(workingRadius, boomLength);

  // Approximate load chart model for XCMG XCT25
  // Max load at 3m radius is 25 tons. Limit decreases as radius increases.
  const calculateMaxAllowedLoad = (radius: number, length: number): number => {
    if (radius < 3) radius = 3;
    // Base capacity decreases inversely with radius
    let baseCapacity = 75 / radius;
    // Capacity also decreases with boom length due to arm weight and deflection
    const lengthFactor = 1.1 - (length / 85);
    let calculated = baseCapacity * lengthFactor;
    
    // Clamp to absolute max and min values
    if (calculated > 25) calculated = 25;
    if (calculated < 1.2) calculated = 1.2;
    
    return parseFloat(calculated.toFixed(1));
  };

  const maxAllowedLoad = calculateMaxAllowedLoad(activeRadius, boomLength);
  const utilizationPercent = Math.round((loadWeight / maxAllowedLoad) * 100);

  // Calculate physical boom angle in degrees: cos(angle) = radius / length
  const calculateBoomAngle = (radius: number, length: number): number => {
    if (radius >= length) return 0;
    const rad = Math.acos(radius / length);
    return Math.round((rad * 180) / Math.PI);
  };

  const boomAngle = calculateBoomAngle(activeRadius, boomLength);

  const isPhysicallyImpossible = workingRadius > boomLength;
  const isOverloaded = loadWeight > maxAllowedLoad;

  return (
    <div className="w-full py-16 px-6 md:px-16 max-w-7xl mx-auto flex flex-col gap-10">
      
      {/* Header */}
      <section className="border-l-4 border-safety-yellow pl-6">
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
          CALCULATOR DIAGRAMĂ SARCINI
        </h1>
        <p className="font-sans text-sm text-gray-400 max-w-xl mt-2 leading-relaxed">
          Simulator interactiv de stabilitate și diagramă de sarcină pentru automacaraua <strong className="font-bold text-white">XCMG XCT25</strong>. Introduceți parametrii de ridicare pentru a verifica coeficientul de siguranță.
        </p>
      </section>

      {/* Calculator Body Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Left Side: Sliders Controls */}
        <section className="bg-[#111111] border border-[#222222] p-8 relative flex flex-col gap-6 rounded-2xl shadow-lg">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600"></div>
          
          <h2 className="font-display text-base font-extrabold text-white uppercase border-b border-[#222222] pb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-safety-yellow text-xl">tune</span>
            Parametri de Ridicare
          </h2>

          {/* Input 1: Load Weight */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-sans font-bold items-center">
              <span className="text-gray-500 uppercase tracking-wider">1. GREUTATE SARCINĂ (TONE)</span>
              <span className="text-white text-sm font-extrabold font-mono bg-[#0D0D0D] px-2.5 py-1 border border-[#222222] rounded-lg">
                {loadWeight} Tone
              </span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="25" 
              step="0.5"
              value={loadWeight}
              onChange={(e) => setLoadWeight(parseFloat(e.target.value))}
              className="w-full h-2 bg-[#0D0D0D] border border-[#222222] rounded-lg appearance-none cursor-pointer accent-safety-yellow"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-semibold">
              <span>Min: 1T (Sarcini Uzuale)</span>
              <span>Max Utilaj: 25T (Greu)</span>
            </div>
          </div>

          {/* Input 2: Boom Length */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-sans font-bold items-center">
              <span className="text-gray-500 uppercase tracking-wider">2. LUNGIME BRAȚ TELESCOPIC (METRI)</span>
              <span className="text-white text-sm font-extrabold font-mono bg-[#0D0D0D] px-2.5 py-1 border border-[#222222] rounded-lg">
                {boomLength} Metri
              </span>
            </div>
            <input 
              type="range" 
              min="10.5" 
              max="34" 
              step="0.5"
              value={boomLength}
              onChange={(e) => {
                const len = parseFloat(e.target.value);
                setBoomLength(len);
                // constrain working radius to not exceed boom length
                if (workingRadius > len) {
                  setWorkingRadius(len);
                }
              }}
              className="w-full h-2 bg-[#0D0D0D] border border-[#222222] rounded-lg appearance-none cursor-pointer accent-safety-yellow"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-semibold">
              <span>Min Telescop: 10.5m</span>
              <span>Max Telescop: 34m</span>
            </div>
          </div>

          {/* Input 3: Working Radius */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-sans font-bold items-center">
              <span className="text-gray-500 uppercase tracking-wider">3. RAZĂ DE OPERARE / WORKING RADIUS (METRI)</span>
              <span className="text-white text-sm font-extrabold font-mono bg-[#0D0D0D] px-2.5 py-1 border border-[#222222] rounded-lg">
                {workingRadius} Metri
              </span>
            </div>
            <input 
              type="range" 
              min="3" 
              max="30" 
              step="0.5"
              value={workingRadius}
              onChange={(e) => setWorkingRadius(parseFloat(e.target.value))}
              className="w-full h-2 bg-[#0D0D0D] border border-[#222222] rounded-lg appearance-none cursor-pointer accent-safety-yellow"
            />
            <div className="flex justify-between text-[10px] text-gray-500 font-semibold">
              <span>Min Operare: 3m</span>
              <span>Distanta Max: 30m</span>
            </div>
          </div>

          {/* Physical status table helper */}
          <div className="border border-[#222222] p-4 bg-[#0D0D0D] rounded-xl flex flex-col gap-1.5 font-sans text-xs">
            <div className="flex justify-between"><span className="text-gray-400 font-medium">Unghi Înclinare Braț:</span> <span className="font-bold text-safety-yellow font-mono">{boomAngle}° de la Orizontală</span></div>
            <div className="flex justify-between"><span className="text-gray-400 font-medium">Sarcina Maximă Admisă la {activeRadius}m:</span> <span className="font-bold text-white font-mono">{maxAllowedLoad} Tone</span></div>
          </div>

        </section>

        {/* Right Side: Visual Output and Safety Indicators */}
        <section className="flex flex-col gap-6">
          
          {/* Main Safety Status Banner */}
          <div className={`border p-6 flex items-center gap-4 shadow-sm relative overflow-hidden transition-colors rounded-2xl ${
            isPhysicallyImpossible ? 'bg-amber-950/30 border-amber-500/50 text-amber-200' :
            isOverloaded ? 'bg-red-950/30 border-red-500/50 text-red-200 animate-pulse' :
            'bg-green-950/30 border-green-500/50 text-green-200'
          }`}>
            <span className="material-symbols-outlined text-4xl text-safety-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>
              {isPhysicallyImpossible ? 'warning' : isOverloaded ? 'report' : 'check_circle'}
            </span>
            <div>
              <h3 className="font-display font-extrabold text-[10px] uppercase tracking-widest text-gray-400">
                STATUS STABILITATE FLOTĂ
              </h3>
              <p className="font-sans font-bold text-sm mt-0.5">
                {isPhysicallyImpossible ? 'Raza de operare depășește lungimea brațului!' :
                 isOverloaded ? 'SUPRA-SARCINĂ CRITICĂ! Risc major de răsturnare.' :
                 'SARCINĂ CORECTĂ. Configurația se încadrează în limitele de siguranță.'}
              </p>
            </div>
          </div>

          {/* Utilization Progress indicator */}
          <div className="bg-[#111111] border border-[#222222] p-6 flex flex-col gap-3 rounded-2xl">
            <div className="flex justify-between items-center text-xs font-sans font-bold">
              <span className="text-gray-500 uppercase tracking-wider">Rata de Utilizare a Capacității</span>
              <span className={`font-mono text-sm ${isOverloaded ? 'text-red-500 font-extrabold' : 'text-white'}`}>
                {isPhysicallyImpossible ? 'N/A' : `${utilizationPercent}%`}
              </span>
            </div>

            {/* Custom high contrast loading bar progress */}
            <div className="w-full bg-[#0D0D0D] h-4 border border-[#222222] rounded-lg overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  isPhysicallyImpossible ? 'w-0' :
                  utilizationPercent > 100 ? 'bg-red-500' :
                  utilizationPercent > 80 ? 'bg-amber-500' :
                  'bg-green-500'
                }`}
                style={{ width: `${isPhysicallyImpossible ? 0 : Math.min(utilizationPercent, 100)}%` }}
              />
            </div>

            <p className="text-[10px] text-gray-400 leading-relaxed">
              *Ingineria română și internațională recomandă operarea sub <strong>85%</strong> din sarcina de proiect pentru a amortiza rafelele de vânt imprevizibile sau denivelările minore de stabilizare ale calajului.
            </p>
          </div>

          {/* Interactive SVG Crane Arm angle indicator */}
          <div className="bg-[#111111] text-white p-6 border border-[#222222] rounded-2xl relative flex flex-col items-center justify-center min-h-[200px] overflow-hidden">
            {/* Minimal coordinate blueprint background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            
            <h4 className="absolute top-3 left-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
              SCHIȚĂ COEFICIENT SIGURANȚĂ (PROFIL TRIDIMENSIONAL)
            </h4>

            {/* Trig boom line illustration */}
            <div className="relative w-full max-w-sm h-36 flex items-end justify-center">
              <svg className="w-64 h-32 text-white" viewBox="0 0 200 100">
                {/* Ground Line */}
                <line x1="10" y1="90" x2="190" y2="90" stroke="#222222" strokeWidth="2" strokeDasharray="3,3" />
                
                {/* Crane Chassis Box */}
                <rect x="50" y="75" width="40" height="15" fill="#1A1A1A" stroke="#333333" strokeWidth="1" rx="2" />
                {/* Wheels */}
                <circle cx="60" cy="90" r="4" fill="#333333" />
                <circle cx="80" cy="90" r="4" fill="#333333" />

                {/* Pivot Joint Point */}
                <circle cx="70" cy="75" r="3" fill="#F59E0B" />

                {/* Trigonometric Boom Line */}
                {/* Base angle center point at (70, 75). Let's draw line tip */}
                {(() => {
                  const angleRad = (boomAngle * Math.PI) / 180;
                  // Map scale length (10.5m - 34m scaled to 30px - 80px)
                  const scaledLength = 30 + ((boomLength - 10.5) / 23.5) * 50;
                  const targetX = 70 + scaledLength * Math.cos(angleRad);
                  const targetY = 75 - scaledLength * Math.sin(angleRad);

                  return (
                    <>
                      {/* Crane Arm */}
                      <line 
                        x1="70" 
                        y1="75" 
                        x2={targetX} 
                        y2={targetY} 
                        stroke={isOverloaded ? '#ef4444' : '#F59E0B'} 
                        strokeWidth="3.5" 
                        strokeLinecap="round"
                      />
                      {/* Suspended Hook and Load line */}
                      <line 
                        x1={targetX} 
                        y1={targetY} 
                        x2={targetX} 
                        y2={targetY + 20} 
                        stroke="#ffffff" 
                        strokeWidth="1" 
                      />
                      {/* Load cube */}
                      <rect 
                        x={targetX - 5} 
                        y={targetY + 20} 
                        width="10" 
                        height="8" 
                        fill={isOverloaded ? '#ef4444' : '#ffffff'} 
                        stroke="#000000" 
                        strokeWidth="0.5" 
                        rx="1"
                      />
                    </>
                  );
                })()}

                {/* Angle Info Label */}
                <text x="110" y="30" fill="#F59E0B" fontSize="9" fontWeight="bold">
                  Braț: {boomAngle}°
                </text>
              </svg>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}
