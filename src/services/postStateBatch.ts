import { request } from "../api/requester";
import { TIndicatorResult } from "../interfaces/api";

export const postStateBatch = async (siglas: string[]): Promise<TIndicatorResult[]> => {
    const { data } = await request().post<TIndicatorResult[]>(`projects/states/batch`, {
        siglas
    });
    return data;
};
