/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, Testimonial } from './types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AP1WRLuj9gcBx1BLxY2cpsmRbrmq5_jDUWdfQT_0xeMbK6fOs7S8ozdYDPMP1BFrmgJikL8aJ9k2wXjArEPHiew5drXTcXawju5XwPsqtVsURJBHNoJDKE9GLbXvZXfNyLnaoyfdvIpQgaDi6WZos5RQFq_hm8nW2srtXaFqgIJDU1E-E9F_Lsb8CCBXEDmTYHSTyaga15CzMHlZX511ATUjp_i1378LhZFjYvRn2G7g-2d6uWlBahmPKF0DRvcU";

export const HERO_BG_URL = "https://lh3.googleusercontent.com/aida/AP1WRLtc4SGFjOxh10i61jFo6kW7jYIlx8_vJ-VUZR_4UpD0lfgojtSogaD-yMmvzWDiB71H_KvAMSStTrDKGUlZJ6U9-3goAQgLOkTXXzAN6DunFjYNxMO4QDq6TvrWiadFmT1wBkyqP3q01iqo_G-vWPUK-L4VLo_rlTqP7VD8gGiuTOoRaVyBLncZTYHK8YqmsPydTnHxfcMcln9q8qMRxTBoQkgocXK4hZwiv8KP_DnqwDVl6Gi136FU6iCn";

export const CRANE_ACTION_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuAPuR5XZ3BQujMDO8r8B5ujvC8DChAWj-zi4LdJZIkxNMCmgsxIMjnCWZ-M53Dg3LN-8i0AQNiE3SeCXL7G531S-ostzTCNGz_zWw7MOAnsrQYcBOVIiFJlGf0uEA8RM7KWTw2K32gz6OPGlARsPFno7wOw5BdoucnxsFwC18MVC4Ma1_uRjeyWSC49C2BYrzLFJxluxMZG71rNDGWnJ_bQd33XkygqdOztzAhiOcyRGBbV2LDWgn6rIDmVxc7kb6uhl5bRks4xSBDP";

export const BLUEPRINT_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuCXX7j2LtcvP5RXE56cWlJEz9xvYl1yWRU9NgBBk7nIaFK5ZDLuoakmFxjEL9D3o052TiEriwvk7QhjAO4W6urBUgmp0WDayKddLFbXSaaxlpiP3-fWHX3o8XIIbeb3DTcXiL4UaWqF7NQCgV7Dm_Ai0tL-o3nJqryaaP56ntyN51XChJJvq3JfN0Tp_XuVwXBNnvbem1RZ7_T28aKOYCys4wxllXmWuplX7Hn49DZTzqdemStPRUxT3Dz4cigWAcXfklFaXIyL9aQH";

export const CRANE_SERVICE_COVER = "https://lh3.googleusercontent.com/aida/AP1WRLv7joTdVS5k_gKsl9WwFhHt4Im07chu7oPTdFCFMcFQBY84HUKj70ktl3jHk-92suNnWzAMoUF0MxdWuUMABZFCq5LHL9yQ0ykNr3vFEBU8JkazfRUHPiSW8MODn8yOokVjH-027CUFLzHfJ8pO0mJEwRoYTLwBPa1kUgsoXNigzOPRI36_3Wu-ZJqeftpAl6zwTinNb-KknhddLxbG4aRF6cBois0kn8pjuw_yMGwPqGx2Qbq35pVY1RQe";

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Viaduct Centura Chișinău",
    category: "Infrastructură",
    year: 2023,
    description: "Montarea grinzilor prefabricate de 40 de tone folosind macarale senilate de mare capacitate. Un proiect critic pentru descongestionarea traficului regional, necesitând precizie milimetrică în condiții de vânt puternic.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCymziBEuEnBcuDacPbwiPANu8_8GHNHdHTAZ57z8aPNWvLH5ygNVcdSQzpZPOD9NVB0bBf4rwAxA01Rj3vSGctxmeHWoW8l4FHgWi0fq5RHRYW36MSBkRrWPGxwM3_j391yp3BYLCDLUe3C8k6hFUy38nR3xCxyk7x-mXeBUON_oZE2k75agSyqHqj9sU6gZMR6SJe9wLRuA1QY4I41EWf8zs-qCpnSD9yuGakF1VoJhYs9jXAB-1Q-8vjwrUAH_H07fSee-Rr8vgV",
    capacity: "400T capacitate",
    duration: "14 luni",
    location: "Chișinău",
    equipment: "XCMG XCT25 & Crawler 400T",
    details: "Acest viaduct reprezintă un nod de legătură strategic pentru Republica Moldova. Echipa Vertical Construct a coordonat cu succes ridicarea a peste 120 de grinzi prefabricate de beton cu lungimi de până la 24 de metri și o greutate individuală de 40 de tone. Toleranța de poziționare a fost de doar ±5mm, o realizare remarcabilă pentru echipamentele de mare tonaj utilizate."
  },
  {
    id: "p2",
    title: "Hala Producție Cahul",
    category: "Industrial",
    year: 2022,
    description: "Ridicarea și fixarea structurii metalice principale pentru un complex industrial modern. Utilizarea macaralelor mobile pentru asamblarea rapidă a cadrelor grele, respectând standarde stricte de siguranță industrială.",
    imageUrl: "https://lh3.googleusercontent.com/aida/AP1WRLsFouSTEEEeWE0UifXGOV8o8xU9kueh85E-i4-h2kwhP6svXh84VWuw07eRbmrRskRzJPYz8VPEStdn0S9aPJcLGdgbTRZS7vKTBcWF06nH6hO73duCz3CSx_0F0q0F68dMP9HIiMgaJeEHM1c0OQrNyALjiIcPEn5KJtwZwi5aFget9eEgI0kxYnzLnvg7WqImHwVYZpDUwRtPATMWTV7VzDmJ5ryZvth6eZSlFJlXAZr4dQcasNitC4Gy",
    capacity: "Structură Metalică",
    duration: "12,000 mp",
    location: "Cahul",
    equipment: "XCMG XCT25 (2 unități)",
    details: "Hala industrială din Cahul a necesitat o asamblare tridimensională sincronizată a cadrelor de oțel. Folosind două automacarale XCMG XCT25 în mod tandem, am ridicat stâlpii și fermele principale de acoperiș la o înălțime de 18 metri. Întregul proces a fost finalizat cu 3 săptămâni înainte de termenul limită datorită mobilității ridicate a echipamentului."
  },
  {
    id: "p3",
    title: "Complex Locativ Bălți",
    category: "Rezidențial",
    year: 2024,
    description: "Asistență pe termen lung cu macarale turn și automacarale mobile pentru construcția unui ansamblu rezidențial premium de 18 etaje. Coordonarea logisticii la înălțime și turnarea betonului în regim continuu.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1M8DpvlGxhWB7NvQl8-ydgxwpfpZlNjjRVgnCVZ7Jrk_S-ih0eSmxshnIBI1Suu-fMTDxbq0Epy1Zd0BBGJqyhAWKWvBFUxWI0vCwiIWYQ_hYQinoxt74t68tBt5YR6F7Yso-ack31HhkHuKFHcGmm-sJJDtkf_lob3uOROLgM2t8s5N_lo2TutL3XHJNi8PKF61rho0Ot3Xo_AQQN5ZIO-CMVc-HLNkxpLLfGSfytVHX3usVL-igD5dPN8TIIUDtkFzSPKjcobCH",
    capacity: "18 Etaje",
    duration: "65m Înălțime",
    location: "Bălți",
    equipment: "XCMG XCT25 & Tower Crane 8T",
    details: "Unul dintre cele mai înalte ansambluri rezidențiale din Nordul țării. În fazele critice de turnare a structurii de rezistență, automacaraua noastră rapidă XCMG XCT25 a fost utilizată pentru ridicarea cofrajelor metalice și aprovizionarea cu oțel-beton la etajele inferioare și medii, sprijinind macara-turn principală și sporind productivitatea cu 40%."
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Închiriere Automacarale",
    icon: "precision_manufacturing",
    description: "Flotă modernă XCMG, capacitate de ridicare până la 25 tone, cu braț telescopic extins pentru precizie maximă în spații restrânse.",
    ctaText: "DETALII COMPREHENSIVE",
    fullSpecs: {
      "Capacitate max. de ridicare": "25 Tone",
      "Lungime braț principal": "10.5m - 34m",
      "Lungime cu prelungitor (jib)": "42.3m",
      "Viteza maximă de deplasare": "80 km/h",
      "Model de referință": "XCMG XCT25",
      "Sistem de siguranță": "Senzor unghi, limitator moment, protecție linie electrică",
      "Certificare": "Autorizat ISCIR / CNCAN"
    }
  },
  {
    id: "s2",
    title: "Transport Utilaje Grele",
    icon: "local_shipping",
    description: "Logistică specializată pentru echipamente de tonaj depășit. Platforme trailere agabaritice, autorizații speciale și escortă rutieră.",
    ctaText: "SOLICITĂ TRANSPORT",
    fullSpecs: {
      "Capacitate utilă trailer": "Până la 60 Tone",
      "Tip platformă": "Gât de lebădă extensibil, pat coborât",
      "Servicii incluse": "Obținere autorizații AST, escortă autorizată, analiză traseu",
      "Acoperire geografică": "Națională (Republica Moldova) & Internațională"
    }
  },
  {
    id: "s3",
    title: "Consultanță Tehnică",
    icon: "engineering",
    description: "Evaluare tehnică la fața locului și planificare logistică detaliată (Lifting Plans) pentru optimizarea proceselor de ridicare în siguranță.",
    ctaText: "PROGRAMEAZĂ EVALUARE",
    fullSpecs: {
      "Ingineri specializați": "Planificatori certificați CNCAN / ISCIR",
      "Documente livrate": "Planuri de ridicare 2D/3D (Lifting Plans), studiu de sol",
      "Calcul de sarcini": "Software avansat de simulare a centrului de greutate",
      "Asistență pe șantier": "Supervizare tehnică dedicată pe durata ridicărilor complexe"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Ing. Andrei Cojocaru",
    company: "Moldova Construct S.A.",
    text: "Am închiriat automacaraua XCMG XCT25 pentru ridicarea grinzilor metalice la un depozit industrial. Operatorul a lucrat excepțional de curat, iar utilajul s-a prezentat în stare tehnică impecabilă. Recomand cu încredere Vertical Construct!",
    rating: 5
  },
  {
    id: "t2",
    author: "Radu Spătaru",
    company: "Director LogisGroup",
    text: "Echipa lor ne-a oferit consultanță de la zero și ne-a ajutat să obținem toate autorizațiile agabaritice într-un timp record. Transportul utilajului greu a sosit exact la ora stabilită. Foarte profesioniști!",
    rating: 5
  },
  {
    id: "t3",
    author: "Natalia Cebotari",
    company: "Project Manager, NordImobil",
    text: "Colaborăm cu Vertical Construct de peste 2 ani pentru șantierele noastre din Bălți. Macaralele lor sunt moderne, operatorii sunt prompți și au asigurat continuitatea lucrărilor fără niciun incident tehnic.",
    rating: 5
  }
];
