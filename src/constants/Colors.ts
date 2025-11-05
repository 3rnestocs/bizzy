// src/constants/Colors.tsx

// Colores de la paleta principal (basados en tu PDF y diseños)
const BZ_PRIMARY_BLUE = '#022546'; // Azul oscuro para botones/texto
const BZ_SECONDARY_BLUE = '#3268a7'; // Azul medio
const BZ_PRIMARY_ORANGE = '#F59E0B'; // Naranja para botones (Asumido de tus diseños)
const BZ_LIGHT_GRAY = '#dfdfdf';
const BZ_MEDIUM_GRAY = '#b5c2cf';
const BZ_TEXT_LIGHT = '#FFFFFF';
const BZ_TEXT_DARK = '#011417';

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
  },

  // Colores de Texto
  text: {
    primary: BZ_TEXT_DARK,
    secondary: BZ_MEDIUM_GRAY,
    light: BZ_TEXT_LIGHT,
  },
};