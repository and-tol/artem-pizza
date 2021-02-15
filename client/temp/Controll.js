<Controller
  render={props => {
    return Object.entries(SIZE).map(option => {
      console.log('props', props);
      return (
        <Fragment key={option[1].id}>
          <input
            type='radio'
            value={option[1].slug}
            onChange={e => props.onChange(e.target.checked)}
            // checked={props.value}
          />
          <label>{option[1].name}см</label>
        </Fragment>
      );
    });
  }}
  // as={
  //   <FieldsetRadioGroupSwitcher>
  //     <RadioGroupWithRef
  //       legend='Размер'
  //       control={input}
  //       options={SIZE}
  //       name='size'
  //     />
  //   </FieldsetRadioGroupSwitcher>
  // }
  control={control}
  name='size'
/>;
