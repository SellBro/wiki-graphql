import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { useImdb } from 'shared/utils/hooks/useImdb';
import { GET_EPISODE } from 'shared/utils/queries/episodes';

import { separateEpisodeNumber } from 'shared/utils/helpers';

import {
  ErrorMessage,
  Loader,
  CharacterImage,
  CharacterList,
  ClockIcon,
  ImdbLogo,
} from 'shared/components';

import * as S from './styled';

const Episode = () => {
  const { id, episodeNumber } = useParams();

  const { dataImdb, loadingImdb, fetchImdb, errorImdb } = useImdb(episodeNumber);

  const { data, loading, error } = useQuery(GET_EPISODE, {
    variables: { id },
  });

  useEffect(() => {
    fetchImdb();
    // eslint-disable-next-line
  }, []);

  if (loading || loadingImdb) return <Loader />;
  if (error || errorImdb) return <ErrorMessage text={errorImdb} />;

  const episodeData = { ...data.episode, ...dataImdb };

  const [season, episode] = separateEpisodeNumber(episodeData.episode);

  return (
    <S.EpisodeInfoContainer>
      <S.InnerContainer>
        <S.ImageContainer>
          <CharacterImage src={episodeData.Poster} alt={episodeData.name} />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.InfoHeader>
            <S.EpisodeTitle>{episodeData.name}</S.EpisodeTitle>
          </S.InfoHeader>
          <div>
            <S.ImdbContainer>
              <span>{`Season ${season} Episode ${episode}`}</span>
              <span>
                {episodeData.Ratings[0].Value.split('/')[0]}
                <ImdbLogo />
              </span>
            </S.ImdbContainer>
            <S.ExtraInfoContainer>
              <span>{episodeData.airDate}</span>
              <span>
                <ClockIcon />
                {episodeData.Runtime}
              </span>
            </S.ExtraInfoContainer>
          </div>
        </S.InfoContainer>
      </S.InnerContainer>
      <S.PlotContainer>
        <S.PlotTitle>Plot: </S.PlotTitle>
        <div>{episodeData.Plot}</div>
      </S.PlotContainer>
      <CharacterList title="characters" listLength={4} characters={episodeData.characters} />
    </S.EpisodeInfoContainer>
  );
};

export default Episode;
