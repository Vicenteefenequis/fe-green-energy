import { request } from "../api/requester";
import { User } from "../models/user";

export const postUser = async (input: User.Login): Promise<User.Output> => {
  const { data } = await request().post<User.Output>("auth/login/", input);
  return data;
};
