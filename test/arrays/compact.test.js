import compact from '../../lib/arrays/compact';

describe('compact method', () => {
  it('should remove falsy values from an array', () => {
    const arr = [-1, 0, 1, false, 2, '', 3];

    expect(compact(arr)).toEqual([-1, 1, 2, 3]);
  });
});