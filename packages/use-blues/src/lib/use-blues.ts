import { useRoot } from '@nx-test/use-root';
import {root} from 'root'

export function useBlues(): string {
  useRoot();
  root()
  console.log('alo')
  return 'use-blues';
}
