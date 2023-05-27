import { useQuery } from '@tanstack/react-query';
import { getIndicators } from '../services/getIndicators';

export const useIndicatorListQuery = () => {
  return useQuery({
    queryKey: ['indicators'],
    queryFn: getIndicators,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
