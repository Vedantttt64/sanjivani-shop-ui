/**
 * Centralized z-index tokens for Sanjivani Farms Master Polish v10
 * Hierarchy: popup > drawer > sheet > nav > chat
 */
export const Z_INDEX = {
  base: 10,
  chat: 40,
  nav: 45,
  sheet: 50,
  drawer: 60,
  popup: 70,
  toast: 80,
  modal: 90,
} as const;

export type ZIndexLevel = keyof typeof Z_INDEX;
