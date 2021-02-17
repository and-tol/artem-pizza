import PropTypes from 'prop-types';

export const ImageIcon = ({ cardImageName, width }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/img/${cardImageName}.svg`}
      width={width}
      alt={cardImageName}
    />
  );
};

ImageIcon.propTypes = {
  cardImageName: PropTypes.string,
  width: PropTypes.string,
};
