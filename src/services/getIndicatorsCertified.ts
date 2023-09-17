import { request } from "../api/requester";
import { Indicator } from "../models/indicator";

export const getIndicatorsCertified = async (): Promise<Indicator.Model[]> => {
  const { data } = await request().get<Indicator.Model[]>(
    "indicators/certified/"
  );
  return data;
};
