export type Layer = {
  title: string;
  projects: string[];
  note: string;
};

export const layers: Layer[] = [
  {
    title: 'Global Commodity Trading',
    projects: ['Agricultural flows', 'Energy products', 'Industrial materials'],
    note: 'International supply, sourcing, structuring and execution for raw commodity markets.'
  },
  {
    title: 'Trade Infrastructure',
    projects: ['Counterparties', 'Logistics', 'Documents', 'Settlement'],
    note: 'Operational control across suppliers, buyers, shipments, documentation and payment routes.'
  },
  {
    title: 'Market Intelligence',
    projects: ['Pricing', 'Risk monitoring', 'Deal analytics'],
    note: 'Decision support for commodity flows, commercial exposure and cross-border execution.'
  }
];
