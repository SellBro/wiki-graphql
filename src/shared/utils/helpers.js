export const scrollTo = (top, left, behavior = 'smooth') => {
  window.scrollTo({ top, left, behavior });
};

export const cutName = (name, length) => {
  if (!name) return '';
  return name.length > length ? `${name.slice(0, length - 2)}...` : name;
};
