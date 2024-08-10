const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const deleteLastDot = (str: string) => {
  return str.slice(0, -1);
};

export const dateToLocal = (date: string) => {
  const newDate = date.split('.').slice(0, 2).reverse().concat(date.slice(-2)).join('.');

  const localFullDate = new Date(newDate).toLocaleDateString('ru', {
    month: 'short',
    weekday: 'short',
    day: 'numeric'
  });

  const localShortDate = new Date(newDate).toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long'
  });

  return { full: capitalize(deleteLastDot(localFullDate)), short: localShortDate };
};
