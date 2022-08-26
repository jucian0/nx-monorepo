import { useRoot } from '@nx-test/use-root';
import {root} from 'root'

export function useOmelete(): string {
  root()
  useRoot();
  console.log('alo')
  return 'use-omelete22';
}
