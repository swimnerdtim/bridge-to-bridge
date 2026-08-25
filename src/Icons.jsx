// Clean stroke-based line icons for the details cards.
// Inherit color via currentColor; sized by CSS (.info-card .icon svg).

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" {...base} aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
      <path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2" />
    </svg>
  )
}

export function IconPin() {
  return (
    <svg viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M12 21c4.5-4.2 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 2.5 6.8 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

export function IconFlag() {
  return (
    <svg viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M5.5 21V3.5" />
      <path d="M5.5 4.5c3-1.6 6 1.2 9 0 1.4-.55 2.5-.55 3.9 0v8c-1.4.55-2.5.55-3.9 0-3-1.2-6 1.6-9 0" />
    </svg>
  )
}

export function IconLifebuoy() {
  return (
    <svg viewBox="0 0 24 24" {...base} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" />
    </svg>
  )
}

export function IconWave() {
  return (
    <svg viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M2.5 9c1.6 0 1.6-1.6 3.2-1.6S7.3 9 8.9 9s1.6-1.6 3.2-1.6S13.7 9 15.3 9s1.6-1.6 3.2-1.6S20.1 9 21.7 9" />
      <path d="M2.5 13.5c1.6 0 1.6-1.6 3.2-1.6s1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6" />
      <path d="M2.5 18c1.6 0 1.6-1.6 3.2-1.6s1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6 1.6-1.6 3.2-1.6 1.6 1.6 3.2 1.6" />
    </svg>
  )
}

export function IconTicket() {
  return (
    <svg viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v2a2 2 0 0 0 0 5v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-2a2 2 0 0 0 0-5Z" />
      <path d="M14 6v12" strokeDasharray="1.5 2.5" />
    </svg>
  )
}
