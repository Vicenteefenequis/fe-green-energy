import axios from "axios";
import {LocationStation } from "../models/stationsLocations";

const BASE_URL = "http://localhost:8080/api/v1";

export const fetchLocationStations = async (): Promise<LocationStation[]> => {
  return mockLocations;
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
