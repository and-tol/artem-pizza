import { forwardRef, Fragment } from 'react';

export const RadioGroupWithRef = forwardRef(props => {
  const { register, legend, name, options } = props;

  return (
    <>
      <>
        <legend>{legend}</legend>
        <div>
          {Object.entries(options).map(option => (
            <Fragment key={option[1].id}>
              <input
                ref={register}
                type='radio'
                name={name}
                value={option[1].slug}
              />
              <label key={option[1].id}>
                {option[1].name}
                {name === 'size' ? 'см' : null}
              </label>
            </Fragment>
          ))}
        </div>
      </>
    </>
  );
});
