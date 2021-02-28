export const normalizeCardNumber = value => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

export const normalizeCardDate = value => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  if (currentYear && currentMonth + 2) {
    return value.replace(/(0[1-9]|1[0-2])\/[0-9]{2}/g, '').substr(0, 7) || '';
  }
  return null;
};

export const normalizeCardCVV = value =>
  value.replace(/[^0-9]/g, '').substr(0, 4) || '';

/*
  const handleNormalizeCardDate = e => {
    const { value } = e.target;
    setValue('cardDate', normalizeCardDate(value));
  };
*/