import { useRoot } from '@nx-test/use-root';
import {root} from 'root'

export function useOmelete(): string {
  root()
  useRoot();
  return 'use-omelete22';
}
