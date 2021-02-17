import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export const dateShow = () => {
  const now = new Date();
  const formatDay = format(now, 'd MMMM yyy', { locale: ru });
  const formatTime = format(now, 'H:mm', );
  return `${formatDay}, ${formatTime}`;
};
export const dateTime = () => {
  const now = new Date();
  const formatTime = format(now, 'yyy-MM-dd H:mm');

  return formatTime;
};

