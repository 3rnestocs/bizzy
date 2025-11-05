// src/constants/Colors.ts

// Colores de la paleta principal (basados en tu PDF y diseños)
const BZ_PRIMARY_BLUE = '#022546';
const BZ_SECONDARY_BLUE = '#3268a7';
const BZ_PRIMARY_ORANGE = '#F59E0B';
const BZ_LIGHT_GRAY = '#E5E8EB';
const BZ_MEDIUM_GRAY = '#5C738A';
const BZ_TEXT_LIGHT = '#F7FAFC';
const BZ_TEXT_DARK = '#0D141C';

// --- NUEVO COLOR ---
const BZ_INPUT_BACKGROUND = '#E8EDF5';

export default {
  // Paleta de la marca
  brand: {
    primary: BZ_PRIMARY_BLUE,
    secondary: BZ_PRIMARY_ORANGE,
    accent: BZ_SECONDARY_BLUE,
  },
  
  // Colores de UI
  ui: {
    background: BZ_TEXT_LIGHT,
    card: BZ_TEXT_LIGHT,
    border: BZ_LIGHT_GRAY,
    input: BZ_INPUT_BACKGROUND, // <-- AÑADIDO
  },

  // Colores de Texto
  text: {
    primary: BZ_TEXT_DARK,
    secondary: BZ_MEDIUM_GRAY,
    light: BZ_TEXT_LIGHT,
  },

  tabs: {
    active: BZ_TEXT_DARK,
    inactive: BZ_MEDIUM_GRAY,
  },
};