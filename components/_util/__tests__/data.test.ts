import { shallowMerge } from '..';

it('should be merge', () => {
  expect(shallowMerge({ a: 1 }, { b: 2 })).toStrictEqual({ a: 1, b: 2 });
});
