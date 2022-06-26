import { useRoot } from './use-root';

describe('useRoot', () => {
  it('should work', () => {
    expect(useRoot()).toEqual('use-root');
  });
});
