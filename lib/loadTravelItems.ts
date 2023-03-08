import { TravelItem } from "@/types/travelItem.type";
import axios from "axios";

export async function loadTravelItems(): Promise<TravelItem[]> {
  const hostUrl = process.env.HOST_URL || "http://localhost:3000";
  try {
    const response = await axios.get<TravelItem[]>(`${hostUrl}/api/mock-data`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
