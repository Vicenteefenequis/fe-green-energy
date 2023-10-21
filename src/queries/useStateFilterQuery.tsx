import { useQuery } from '@tanstack/react-query';
import { getStateFilter } from '../services/getStateFilter';

export const useStateFilterQuery = () => {
    return useQuery({
        queryKey: ['state-filter'],
        queryFn: getStateFilter,
        staleTime: 1000 * 60 * 60 * 24,
    });
};
