export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
  leetcode: string;
  careerInterests: string[];
  profilePhotoPath: string;
  resumePdfPath: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  cgpa?: string;
  percentage?: string;
  expectedGraduation?: string;
  location?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  status?: string;
  description: string;
  features: string[];
  techStack: string[];
  myContribution: string;
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface HackathonItem {
  id: string;
  title: string;
  organizer: string;
  year: string;
  role: string;
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}
