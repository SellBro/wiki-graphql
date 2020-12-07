import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import {
  EpisodeListContainer,
  EpisodeListItem,
  EpisodeListStyled,
  EpisodesTitle,
  LinkStyled,
  ButtonContainer,
} from './styled';

const EpisodesList = ({ episodes }) => {
  const [episodeListIsFull, setEpisodeListIsFull] = useState(false);
  const visibleEpisodes = episodeListIsFull ? episodes : episodes.slice(0, 7);

  const handleClick = () => {
    setEpisodeListIsFull(prev => !prev);
  };

  return (
    <EpisodeListContainer>
      <EpisodesTitle>episodes: </EpisodesTitle>
      <EpisodeListStyled>
        {visibleEpisodes.map(({ name, id, episode }) => {
          return (
            <EpisodeListItem key={id}>
              <LinkStyled to={`/episodes/${id}/${episode}`}>
                <span>{name}</span>
                <span>{displaySeparateEpisode(episode)}</span>
              </LinkStyled>
            </EpisodeListItem>
          );
        })}
      </EpisodeListStyled>
      {episodes.length > 7 && (
        <ButtonContainer>
          <Button fullWidth onClick={handleClick}>
            {episodeListIsFull ? 'Show less' : 'Show more'}
          </Button>
        </ButtonContainer>
      )}
    </EpisodeListContainer>
  );
};

const displaySeparateEpisode = episode => {
  const reg = /[se]/i;
  if (!reg.test(episode)) {
    return 'No such episode';
  }
  const splittedEpisode = episode.split(reg).filter(Boolean);
  return `S${splittedEpisode[0]} E${splittedEpisode[1]}`;
};

EpisodesList.propTypes = {
  episodes: PropTypes.array,
};

EpisodesList.defaultProps = {
  episodes: [],
};

export default EpisodesList;
