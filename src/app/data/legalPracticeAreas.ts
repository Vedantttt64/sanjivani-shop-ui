export interface LegalPracticeArea {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  casesHandled?: string;
}

export const LEGAL_PRACTICE_AREAS: LegalPracticeArea[] = [
  {
    id: 'accidents-injuries',
    slug: 'accidents-injuries',
    title: 'Accidents & Injuries',
    image: '/images/legal/practice-areas/accidents-injuries.jpg',
    description: 'Expert counsel for personal injury claims, road accidents, workplace compensation, and liability advocacy.',
  },
  {
    id: 'banking-finance',
    slug: 'banking-finance',
    title: 'Banking & Finance',
    image: '/images/legal/practice-areas/banking-finance.jpg',
    description: 'Comprehensive banking compliance, loan syndication, securities advisory, and financial dispute resolution.',
  },
  {
    id: 'bankruptcy-debt',
    slug: 'bankruptcy-debt',
    title: 'Bankruptcy & Debt',
    image: '/images/legal/practice-areas/bankruptcy-debt.jpg',
    description: 'Insolvency and Bankruptcy Code (IBC) proceedings, debt restructuring, and corporate turnaround solutions.',
  },
  {
    id: 'business',
    slug: 'business',
    title: 'Business',
    image: '/images/legal/practice-areas/business.jpg',
    description: 'Full-spectrum business establishment, joint ventures, governance policies, and cross-border commercial advisory.',
  },
  {
    id: 'civil-human-rights',
    slug: 'civil-human-rights',
    title: 'Civil & Human Rights',
    image: '/images/legal/practice-areas/civil-human-rights.jpg',
    description: 'Dedicated constitutional defense, public interest litigation (PIL), fundamental rights, and civil liberties protection.',
  },
  {
    id: 'consumer-rights',
    slug: 'consumer-rights',
    title: 'Consumer Rights',
    image: '/images/legal/practice-areas/consumer-rights.jpg',
    description: 'Relentless legal advocacy in Consumer Disputes Redressal Commissions against unfair trade practices and product defects.',
  },
  {
    id: 'corporate-commercial',
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial',
    image: '/images/legal/practice-areas/corporate-commercial.jpg',
    description: 'Mergers and acquisitions, contract drafting, corporate structuring, regulatory due diligence, and risk governance.',
  },
  {
    id: 'criminal-defense',
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    image: '/images/legal/practice-areas/criminal-defense.jpg',
    description: 'Vigorous criminal representation, anticipatory bails, economic offenses, trial defense, and appellate advocacy.',
  },
  {
    id: 'employment-labor',
    slug: 'employment-labor',
    title: 'Employment & Labor',
    image: '/images/legal/practice-areas/employment-labor.jpg',
    description: 'Strategic labor codes compliance, workplace harassment prevention (POSH), wage disputes, and executive contracts.',
  },
  {
    id: 'energy-environment-esg',
    slug: 'energy-environment-esg',
    title: 'Energy, Environment & ESG',
    image: '/images/legal/practice-areas/energy-environment-esg.jpg',
    description: 'National Green Tribunal (NGT) representation, renewable energy projects, environmental clearances, and ESG policies.',
  },
  {
    id: 'family',
    slug: 'family',
    title: 'Family',
    image: '/images/legal/practice-areas/family.jpg',
    description: 'Compassionate family law guidance for matrimonial disputes, child custody, succession, adoption, and mutual settlement.',
  },
  {
    id: 'immigration',
    slug: 'immigration',
    title: 'Immigration',
    image: '/images/legal/practice-areas/immigration.jpg',
    description: 'Cross-border visa applications, corporate work permits, overseas citizenship, FRRO compliance, and deportation defense.',
  },
  {
    id: 'insurance',
    slug: 'insurance',
    title: 'Insurance',
    image: '/images/legal/practice-areas/insurance.jpg',
    description: 'Policy repudiation challenges, insurance claim disputes, ombudsman appeals, and insurer regulatory advisory.',
  },
  {
    id: 'intellectual-property',
    slug: 'intellectual-property',
    title: 'Intellectual Property',
    image: '/images/legal/practice-areas/intellectual-property.jpg',
    description: 'Trademark, patent, and copyright registrations, anti-counterfeiting enforcement, licensing, and trade secret protection.',
  },
  {
    id: 'lawsuits-disputes',
    slug: 'lawsuits-disputes',
    title: 'Lawsuits & Disputes',
    image: '/images/legal/practice-areas/lawsuits-disputes.jpg',
    description: 'High-stakes civil litigation, domestic and international commercial arbitration, mediation, and trial enforcement.',
  },
  {
    id: 'media-technology-telecoms',
    slug: 'media-technology-telecoms',
    title: 'Media, Technology and Telecoms',
    image: '/images/legal/practice-areas/media-technology-telecoms.jpg',
    description: 'Digital Personal Data Protection (DPDP) compliance, tech transactions, cyber law, broadcasting regulations, and AI advisory.',
  },
  {
    id: 'notary-services',
    slug: 'notary-services',
    title: 'Notary Services',
    image: '/images/legal/practice-areas/notary-services.jpg',
    description: 'Authorized notarial attestations, affidavits, power of attorney authentications, apostille, and official verification.',
  },
  {
    id: 'private-client',
    slug: 'private-client',
    title: 'Private Client',
    image: '/images/legal/practice-areas/private-client.jpg',
    description: 'Bespoke high-net-worth estate planning, family trust creation, wealth governance, probate, and succession structuring.',
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    title: 'Real Estate',
    image: '/images/legal/practice-areas/real-estate.jpg',
    description: 'RERA compliance, property title searches, commercial leases, land acquisition vetting, and builder dispute litigation.',
  },
  {
    id: 'tax',
    slug: 'tax',
    title: 'Tax',
    image: '/images/legal/practice-areas/tax.jpg',
    description: 'Direct and indirect tax litigation, GST advisory, international tax structuring, transfer pricing, and appellate appeals.',
  },
];
