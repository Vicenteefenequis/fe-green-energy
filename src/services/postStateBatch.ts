import { request } from "../api/requester";
import { TIndicatorResult } from "../interfaces/api";

export const getStateBatch = async (
  acronym: string[]
): Promise<TIndicatorResult[]> => {
  const params = new URLSearchParams();
  acronym.forEach((a) => params.append("acronym", a));
  const { data } = await request().get<TIndicatorResult[]>(
    `projects/states/`,
    params
  );
  return data;
};
