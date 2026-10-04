import { de } from './de';
import { en } from './en';

export type Lang = 'de' | 'en';

const dictionaries = { de, en };

export function useT(lang: Lang) {
  return dictionaries[lang];
}

export const routes = {
  de: { home: '/', imprint: '/impressum/', privacy: '/datenschutz/', thanks: '/danke/' },
  en: { home: '/en/', imprint: '/en/imprint/', privacy: '/en/privacy/', thanks: '/en/thanks/' },
} as const;

export type RouteKey = keyof (typeof routes)['de'];

/** The same page in both languages, used by the language switcher and hreflang tags. */
export function alternatesFor(key: RouteKey) {
  return { de: routes.de[key], en: routes.en[key] };
}

// Section ids are shared by both languages so anchors survive a language switch.
/** Sections linked in the header navigation. */
export const navSections = ['projects', 'services', 'process', 'pricing', 'contact'] as const;
/** Sections linked in the footer. */
export const footerSections = ['projects', 'services', 'pricing', 'contact'] as const;
