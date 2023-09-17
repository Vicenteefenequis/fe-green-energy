import { request } from "../api/requester";
import { User } from "../models/user";

export const whoAmi = async (): Promise<User.Output> => {
  const { data } = await request({ withCredentials: true }).get<User.Output>(
    "/auth/user/"
  );
  return data;
};
