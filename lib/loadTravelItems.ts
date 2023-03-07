import { TravelItem } from "@/types/travelItem.type";
import { promises as fs } from "fs";
import path from "path";

export async function loadTravelItems(): Promise<TravelItem[]> {
  const filePath = path.join(process.cwd(), "mock_data.json");
  const travelItems = await fs.readFile(filePath, "utf8");

  if (!travelItems) return [];
  return JSON.parse(travelItems);
}
