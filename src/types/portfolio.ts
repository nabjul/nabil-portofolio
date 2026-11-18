export type Language = "en" | "id";

export interface LocalizedString {
  en: string;
  id: string;
}

export interface CompetencyItem {
  id: string;
  code: string;
  iconName: "cpu" | "network" | "shield" | "smartphone" | "cloud" | "award";
  title: LocalizedString;
  description: LocalizedString;
  tags: string[];
}

export interface WhyHireStat {
  metric: string;
  title: LocalizedString;
  subtitle: LocalizedString;
}

export interface ExecutionStep {
  step: string;
  title: LocalizedString;
  detail: LocalizedString;
}

export interface ExperienceProjectItem {
  id: string;
  badge: LocalizedString;
  featured?: boolean;
  category: "iot" | "network" | "all";
  company: string;
  location: string;
  period: LocalizedString;
  role: LocalizedString;
  domain: LocalizedString;
  summary: LocalizedString;
  highlights: LocalizedString[];
  executionSteps: ExecutionStep[];
  techStack: string[];
  metrics: LocalizedString;
  docImages: {
    src: string;
    caption: LocalizedString;
    placeholderHint: string;
  }[];
}

export interface DocumentationLogItem {
  id: string;
  category: "iot" | "network" | "competition" | "organization";
  categoryLabel: LocalizedString;
  title: LocalizedString;
  projectOrEvent: string;
  date: string;
  location: string;
  imageSrc: string;
  placeholderFile: string;
  whatIDid: LocalizedString;
  toolsUsed: string[];
  outcome: LocalizedString;
}

export interface AchievementItem {
  id: string;
  rank: LocalizedString;
  title: string;
  organizer: LocalizedString;
  year: string;
  description: LocalizedString;
  category: LocalizedString;
}

export interface OrganizationItem {
  id: string;
  organization: string;
  role: LocalizedString;
  period: string;
  location: string;
  description: LocalizedString;
  bullets: LocalizedString[];
}

export interface CertificationItem {
  id: string;
  code: string;
  name: string;
  issuer: string;
  year: string;
  description: LocalizedString;
  skills: string[];
}
