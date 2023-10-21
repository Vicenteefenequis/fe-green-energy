import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../services/getProjects';

export const useProjectListQuery = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    staleTime: 1000 * 60 * 60 * 24,
  });
};
