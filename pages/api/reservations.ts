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

const handler = (req: NextApiRequest, res: NextApiResponse) => {
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
      return res
        .status(201)
        .json({ message: "SUCCESS!", cart: parsedProducts });
    }
  }

  if (req.method === "GET") {
    try {
      const filePath = buildCartPath();
      const data = extractCart(filePath);
      res.status(200).json({ cart: data });
    } catch (error) {
      return res.status(500).send("Error revalidating");
    }
  }

  if (req.method === "DELETE") {
    const id = req.body;
    const { deletedId } = JSON.parse(id);

    const filePath = buildCartPath();
    const data = extractCart(filePath);

    const filteredData = data.filter((item) => item.idx !== deletedId);
    fs.writeFileSync(filePath, JSON.stringify(filteredData));
    res.status(200).json({ cart: filteredData });
  }
};

export default handler;
