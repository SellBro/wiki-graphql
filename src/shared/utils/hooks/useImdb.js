import { useState } from 'react';

import { separateEpisodeNumber } from '../helpers';

const link = `https://www.omdbapi.com/?apikey=${process.env.API_KEY}&i=tt2861424&`;

export const useImdb = episodeNumber => {
  const [loadingImdb, setLoading] = useState(true);
  const [errorImdb, setError] = useState(undefined);
  const [dataImdb, setData] = useState(undefined);

  const [season, episode] = separateEpisodeNumber(episodeNumber);

  const fetchImdb = async () => {
    try {
      const result = await fetch(`${link}Season=${season}&Episode=${episode}`);
      const data = await result.json();

      if (data.Error) {
        setError(data.Error);
      } else {
        setData(data);
      }
    } catch (e) {
      setError('Error');
    } finally {
      setLoading(false);
    }
  };

  return { loadingImdb, errorImdb, dataImdb, fetchImdb };
};
