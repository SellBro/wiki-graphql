import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'shared/components';

import { displaySeparateEpisode } from 'shared/utils/helpers';

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
          <Button fullWidth onClick={() => setEpisodeListIsFull(prev => !prev)}>
            {episodeListIsFull ? 'Show less' : 'Show more'}
          </Button>
        </ButtonContainer>
      )}
    </EpisodeListContainer>
  );
};

EpisodesList.propTypes = {
  episodes: PropTypes.array,
};

EpisodesList.defaultProps = {
  episodes: [],
};

export default EpisodesList;
