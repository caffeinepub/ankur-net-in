import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { ContactFormData } from '../backend';

export function useGetAllForms() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactFormData[]>({
    queryKey: ['forms'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllForms();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllFormsByEmail() {
  const { actor, isFetching } = useActor();

  return useQuery<ContactFormData[]>({
    queryKey: ['forms', 'by-email'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllFormsByEmail();
    },
    enabled: !!actor && !isFetching,
  });
}
