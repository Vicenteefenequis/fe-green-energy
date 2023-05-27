import { request } from '../api/requester';
import { Indicator } from '../models/indicator';

export const getIndicators = async (): Promise<Indicator.Model[]> => {
  const { data } = await request().get<Indicator.Model[]>('/');
  return data;
};
