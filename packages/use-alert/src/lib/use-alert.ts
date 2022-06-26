export function useAlert(): string {
  return 'use-alert2222';
}
// npx nx affected --target=publish --base=remotes/origin/main~1 --parallel=1

// in order to avoid redeploy, try to compare, package.json differences, to publish just when version is bumped!
