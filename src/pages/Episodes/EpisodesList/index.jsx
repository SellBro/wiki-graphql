import React from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { useQuery } from '@apollo/react-hooks';

import { displaySeparateEpisode } from 'shared/utils/helpers';

import { GET_ALL_EPISODES } from 'shared/utils/queries/episodes';

import { ErrorMessage, Button } from 'shared/components';

import * as S from './styled';

const EpisodesList = ({ page, filter }) => {
  const { filterOptions } = filter;

  const { data, loading, error, fetchMore } = useQuery(GET_ALL_EPISODES, {
    variables: { page, filter: filterOptions },
  });

  if (error) return <ErrorMessage text="There are no sush episodes" />;

  const handleClick = () => {
    if (data.episodes.info.next) {
      fetchMore({
        variables: {
          page: data.episodes.info.next,
          filter: filterOptions,
        },
        updateQuery: (prev, current) => {
          if (!current.fetchMoreResult) return prev;
          return {
            episodes: {
              ...current.fetchMoreResult.episodes,
              results: [...prev.episodes.results, ...current.fetchMoreResult.episodes.results],
            },
          };
        },
      });
    }
  };

  const { results } = !loading && data.episodes;

  const content = loading ? (
    <Skeleton count={10} />
  ) : (
    results.map(({ id, name, episode }) => {
      return (
        <S.EpisodesListItem key={id}>
          <S.LinkStyled to={`/episodes/${id}/${episode}`}>
            <S.EpisodeName>{name}</S.EpisodeName>
            <S.EpisodeType>{displaySeparateEpisode(episode)}</S.EpisodeType>
          </S.LinkStyled>
        </S.EpisodesListItem>
      );
    })
  );

  return (
    <S.EpisodesListContainer>
      <S.EpisodesListStyled>{content}</S.EpisodesListStyled>
      {!loading && data.episodes.info.next && (
        <S.ButtonContainer>
          <Button fullWidth large active onClick={handleClick}>
            Show more
          </Button>
        </S.ButtonContainer>
      )}
    </S.EpisodesListContainer>
  );
};

EpisodesList.propTypes = {
  page: PropTypes.number,
  filter: PropTypes.object.isRequired,
};

EpisodesList.defaultProps = {
  page: 1,
};

export default EpisodesList;
