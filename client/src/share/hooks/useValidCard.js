import { useState, useEffect } from 'react';
import valid from 'card-validator';

const PAYMENT_CARD = Object.freeze({
  'american-express': 'Amex',
  Bancontact: 'Bancontact',
  'diners-club': 'DinersClub',
  discover: 'Discover',
  elo: 'Elo',
  maestro: 'Maestro',
  mastercard: 'MasterCard',
  UnionPay: 'UnionPay',
  visa: 'Visa',
  jcb: 'JCB',
  unionpay: 'UnionPay',
  mir: 'Mir',
  hiper: 'Hiper',
  hipercard: 'Hipercard',
});

const normalizeCardNumber = (value = '') => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

export const useValidCard = (number = '') => {
  let сardNumber = '';

  сardNumber = normalizeCardNumber(number);

  const [cardImageName, setCardImageName] = useState('');

  let CardNumberValidation = valid.number(сardNumber);

  useEffect(() => {
    setCardImageName(`${PAYMENT_CARD[CardNumberValidation.card?.type]}`);
  }, [CardNumberValidation]);

  return {
    normalizedCardNumber: сardNumber,cardImageName,
    CardNumberValidation,
  };
};
