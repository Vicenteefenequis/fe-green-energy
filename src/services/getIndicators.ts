import { request } from '../api/requester';
import { Indicator } from '../models/indicator';

export const getIndicators = async (): Promise<Indicator.Model[]> => {
  const { data } = await request({
    headers: {
      Authorization: `Bearer ${
        JSON.parse(window.localStorage.getItem('@auth') || '').access
      }`,
    },
  }).get<Indicator.Model[]>('/energy-indicators/');
  return data;
};
