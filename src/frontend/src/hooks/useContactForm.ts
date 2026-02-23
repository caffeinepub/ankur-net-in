import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: async ({ name, email, message }: { name: string; email: string; message: string }) => {
      if (!actor) {
        throw new Error('Backend connection not available');
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address');
      }

      await actor.createForm(name, email, message);
    },
    onSuccess: () => {
      setError(undefined);
      // Invalidate forms query if you want to fetch them later
      queryClient.invalidateQueries({ queryKey: ['forms'] });
    },
    onError: (err: Error) => {
      setError(err.message || 'Failed to submit form. Please try again.');
    }
  });

  const submitForm = async (name: string, email: string, message: string): Promise<boolean> => {
    try {
      await mutation.mutateAsync({ name, email, message });
      return true;
    } catch {
      return false;
    }
  };

  return {
    submitForm,
    isSubmitting: mutation.isPending,
    error
  };
}
