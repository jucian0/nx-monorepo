import { useViewportSize } from './use-viewport-size';

describe('useViewportSize', () => {
  it('should work', () => {
    expect(useViewportSize()).toEqual('use-viewport-size');
  });
});
