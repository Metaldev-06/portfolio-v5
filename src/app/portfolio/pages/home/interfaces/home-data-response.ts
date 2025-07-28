export interface HomeDataResponse {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  documentId: string;
  about_me: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  image: DataImage;
  services: Service[];
  projects: Project[];
  skills: Skill[];
}

export interface DataImage {
  id: number;
  documentId: string;
  url: string;
  name: string;
  width: number;
  height: number;
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  description: string;
  github_link: string;
  project_link: string;
  stack: string[];
  images: ImageElement[];
}

export interface ImageElement {
  id: number;
  documentId: string;
  url: string;
  name?: string;
}

export interface Service {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image: ImageElement;
}

export interface Skill {
  id: number;
  documentId: string;
  title: string;
  image: ImageElement;
}

export interface Meta {}
