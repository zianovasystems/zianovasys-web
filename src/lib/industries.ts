import {
  Activity,
  Banknote,
  Box,
  Building2,
  ShoppingCart,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  long: string;
  challenges: string[];
  capabilities: { title: string; description: string }[];
  stack: string[];
  outcome: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: Activity,
    short:
      "Empowering healthcare providers with AI-driven diagnostics, patient management systems, and interoperable EHR solutions to improve patient outcomes.",
    long:
      "Healthcare organizations are simultaneously digitizing operations and protecting some of the most sensitive data in the world. Zianova builds clinically-aware AI systems and EHR-integrated tooling that respect HIPAA boundaries, support clinician workflows, and produce evidence-quality outputs.",
    challenges: [
      "Clinical documentation overhead is burning out frontline staff",
      "Legacy EHRs make interoperability and analytics painful",
      "AI outputs must be auditable and clinician-reviewable",
      "Patient data must stay within strict compliance perimeters",
    ],
    capabilities: [
      {
        title: "AI clinical scribes",
        description:
          "Production-grade voice-to-structured-record pipelines (see MedisVoice) that capture full patient stories in a single conversation.",
      },
      {
        title: "EHR-integrated diagnostics",
        description:
          "Decision-support models that surface evidence inline to the existing chart, not in a separate tool clinicians won't open.",
      },
      {
        title: "Compliant data pipelines",
        description:
          "PHI handling, de-identification, and audit logging built to align with HIPAA and HITRUST controls from day one.",
      },
      {
        title: "Patient-facing platforms",
        description:
          "Triage, intake, and care-coordination apps that integrate with FHIR resources and reduce administrative load.",
      },
    ],
    stack: ["Python", "FHIR", "PostgreSQL", "AWS HealthLake", "OpenAI", "PyTorch"],
    outcome:
      "Less time spent on charting, more time spent with patients — with auditable AI outputs leadership and clinicians both trust.",
  },
  {
    slug: "fintech",
    title: "FinTech",
    icon: Banknote,
    short:
      "Securing financial transactions with fraud detection AI, automating compliance, and building robust high-frequency trading platforms.",
    long:
      "Financial services run on speed, accuracy, and trust. Zianova helps fintech teams ship intelligence into transaction flows without compromising latency, audit trails, or regulator-readiness — from card-not-present fraud to KYC automation and risk modelling.",
    challenges: [
      "Fraud patterns evolve faster than rules-engines can be tuned",
      "KYC/AML workflows are manual, expensive, and error-prone",
      "Risk and trading systems demand sub-millisecond latency",
      "Every model decision needs an explainability paper-trail",
    ],
    capabilities: [
      {
        title: "Real-time fraud detection",
        description:
          "Hybrid rule + ML scoring layered into the transaction path with feature stores for sub-100ms decisions.",
      },
      {
        title: "Automated KYC / AML",
        description:
          "Document understanding, sanctions list matching, and case-management UIs that compress onboarding from days to minutes.",
      },
      {
        title: "Explainable risk models",
        description:
          "SHAP-instrumented credit and risk models with reviewer dashboards so risk teams can defend any decision.",
      },
      {
        title: "Trading & quant infra",
        description:
          "Low-latency event pipelines and back-testing platforms that handle real market data volumes without falling over.",
      },
    ],
    stack: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Python", "AWS"],
    outcome:
      "Fewer false positives, faster onboarding, and auditable models — without slowing the transaction path.",
  },
  {
    slug: "ecommerce",
    title: "eCommerce",
    icon: ShoppingCart,
    short:
      "Enhancing customer experiences through personalized recommendation engines, inventory optimization, and seamless omnichannel platforms.",
    long:
      "Modern eCommerce is a personalization arms race: relevance, speed, and consistent experience across web, app, and store. Zianova builds the data and ML plumbing that turns catalog and behaviour data into measurable revenue lift.",
    challenges: [
      "Generic listings drag down conversion in large catalogs",
      "Inventory and demand forecasting are usually still spreadsheet-driven",
      "Every channel has its own search, recs, and content stack",
      "Search relevance lags behind shopper intent",
    ],
    capabilities: [
      {
        title: "Personalized recommendations",
        description:
          "Hybrid collaborative-filtering + LLM-driven semantic similarity for hero rails, cart up-sell, and email.",
      },
      {
        title: "Demand & inventory forecasting",
        description:
          "Time-series + causal-lift models for stock-out reduction and smarter buying decisions.",
      },
      {
        title: "Semantic search",
        description:
          "Vector + keyword hybrid search with re-ranking that understands shopper phrasing, not just SKUs.",
      },
      {
        title: "Omnichannel platforms",
        description:
          "Unified storefront and back-office stacks that share one customer record across web, app, and POS.",
      },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Elasticsearch", "Vector DBs", "Python"],
    outcome:
      "Higher conversion, fewer stock-outs, and a shopper experience that feels personal at scale.",
  },
  {
    slug: "logistics",
    title: "Logistics",
    icon: Truck,
    short:
      "Optimizing supply chains with predictive analytics, route optimization algorithms, and real-time fleet management systems.",
    long:
      "Logistics margins live or die on routing, utilization, and exception handling. Zianova builds operations platforms that fuse telemetry, schedule, and demand data into decisions that show up in the P&L.",
    challenges: [
      "Fuel and labor costs eat into already-thin margins",
      "Route plans don't survive contact with real traffic and demand",
      "Visibility breaks across warehouse / line-haul / last-mile",
      "Reactive maintenance creates expensive downtime",
    ],
    capabilities: [
      {
        title: "Route optimization",
        description:
          "OR-Tools + ML constraint solvers that handle real-world stops, time windows, and SLAs.",
      },
      {
        title: "Demand & ETA forecasting",
        description:
          "Probabilistic ETAs and capacity-planning models that absorb seasonality and promotions.",
      },
      {
        title: "Fleet telematics",
        description:
          "Real-time fleet dashboards with anomaly detection for behaviour, fuel, and vehicle health.",
      },
      {
        title: "Predictive maintenance",
        description:
          "Sensor-fed models that flag failures days before they ground a vehicle.",
      },
    ],
    stack: ["Python", "OR-Tools", "Kafka", "PostgreSQL", "TimescaleDB", "GCP"],
    outcome:
      "Lower fuel cost per stop, fewer missed SLAs, and operations teams that get ahead of problems instead of chasing them.",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    icon: Building2,
    short:
      "Transforming property management with smart building IoT integrations, virtual tours, and automated tenant services.",
    long:
      "Real-estate operators sit on enormous amounts of building, tenant, and energy data — most of it under-used. Zianova helps PropTech and large operators turn that data into smarter buildings, lower OpEx, and tenant experiences worth paying for.",
    challenges: [
      "Building Management Systems are siloed per asset",
      "Tenant operations are manual and unscalable across portfolios",
      "Energy and HVAC waste is invisible without integration",
      "Property listings and tours are still mostly static",
    ],
    capabilities: [
      {
        title: "Smart-building integration",
        description:
          "Unified IoT layer over BMS, HVAC, lighting, and access control with anomaly + setpoint optimization.",
      },
      {
        title: "Tenant-experience apps",
        description:
          "Branded mobile/web apps for access, payments, service requests, and amenity bookings.",
      },
      {
        title: "Listing intelligence",
        description:
          "Automated description generation, virtual-tour pipelines, and lead scoring tied to CRM.",
      },
      {
        title: "Portfolio analytics",
        description:
          "Cross-asset dashboards for energy, occupancy, and revenue benchmarking at portfolio scale.",
      },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "MQTT", "AWS IoT", "Three.js"],
    outcome:
      "Lower OpEx, happier tenants, and a portfolio-level view where there used to be a stack of spreadsheets.",
  },
  {
    slug: "enterprise",
    title: "Enterprise",
    icon: Box,
    short:
      "Streamlining operations for large organizations with custom ERPs, workflow automation, and data-driven decision support systems.",
    long:
      "Enterprise software is where most AI projects go to die — and where the value is largest when they don't. Zianova specialises in shipping AI inside the systems people already use, with the change-management discipline to make adoption stick.",
    challenges: [
      "Off-the-shelf ERPs don't match how the business actually works",
      "Cross-departmental processes break at the integration layer",
      "Data lives in dozens of systems with no shared language",
      "AI POCs rarely make it to production",
    ],
    capabilities: [
      {
        title: "Custom ERP & internal apps",
        description:
          "Process-fit applications built around the actual workflow, not the vendor's data model.",
      },
      {
        title: "Workflow automation",
        description:
          "Event-driven orchestration that replaces shadow-IT spreadsheets and email handoffs.",
      },
      {
        title: "Decision-support copilots",
        description:
          "Internal LLM-powered assistants grounded in the company's own knowledge with strict access control.",
      },
      {
        title: "Data platforms",
        description:
          "Lakehouse + semantic-layer stacks that finally give finance, ops, and product the same numbers.",
      },
    ],
    stack: ["TypeScript", "Java", "Python", "Snowflake", "dbt", "Kubernetes", "Azure"],
    outcome:
      "Fewer parallel systems, more decisions made on the same data, and AI features that survive past the pilot.",
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
