import { request } from "../api/requester";
import { Indicator } from "../models/indicator";

export const getIndicator = async (id: string): Promise<Indicator.Model> => {
  const { data } = await request().get<Indicator.Model>(`indicators/${id}/`);
  return data;
};
