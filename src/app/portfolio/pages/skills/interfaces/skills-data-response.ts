export interface SkillsDataResponse {
  data: SkillData[];
  meta: Meta;
}

export interface SkillData {
  id: number;
  documentId: string;
  title: string;
  type: Type;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  locale: Locale;
  image: Image;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats | null;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: Provider;
  provider_metadata: ProviderMetadata;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export enum EXT {
  PNG = '.png',
  SVG = '.svg',
  Webp = '.webp',
}

export interface Formats {
  thumbnail: Thumbnail;
}

export interface Thumbnail {
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
  ImagePNG = 'image/png',
  ImageSVGXML = 'image/svg+xml',
  ImageWebp = 'image/webp',
}

export interface ProviderMetadata {
  public_id: string;
  resource_type: ResourceType;
}

export enum ResourceType {
  Image = 'image',
}

export enum Provider {
  Cloudinary = 'cloudinary',
}

export enum Locale {
  EsAR = 'es-AR',
}

export enum Type {
  Backend = 'backend',
  Database = 'database',
  Frontend = 'frontend',
  Languages = 'languages',
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
