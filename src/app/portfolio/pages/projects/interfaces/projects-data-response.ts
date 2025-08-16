export interface ProjectsDataResponse {
  data: ProjectData[];
  meta: Meta;
}

export interface ProjectData {
  id: number;
  documentId: string;
  title: string;
  description: string;
  stack: string[];
  project_link: string;
  github_link: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: string;
  images: Image[];
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export enum EXT {
  Webp = '.webp',
}

export interface Formats {
  large?: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: EXT;
  url: string;
  hash: string;
  mime: MIME;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  provider_metadata: ProviderMetadata;
}

export enum MIME {
  ImageWebp = 'image/webp',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = 'image',
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
