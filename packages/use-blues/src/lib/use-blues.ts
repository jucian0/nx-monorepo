import { useRoot } from '@nx-test/use-root';

export function useBlues(): string {
  useRoot();
  return 'use-blues';
}
