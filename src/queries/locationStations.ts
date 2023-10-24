import axios from "axios";
import { LocationAPI } from "../models/stationsLocations";

export async function fetchLocations(): Promise<LocationAPI.Output> {
  const response = await axios.get<LocationAPI.Output>("http://localhost:8080/api/v1/get_location/");
  return response.data;
}
