import { request } from "../api/requester";
import { Response } from "../interfaces"
import { TStateFilterResult } from "../interfaces/api";

export const getStateFilter = async (): Promise<Response<TStateFilterResult>> => {
    const { data } = await request().get<Response<TStateFilterResult>>(
        "projects/states/"
    );
    return data;
};
