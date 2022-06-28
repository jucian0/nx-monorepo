import { useRoot } from '@nx-test/use-root';

export function useTest(): string {
  useRoot();
  return 'use-test';
}
