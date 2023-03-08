import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import { ProductType } from "@/types/product-type";

export const buildCartPath = () => {
  return path.join(process.cwd(), "data", "cart.json");
};

export const extractCart = (filePath: string): ProductType[] => {
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);
  return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const products = req.body;
    const parsedProducts: ProductType = JSON.parse(products);

    const filePath = buildCartPath();
    const data = extractCart(filePath);

    const existingData = data.find((item) => item.idx === parsedProducts.idx);

    if (existingData) {
      res.status(422).json({ message: "Product Already Exists" });
      return;
    }

    if (!existingData) {
      data.push(parsedProducts);
      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(201).json({ message: "SUCCESS!", cart: parsedProducts });
    }
  } else {
    try {
      const filePath = buildCartPath();
      const data = extractCart(filePath);
      res.status(200).json({ cart: data });
    } catch (error) {
      return res.status(500).send("Error revalidating");
    }
  }
};

export default handler;
