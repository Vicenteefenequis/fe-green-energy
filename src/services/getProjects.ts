import { request } from "../api/requester";
import { Response } from "../interfaces"
import { TProjects } from "../interfaces/api";

export const getProjects = async (): Promise<Response<TProjects>> => {
    const { data } = await request().get<Response<TProjects>>(
        "projects/"
    );
    return data;
};
