export interface Media {
  id: number;
  url: string;
  mime: string;
  name: string;
  size: number;
}

export interface Collection {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  description: string;
  designs: Design[];
  coverImage: Media;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

export interface Design {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  description: string;
  images: Media[];
  collection?: Collection;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
}

// Generic API request type
export interface APIRequest<T = any> {
  data: T;
  meta?: Record<string, any>;
  error?: {
    status: number;
    message: string;
  };
}
