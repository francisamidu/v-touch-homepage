import { Collection, Design } from "@/types/app";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformCollection = (collection: Collection) => {
  return {
    id: collection.documentId,
    name: collection.name,
    description: collection.description,
    coverImage: `http://localhost:1337${collection.coverImage?.url}` || "",
    slug: collection.slug,
  };
};

export const transformDesign = (design: Design) => {
  return {
    id: design.documentId,
    name: design.name,
    description: design.description,
    images: design.images.map((image) => `http://localhost:1337${image.url}`),
    slug: design.slug,
  };
};
