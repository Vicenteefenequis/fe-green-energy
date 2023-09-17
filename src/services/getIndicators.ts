import { request } from "../api/requester";
import { Response } from "../models/general";
import { Indicator } from "../models/indicator";

export const getIndicators = async (): Promise<Response<Indicator.Model>> => {
  const { data } = await request().get<Response<Indicator.Model>>(
    "indicators/"
  );
  return data;
};
