import { request } from "../api/requester";
import { User } from "../models/user";

export const signupUser = async (
  input: User.Register
): Promise<User.OutputRegister> => {
  const { data } = await request().post<User.OutputRegister>(
    "auth/registration/",
    input
  );
  return data;
};
