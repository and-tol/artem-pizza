export const CheckboxGroup = ({ register, legend, options, name }) => {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {Object.entries(options).map(option => {
        return (
          <label key={option[1].id}>
            <input
              ref={register}
              type='checkbox'
              value={option[1].slug}
              name={name}
            />
            {option[1].name}
          </label>
        );
      })}
    </fieldset>
  );
};