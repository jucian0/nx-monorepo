import { useRoot } from '@nx-test/use-root';

export function useOmelete(): string {
  useRoot();
  return 'use-omelete22';
}
