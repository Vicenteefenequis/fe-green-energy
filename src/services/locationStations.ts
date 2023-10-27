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

const mockLocations = [
  {
      nome_usina: "Usina Solar 1",
      latitude: -16.4,
      longitude: -49.1,
      city: "Goiania",
      state: "Goias",
      average_photovoltaic_irradiation: 250000.0
  },
  {
      nome_usina: "Usina Solar 2",
      latitude: -16.8,
      longitude: -49.3,
      city: "Anápolis",
      state: "Goias",
      average_photovoltaic_irradiation: 265463.0
  }
];
