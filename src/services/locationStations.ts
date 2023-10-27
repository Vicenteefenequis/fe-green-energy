import { TStateFilterResult } from "../interfaces/api";
import { request } from "../api/requester";
import { Response } from "../interfaces"
import { LocationAPI } from "../models/stationsLocations";


export const fetchLocationStations = async (): Promise<Response<LocationAPI>> => {
  const { data } = await request().get<Response<LocationAPI>>(
      "locationsStations/"
  );
  return data;
};
