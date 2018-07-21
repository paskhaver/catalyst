import concat from '../../lib/arrays/concat';

describe('concat method', () => {
  it('should return a new array that combines values from first array and remaining arguments', () => {
    expect(concat([1], 2, 3, 4)).toEqual([1, 2, 3, 4]);
  });

  it('should flatten array arguments by one level', () => {
    expect(concat([1], [2], [[3]])).toEqual([1, 2, [3]])
  });
});