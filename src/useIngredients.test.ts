import { useIngredients } from './useIngredients';
import { act, renderHook } from '@testing-library/react-hooks';

describe('useIngredients', () => {
  it('uses empty array as defalt value', () => {
    const { result } = renderHook(() => useIngredients([]));

    expect(result.current[0]).toEqual([]);
  });
  describe('with initial value', () => {
    it('uses initial value as default', () => {
      const { result } = renderHook(() => useIngredients(['1', '2', '3']));

      expect(result.current[0]).toEqual(['1', '2', '3']);
    });
  });
  describe('.addItem', () => {
    it('adds the item to the state array', () => {
      const { result } = renderHook(() => useIngredients([]));

      act(() => {
        result.current.addItem('test');
      });

      expect(result.current[1]).toEqual(['test']);
    });
  });
  describe('.removeItem', () => {
    it('removes the item to the state array', () => {
      const { result } = renderHook(() =>
        useIngredients(['test1', 'test2', 'test3'])
      );

      act(() => {
        result.current.removeItem('test2');
      });

      expect(result.current[2]).toEqual(['test1', 'test3']);
    });
  });
});
