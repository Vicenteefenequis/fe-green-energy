import { request } from "../api/requester";
import { TProjectCreateBody } from "../interfaces/api";

export const postProject = async (
  input: TProjectCreateBody
): Promise<TProjectCreateBody> => {
  const { data } = await request().post<TProjectCreateBody>(
    "/projects/",
    input
  );
  return data;
};
