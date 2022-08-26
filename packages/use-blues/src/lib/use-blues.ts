import { useRoot } from '@nx-test/use-root';
import {root} from 'root'

export function useBlues(): string {
  useRoot();
  root()
  return 'use-blues';
}
