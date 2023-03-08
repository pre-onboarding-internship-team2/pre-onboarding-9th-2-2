import { TravelItem } from "@/types/travelItem.type";
import axios from "axios";

export async function loadTravelItems(): Promise<TravelItem[]> {
  const url = process.env.DATA_URL;
  if (!url) return [];
  try {
    const response = await axios.get<TravelItem[]>(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
