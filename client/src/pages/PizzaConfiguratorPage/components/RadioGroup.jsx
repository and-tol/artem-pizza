import PropTypes from 'prop-types'
import { Fragment } from 'react'

export const RadioGroup = ({ register, legend, name, options }) => {
  return (
    <>
      <legend>{legend}</legend>
      <div>
        {Object.entries(options).map(option => (
          <Fragment key={option[1].id}>
            <input
              key={option[1].id}
              name={name}
              // ref={register}
              {...register(`${name}`)}
              type='radio'
              value={option[1].slug}
            />
            <label>
              {option[1].name}
              {name === 'size' ? ' см' : null}
            </label>
          </Fragment>
        ))}
      </div>
    </>
  );
};

RadioGroup.propTypes = {
  register: PropTypes.func,
  legend: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
};
