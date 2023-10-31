import { request } from "../api/requester";
import { TIndicatorRequest, TIndicatorResult } from "../interfaces/api";

export const getIndicator = async (indicatorRequest: TIndicatorRequest): Promise<TIndicatorResult[]> => {
  const { data } = await request().get<TIndicatorResult[], Omit<TIndicatorRequest, "id">>(`projects/${indicatorRequest.id}/city-indicator/`, { latitude: indicatorRequest.latitude, longitude: indicatorRequest.longitude });
  return data;
};
