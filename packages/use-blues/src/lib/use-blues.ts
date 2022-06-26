import { useElement } from '@nx-test/use-elememnt';
import { useFala } from '@nx-test/use-fala';
import { useRoot } from '@nx-test/use-root';
import { useTest } from '@nx-test/use-test';

export function useBlues(): string {
  useElement();
  useFala();
  useRoot();
  useTest();
  return 'use-blues 22';
}
