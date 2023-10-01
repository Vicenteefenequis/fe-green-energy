import { request } from "../api/requester";

export const logout = async (): Promise<void> => {
  await request().get("indicators/certified/");
};
