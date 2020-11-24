const [order, setOrder] = useState<PizzaOrder>(DEFAULT_PIZZA_ORDER);

  // Order totalPrice
  const refPrice = useRef<number>(START_PRICE);

  // Pizza Size
  const [selectedValueSize, setValueSize] = useState<string>(
    pizzaSize[0].value
  );

const onChangeValueSize = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  setValueSize(value);
}

export const Configurator: FC = () => { return null}