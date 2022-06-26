import { useTest } from '@nx-test/use-test';

export function useElement(): string {
  useTest();
  return 'use-element 2';
}
