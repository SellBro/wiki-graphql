import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import Skeleton from 'react-loading-skeleton';

import { GET_ALL_LOCATIONS } from 'shared/utils/queries/locations';

import { ErrorMessage } from 'shared/components';

import * as S from './styled';

const LocationsList = ({ page, filter }) => {
  const { data, loading, error, fetchMore } = useQuery(GET_ALL_LOCATIONS, {
    variables: { page, filter },
  });

  if (error) return <ErrorMessage text="There are no sush locations" />;

  const handleClick = () => {
    if (data.locations.info.next) {
      fetchMore({
        variables: { page: data.locations.info.next, filter },
        updateQuery: (prev, current) => {
          if (!current.fetchMoreResult) return prev;
          return {
            locations: {
              ...current.fetchMoreResult.locations,
              results: [...prev.locations.results, ...current.fetchMoreResult.locations.results],
            },
          };
        },
      });
    }
  };

  const { results } = !loading && data.locations;

  const content = loading ? (
    <Skeleton count={10} />
  ) : (
    results.map(({ id, name, type = '' }) => {
      return (
        <S.LocationsListItem key={id}>
          <S.LinkStyled to={`/locations/${id}`}>
            <S.LocationName>{name}</S.LocationName>
            <S.LocationType>{type}</S.LocationType>
          </S.LinkStyled>
        </S.LocationsListItem>
      );
    })
  );

  return (
    <S.LocationsContainer>
      <S.LocationsListStyled>{content}</S.LocationsListStyled>
      {!loading && data.locations.info.next && (
        <S.ButtonContainer>
          <S.Button fullWidth onClick={handleClick}>
            Show more
          </S.Button>
        </S.ButtonContainer>
      )}
    </S.LocationsContainer>
  );
};

LocationsList.propTypes = {
  page: PropTypes.number,
  filter: PropTypes.object.isRequired,
};

LocationsList.defaultProps = {
  page: 1,
};

export default LocationsList;
