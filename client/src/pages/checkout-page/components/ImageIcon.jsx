export const ImageIcon = ({ img, width }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/img/${img}.svg`}
      width={width}
      alt={img}
    />
  );
};
