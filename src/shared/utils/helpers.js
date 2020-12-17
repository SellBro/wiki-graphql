export const scrollTo = (top, left, behavior = 'smooth') => {
  window.scrollTo({ top, left, behavior });
};

export const separateEpisodeNumber = episode => {
  const reg = /[se]/i;
  if (!reg.test(episode)) {
    return ['', ''];
  }
  const splittedEpisode = episode
    .split(reg)
    .filter(Boolean)
    .map(str => Number(str));
  return [splittedEpisode[0], splittedEpisode[1]];
};

export const displaySeparateEpisode = episode => {
  const reg = /[se]/i;
  if (!reg.test(episode)) {
    return 'No such episode';
  }
  const splittedEpisode = episode.split(reg).filter(Boolean);
  return `S${splittedEpisode[0]} E${splittedEpisode[1]}`;
};

export const combineEpisodeNumber = (season, episode) => {
  const seasonNumber = +season < 10 ? `S0${season}` : `S${season}`;

  const episodeNumber = +episode < 10 ? `E0${episode}` : `E${episode}`;

  if (Number.isNaN(+season) || Number.isNaN(+episode)) {
    return '';
  }

  if (!season) {
    return `${episodeNumber}`;
  }
  if (!episode) {
    return `${seasonNumber}`;
  }
  return `${seasonNumber}${episodeNumber}`;
};

export const getEpisode = (state, payload) => {
  if (payload.value === 'any') {
    const episode =
      payload.option === 'season'
        ? combineEpisodeNumber('', state.episode)
        : combineEpisodeNumber(state.season, '');
    return {
      ...state,
      [payload.option]: '',
      filterOptions: {
        ...state.filterOptions,
        episode,
      },
    };
  }

  const episode =
    payload.option === 'season'
      ? combineEpisodeNumber(payload.value, state.episode)
      : combineEpisodeNumber(state.season, payload.value);

  return {
    ...state,
    [payload.option]: payload.value,
    filterOptions: {
      ...state.filterOptions,
      episode,
    },
  };
};
