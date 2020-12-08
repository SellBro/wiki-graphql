export const scrollTo = (top, left, behavior = 'smooth') => {
  window.scrollTo({ top, left, behavior });
};

export const cutName = (name, length) => {
  if (!name) return '';
  return name.length > length ? `${name.slice(0, length - 2)}...` : name;
};

export const displaySeparateEpisode = episode => {
  const reg = /[se]/i;
  if (!reg.test(episode)) {
    return 'No such episode';
  }
  const splittedEpisode = episode.split(reg).filter(Boolean);
  return `S${splittedEpisode[0]} E${splittedEpisode[1]}`;
};
