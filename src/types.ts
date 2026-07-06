/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ProjectCategory = 'Toate' | 'Infrastructură' | 'Industrial' | 'Rezidențial';

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'Toate'>;
  year: number;
  description: string;
  imageUrl: string;
  capacity: string;
  duration: string;
  details: string;
  location: string;
  equipment: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  fullSpecs?: Record<string, string>;
  ctaText: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  phone: string;
  service: string;
  details: string;
  date: string;
  status: 'În aşteptare' | 'Aprobat' | 'Respins';
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  text: string;
  rating: number;
}
