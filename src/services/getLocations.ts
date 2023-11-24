import { request } from "../api/requester";
import { TLocationResult, TYPE_LOCATION } from "../interfaces/api";

type LocationParam = TYPE_LOCATION;

export const getLocations = async (
  type: LocationParam
): Promise<TLocationResult[]> => {
  const { data } = await request().get<TLocationResult[]>("locations/", {
    type,
  });
  return data;
};
