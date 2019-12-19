import { shallowMerge, randomString } from '..';

describe('_uits', () => {
  it('should shallowMerge two object be merge', () => {
    expect(shallowMerge({ a: 1 }, { b: 2 })).toStrictEqual({ a: 1, b: 2 });
  });

  it('should randomString get right text', () => {
    expect(randomString(10)).toHaveLength(10);
    expect(randomString()).toHaveLength(32);
  });
});
