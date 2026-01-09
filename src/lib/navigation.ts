export const phoneNumber = '+49 172 5802357';
export const phoneHref = 'tel:+491725802357';

export const address = {
  street: 'Fugger Straße 15',
  zip: '48165',
  city: 'Münster',
};

export const navLinks = [
  { label: 'Start', href: '/' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Transport', href: '/transport' },
      { label: 'Flughafentransfer', href: '/flughafentransfer' },
      { label: 'Krankentransport', href: '/krankentransport' },
      { label: 'Rollstuhltransport', href: '/rollstuhltransport' },
    ],
  },
  { label: 'Taxi in Münster', href: '/taxi70-in-muenster' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;

export const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
] as const;

