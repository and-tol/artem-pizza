// ====Change Option ==== //
import {PizzaOptions, PizzaOrder} from '../types'

const useChangeOption = (
  value: string,
  data: PizzaOptions[],
  setOptionValue: any,
  nameGroup: string,
  setOrder: any,
  order: PizzaOrder,
) => {
  setOptionValue(value);

  const selected = data.filter(el => el.value === value)[0];
  setOrder({
    ...order,
    [nameGroup]: selected.value,
  });

  return { order };
};
