import PropTypes from 'prop-types'
import { Fragment } from 'react'

export const RadioGroup = ({ register, legend, name, options }) => {
  return (
    <>
      <legend>{legend}</legend>
      <div>
        {Object.entries(options).map(option => (
          <Fragment>
            <input
              ref={register}
              type='radio'
              name={name}
              value={option[1].slug}
            />
            <label key={option[1].id}>
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
  register: PropTypes.object,
  legend: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.object,
};
