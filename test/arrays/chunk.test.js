import chunk from '../../lib/arrays/chunk';

describe('chunk method', () => {
  it('should split an array into multiple arrays based on chunk size', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(chunk(arr, 1)).toEqual([[1], [2], [3], [4], [5]]);
    expect(chunk(arr, 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5]]);
    expect(chunk(arr, 4)).toEqual([[1, 2, 3, 4], [5]]);
    expect(chunk(arr, 5)).toEqual([[1, 2, 3, 4, 5]]);
  });
});