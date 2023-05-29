import { request } from '../api/requester';
import { Indicator } from '../models/indicator';

export const postIndicator = async (
  input: Indicator.Input
): Promise<Indicator.Output> => {
  const { data } = await request({
    headers: {
      Authorization: `Bearer ${
        JSON.parse(window.localStorage.getItem('@auth') || '').access
      }`,
    },
  }).post<Indicator.Output>('/energy-indicators/', input);
  return data;
};
