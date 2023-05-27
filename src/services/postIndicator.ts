import { request } from '../api/requester';
import { Indicator } from '../models/indicator';

export const postIndicator = async (
  input: Indicator.Input
): Promise<Indicator.Output> => {
  const { data } = await request().post<Indicator.Output>('/', input);
  return data;
};
