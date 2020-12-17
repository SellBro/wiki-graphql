import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_LOCATION } from 'shared/utils/queries/locations';

import { Loader, ErrorMessage, ResidentsList } from 'shared/components';

import { LocationContainer, LocationTitle, InfoContainer, ExtraInfoContainer } from './styled';

const LocationProfile = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_LOCATION, {
    variables: { id },
  });
  if (loading) return <Loader />;
  if (error) return <ErrorMessage />;
  const { location } = data;

  const shortLocationName = longName => {
    const descriptionIndex = longName.indexOf('(');
    if (descriptionIndex === -1) return longName;
    return longName.slice(0, descriptionIndex - 1);
  };
  const locationShortName = shortLocationName(location.name);
  const dimensionName = !location.dimension.toLowerCase().includes('dimension')
    ? `${location.dimension} dimension`
    : location.dimension;
  const typeName = location.type === 'unknown' ? `${location.type} type` : location.type;

  return (
    <LocationContainer>
      <InfoContainer>
        <LocationTitle>{locationShortName}</LocationTitle>
        <ExtraInfoContainer>
          <span>{dimensionName}</span>
          <span>{typeName}</span>
        </ExtraInfoContainer>
      </InfoContainer>
      <ResidentsList characters={location.residents} title="residents" listLength={7} />
    </LocationContainer>
  );
};

export default LocationProfile;
