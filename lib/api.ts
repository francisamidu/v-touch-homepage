import { strapi } from "@strapi/client";
import ky from "ky";
import { Collection, Design, APIRequest } from "../types/app";

export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_STRAPI_URL,
});

const client = strapi({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL!,
  auth: process.env.NEXT_PUBLIC_STRAPI_TOKEN!,
});

// Get all collections
export const getAllCollections = async (): Promise<
  APIRequest<Collection[]>
> => {
  try {
    const response = await client.collection("collections").find({
      populate: {
        coverImage: true,
        designs: {
          populate: ["images"],
        },
      },
    });
    return {
      data: response.data as unknown as Collection[],
      meta: response.meta,
    };
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw new Error("Failed to fetch collections");
  }
};

// Get collection by ID
export const getCollectionById = async (
  id: number
): Promise<APIRequest<Collection>> => {
  try {
    const response = await client.collection("collections").findOne(String(id));
    return {
      data: response.data as unknown as Collection,
      meta: response.meta,
    };
  } catch (error) {
    console.error("Error fetching collection by id:", error);
    throw new Error("Failed to fetch collection");
  }
};

// Get all designs
export const getAllDesigns = async (): Promise<APIRequest<Design[]>> => {
  try {
    const response = await client
      .collection("designs")
      .find({ populate: ["images"] });
    return {
      data: response.data as unknown as Design[],
      meta: response.meta,
    };
  } catch (error) {
    console.error("Error fetching designs:", error);
    throw new Error("Failed to fetch designs");
  }
};

// Get design by ID
export const getDesignById = async (
  id: number
): Promise<APIRequest<Design>> => {
  try {
    const response = await client.collection("designs").findOne(String(id));
    return {
      data: response.data as unknown as Design,
      meta: response.meta,
    };
  } catch (error) {
    console.error("Error fetching design by id:", error);
    throw new Error("Failed to fetch design");
  }
};

// Upload image for a collection or design
export const uploadImage = async (
  image: File,
  refId: number,
  ref: "api::collection.collection" | "api::design.design",
  field: string
): Promise<APIRequest<any>> => {
  try {
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", ref); // e.g. 'api::collection.collection'
    formData.append("refId", refId.toString());
    formData.append("field", field); // e.g. 'coverImage' or 'images'

    const response = await api
      .post("api/upload", { body: formData })
      .json<any[]>();
    return { data: response[0] };
  } catch (err) {
    console.error("Error uploading image:", err);
    throw err;
  }
};
