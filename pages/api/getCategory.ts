import { sanityClient } from "@/sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";

const query = groq`*[_type == "category"] {
_id,
  ...
} | order(_createdAt asc)`;

interface Data {
  categories: Category[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const categories = await sanityClient.fetch(query);
  res.status(200).json({ categories });
}
