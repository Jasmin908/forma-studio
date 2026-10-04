// Portfolio projects.
//
// To activate a project once its demo website exists:
//   1. demoUrl: enter the full address, e.g. 'https://cafe-lumiere.netlify.app'.
//               If the demo has its own German and English pages, use
//               { de: 'https://…/', en: 'https://…/en/' } instead.
//   2. image:   save a screenshot (ideally 1600 x 1000 px, .webp or .jpg) in
//               public/projects/ and enter its path, e.g. '/projects/cafe-lumiere.webp'
//
// While demoUrl is empty the button is disabled and shows "Demnächst".
// While image is empty a neutral placeholder preview is shown.
//
// Optional, for screenshots that are much wider than the preview frame:
//   imageFit: 'contain' shows the whole screenshot instead of cropping its
//   sides; imageBackground is the colour that fills the rest of the frame
//   (use the background colour of the demo website).

export interface Project {
  slug: string;
  title: string;
  demoUrl: string | { de: string; en: string };
  image: string;
  imageFit?: 'cover' | 'contain';
  imageBackground?: string;
  /** Colour hue (0-360) of the placeholder preview. */
  hue: number;
  category: { de: string; en: string };
  description: { de: string; en: string };
}

export const projects: Project[] = [
  {
    slug: 'cafe-lumiere',
    title: 'Café Lumière',
    demoUrl: {
      de: 'https://cafe-lumiere-concept.netlify.app/',
      en: 'https://cafe-lumiere-concept.netlify.app/en/',
    },
    image: '/projects/cafe-lumiere.webp',
    imageFit: 'contain',
    imageBackground: '#eee5d6',
    hue: 268,
    category: { de: 'Gastronomie', en: 'Hospitality / Café' },
    description: {
      de: 'Ein modernes Café-Konzept für Zürich mit Fokus auf Spezialitätenkaffee, Brunch und Pâtisserie. Der Webauftritt verbindet warme, natürliche Bildwelten mit einer ruhigen editorialen Gestaltung und einer klaren Benutzerführung.',
      en: 'A modern café concept for Zurich focused on specialty coffee, brunch and pâtisserie. The website combines warm, natural imagery with a calm editorial design and clear navigation.',
    },
  },
  {
    slug: 'nova-studio',
    title: 'NOVA Studio',
    demoUrl: {
      de: 'https://nova-studio-concept.netlify.app/',
      en: 'https://nova-studio-concept.netlify.app/en/',
    },
    image: '/projects/nova-studio.webp',
    imageFit: 'contain',
    imageBackground: '#1c0205',
    hue: 318,
    category: { de: 'Beauty & Skin', en: 'Beauty & Skin' },
    description: {
      de: 'Ein experimentelles Skin-Studio-Konzept für Zürich mit einer starken visuellen Identität. Grossformatige Typografie, intensive Burgundertöne und eine reduzierte Bildsprache verbinden Beauty, Editorial Design und interaktive Webgestaltung.',
      en: 'An experimental skin studio concept for Zurich with a strong visual identity. Large-scale typography, deep burgundy tones and restrained imagery combine beauty, editorial design and interactive web design.',
    },
  },
  {
    slug: 'atelier-27',
    title: 'ATELIER 27',
    demoUrl: {
      de: 'https://atelier-27-concept.netlify.app/',
      en: 'https://atelier-27-concept.netlify.app/en/',
    },
    image: '/projects/atelier-27.webp',
    imageFit: 'contain',
    imageBackground: '#c9d9e9',
    hue: 222,
    category: { de: 'Architektur', en: 'Architecture' },
    description: {
      de: 'Ein Architektur- und Spatial-Design-Konzept für Basel mit einer ruhigen, präzisen visuellen Identität. Schweizer Modernismus, grossformatige Typografie und eine reduzierte Bildsprache verbinden Architektur, Materialität und Editorial Design.',
      en: 'An architecture and spatial design concept for Basel with a quiet, precise visual identity. Swiss modernism, large-scale typography and restrained imagery combine architecture, materiality and editorial design.',
    },
  },
];
