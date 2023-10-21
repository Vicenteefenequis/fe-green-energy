import { request } from "../api/requester";
import { TIndicatorResult } from "../interfaces/api";

export const getIndicator = async (id: string): Promise<TIndicatorResult[]> => {
  const { data } = await request().get<TIndicatorResult[]>(`projects/${id}/city-indicator/`);
  return data;
};
