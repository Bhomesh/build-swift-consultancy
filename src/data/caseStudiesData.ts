import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'paystream-fintech',
    client: 'PayStream Global',
    industry: 'Financial Technology',
    challenge: 'Legacy payment gateway suffered frequent 504 gateway timeouts during peak flash sales, with latency spiking beyond 1,800ms and infrastructure costs spiraling out of control.',
    solution: 'Build Swift re-architected their transaction engine into event-driven Go microservices running on AWS EKS, paired with Redis caching and Apache Kafka for asynchronous ledger reconciliation.',
    metrics: [
      { label: 'P99 Latency', value: '< 22ms' },
      { label: 'Peak Capacity', value: '10M tx/day' },
      { label: 'Cloud Cost Cut', value: '-52%' },
      { label: 'Uptime SLA', value: '99.999%' }
    ],
    techStack: ['Go', 'AWS EKS', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Terraform'],
    duration: '4 Months',
    location: 'Singapore & Mumbai'
  },
  {
    id: 'healthlink-telemedicine',
    client: 'HealthLink Care',
    industry: 'Healthcare & Telemedicine',
    challenge: 'Need for ABDM & HIPAA-compliant telehealth platform connecting 5,000+ doctors across tier-1 and tier-2 Indian cities with end-to-end encrypted video consultations and EHR synchronization.',
    solution: 'Engineered a modern React & WebRTC consultation suite with zero-knowledge encrypted clinical record vaults and automated appointment routing microservices.',
    metrics: [
      { label: 'Active Doctors', value: '7,500+' },
      { label: 'Encrypted Calls', value: '1.2M+' },
      { label: 'Audit Score', value: '100% HIPAA' },
      { label: 'Latency Drop', value: '-65%' }
    ],
    techStack: ['React', 'WebRTC', 'Node.js', 'MongoDB', 'AWS KMS', 'Docker'],
    duration: '5 Months',
    location: 'Bengaluru & New Delhi'
  },
  {
    id: 'rajasthan-smart-logistics',
    client: 'Rajasthan State Freight Consortium',
    industry: 'Supply Chain & IoT Logistics',
    challenge: 'Freight operators faced heavy diesel fuel wastage and unpredictable vehicle breakdowns across 14,000+ commercial fleet routes across Rajasthan and Gujarat highway corridors.',
    solution: 'Build Swift designed a real-time IoT telemetry ingestion pipeline with an AI routing optimizer that predicts traffic bottlenecks, diesel theft, and scheduled predictive maintenance.',
    metrics: [
      { label: 'Fleet Route Savings', value: '28% Fuel' },
      { label: 'Daily GPS Pings', value: '15M+' },
      { label: 'Breakdown Reduction', value: '-41%' },
      { label: 'Telemetry Lag', value: '< 150ms' }
    ],
    techStack: ['Python', 'FastAPI', 'Apache Kafka', 'TimescaleDB', 'PyTorch', 'Grafana'],
    duration: '6 Months',
    location: 'Jaipur, Rajasthan'
  },
  {
    id: 'saas-modernization',
    client: 'OmniDesk Enterprise',
    industry: 'Enterprise B2B SaaS',
    challenge: 'A 10-year-old monolithic Rails application with 45-minute build times, database deadlocks, and severe technical debt preventing new feature rollouts.',
    solution: 'Executed a zero-downtime strangler-fig migration to modular Next.js micro-frontends with high-throughput backend services and automated canary deployments.',
    metrics: [
      { label: 'Deploy Frequency', value: '45x / day' },
      { label: 'CI Pipeline Time', value: '3.5 min' },
      { label: 'Deadlock Errors', value: '0' },
      { label: 'Customer NPS', value: '+34 pts' }
    ],
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Vercel'],
    duration: '3.5 Months',
    location: 'Austin, TX & London'
  }
];
