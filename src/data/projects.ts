export type SiteStatus = 'live' | 'pending';

export type Project = {
  slug: string;
  name: string;
  category: string;
  role: string;
  stage: string;
  layer: string;
  siteUrl: string;
  siteStatus: SiteStatus;
  signal: string;
  thesis: string;
  focus: string[];
};

export type Layer = {
  title: string;
  projects: string[];
  note: string;
};

export const layers: Layer[] = [
  {
    title: 'Core Intelligence',
    projects: ['AIS AI', 'Semanta AI', 'Gamma AI Hedge Fund'],
    note: 'Foundation models, data generation and autonomous financial intelligence.'
  },
  {
    title: 'Core Infrastructure',
    projects: ['ERA Cloud', 'ERA DB'],
    note: 'Compute, inference, storage and unified data control plane.'
  },
  {
    title: 'Data / Analytics',
    projects: ['ERA Prism Studio - Data Science Studio'],
    note: 'Decision-grade observability and data science workflows in one studio.'
  },
  {
    title: 'Consumer / Platform',
    projects: ['SomeBox', 'One Browser', 'Quantum Messenger', 'Mind Music'],
    note: 'Daily products where ERA1 intelligence becomes practical user value.'
  },
  {
    title: 'Fintech',
    projects: ['ERA Pay', 'MoneyOne'],
    note: 'Payments and transfer rails for consumer and business transactions.'
  }
];

export const projects: Project[] = [
  {
    slug: 'ais-ai',
    name: 'AIS AI',
    category: 'AI / Intelligence',
    role: 'Own family of ERA1 foundation models and orchestration logic.',
    stage: 'Core',
    layer: 'Core Intelligence',
    siteUrl: 'https://ais-ai.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Model nucleus',
    thesis: 'AIS AI is the model nucleus of ERA1: a native intelligence layer designed to support products, infrastructure and financial decision systems across the concern.',
    focus: ['Foundation model family', 'Agentic orchestration', 'Shared intelligence APIs']
  },
  {
    slug: 'semanta',
    name: 'Semanta AI',
    category: 'AI / Data Factory',
    role: 'Synthetic data, fine-tuning workflows, standards and world simulation.',
    stage: 'Build',
    layer: 'Core Intelligence',
    siteUrl: 'https://semanta.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Data factory',
    thesis: 'Semanta AI turns data generation, dataset standards and model engineering into a production factory for the broader ERA1 intelligence stack.',
    focus: ['Synthetic datasets', 'World simulation', 'Fine-tuning workflows']
  },
  {
    slug: 'gamma-ai-hedge-fund',
    name: 'Gamma AI Hedge Fund',
    category: 'AI / Finance',
    role: 'Forecasting, signals and autonomous execution with strict risk logic.',
    stage: 'Capital',
    layer: 'Core Intelligence',
    siteUrl: 'https://gamma.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Autonomous markets',
    thesis: 'Gamma applies ERA1 intelligence to market forecasting, portfolio signals and risk-governed execution logic.',
    focus: ['Forecasting systems', 'Signal generation', 'Risk logic']
  },
  {
    slug: 'era-cloud',
    name: 'ERA Cloud',
    category: 'Infrastructure',
    role: 'Control plane for compute, inference, storage and server capacity.',
    stage: 'Infra',
    layer: 'Core Infrastructure',
    siteUrl: 'https://cloud.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Capacity router',
    thesis: 'ERA Cloud is the routing and control layer for compute, inference, storage and capacity across ERA1 products.',
    focus: ['Compute routing', 'Inference capacity', 'Storage orchestration']
  },
  {
    slug: 'era-db',
    name: 'ERA DB',
    category: 'Infrastructure / Data',
    role: 'Unified PostgreSQL + ClickHouse platform with bridge and AI gateway.',
    stage: 'Infra',
    layer: 'Core Infrastructure',
    siteUrl: 'https://db.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Unified data plane',
    thesis: 'ERA DB provides the unified transactional and analytical data layer for products that need PostgreSQL, ClickHouse, CDC and AI gateway patterns.',
    focus: ['PostgreSQL + ClickHouse', 'CDC bridge layer', 'AI data gateway']
  },
  {
    slug: 'era-prism-studio',
    name: 'ERA Prism Studio',
    category: 'Analytics',
    role: 'Data Science Studio for strategic analytics, observability and decision workflows.',
    stage: 'Data',
    layer: 'Data / Analytics',
    siteUrl: 'https://prism.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Decision studio',
    thesis: 'ERA Prism Studio is the data science and decision studio for operational analytics, observability and strategic intelligence.',
    focus: ['Decision-grade observability', 'Data science workflows', 'Strategic analytics']
  },
  {
    slug: 'somebox',
    name: 'SomeBox',
    category: 'Consumer / Platform',
    role: 'Cloud sharing system for frictionless file distribution.',
    stage: 'Product',
    layer: 'Consumer / Platform',
    siteUrl: 'https://somebox.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Sharing surface',
    thesis: 'SomeBox is a consumer cloud-sharing product for fast, simple and durable file distribution.',
    focus: ['File sharing', 'Cloud distribution', 'Consumer storage UX']
  },
  {
    slug: 'one-browser',
    name: 'One Browser',
    category: 'Consumer / Platform',
    role: 'AI-native browser with permanent free VPN experience.',
    stage: 'Product',
    layer: 'Consumer / Platform',
    siteUrl: 'https://onebrowser.grencape.xyz',
    siteStatus: 'pending',
    signal: 'AI web gateway',
    thesis: 'One Browser is the ERA1 web gateway: a browser surface designed around AI assistance and always-on private connectivity.',
    focus: ['AI-native browsing', 'Permanent free VPN', 'Privacy-first web UX']
  },
  {
    slug: 'quantum-messenger',
    name: 'Quantum Messenger',
    category: 'Consumer / Security',
    role: 'Protected messenger for next-generation private communication.',
    stage: 'Product',
    layer: 'Consumer / Platform',
    siteUrl: 'https://quantum.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Private network',
    thesis: 'Quantum Messenger is the protected communication layer for private consumer and professional messaging.',
    focus: ['Secure messaging', 'Private identity', 'Protected communication']
  },
  {
    slug: 'mind-music',
    name: 'Mind Music',
    category: 'Consumer / Experimental',
    role: 'Playlist generation by mood and voice intent description.',
    stage: 'Lab',
    layer: 'Consumer / Platform',
    siteUrl: 'https://mindmusic.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Mood interface',
    thesis: 'Mind Music is an experimental consumer project that turns voice-described mood into a fitting music experience.',
    focus: ['Voice mood input', 'Playlist generation', 'Experimental UX']
  },
  {
    slug: 'era-pay',
    name: 'ERA Pay',
    category: 'Fintech / Payments',
    role: 'Payment gateway and financial infrastructure layer.',
    stage: 'Fintech',
    layer: 'Fintech',
    siteUrl: 'https://pay.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Payment rails',
    thesis: 'ERA Pay is the payment infrastructure layer for products that need gateway logic, settlement surfaces and merchant-ready rails.',
    focus: ['Payment gateway', 'Merchant infrastructure', 'Settlement workflows']
  },
  {
    slug: 'moneyone',
    name: 'MoneyOne',
    category: 'Fintech / Transfers',
    role: 'P2P and C2C transfer product.',
    stage: 'Fintech',
    layer: 'Fintech',
    siteUrl: 'https://moneyone.grencape.xyz',
    siteStatus: 'pending',
    signal: 'Transfer product',
    thesis: 'MoneyOne is the transfer product surface for consumer and customer-to-customer money movement.',
    focus: ['P2P transfers', 'C2C payments', 'Consumer money movement']
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
