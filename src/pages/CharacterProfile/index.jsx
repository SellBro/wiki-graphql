import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

import { GET_CHARACTER } from 'shared/utils/queries/characters';
import { ErrorMessage, CharacterImage } from 'shared/components';

import EpisodesList from './EpisodesList';

import * as Styled from './styled';

const characterDetails = ['name', 'status', 'gender', 'species', 'type'];

const CharacterProfile = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <h1>Loader</h1>;
  if (error) return <ErrorMessage text="Character Not found" />;

  const { character } = data;

  const originLocation = character.origin.id ? (
    <Styled.LinkStyled to={`/locations/${character.origin.id}`}>
      {character.origin.name}
    </Styled.LinkStyled>
  ) : (
    <span>{character.origin.name}</span>
  );
  const currentLocation = character.location.id ? (
    <Styled.LinkStyled to={`/locations/${character.location.id}`}>
      {character.location.name}
    </Styled.LinkStyled>
  ) : (
    <span>{character.location.name}</span>
  );

  return (
    <Styled.Container>
      <Styled.ProfileContainer>
        <CharacterImage src={character.image} alt={character.name} />
        <Styled.InfoContainer>
          <Styled.InfoList>
            {characterDetails.map(detail => (
              <Styled.InfoListItem key={detail}>
                <span>{detail}:</span>
                {character[detail] || 'None'}
              </Styled.InfoListItem>
            ))}
            <Styled.InfoListItem>
              <span>origin location: </span>
              {originLocation}
            </Styled.InfoListItem>
            <Styled.InfoListItem>
              <span>current location: </span>
              {currentLocation}
            </Styled.InfoListItem>
          </Styled.InfoList>
        </Styled.InfoContainer>
      </Styled.ProfileContainer>
      <EpisodesList episodes={character.episode} />
    </Styled.Container>
  );
};

export default CharacterProfile;
