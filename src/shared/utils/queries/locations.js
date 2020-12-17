import gql from 'graphql-tag';

export const GET_ALL_LOCATIONS = gql`
  query GetAllLocations($filter: FilterLocation, $page: Int!) {
    locations(filter: $filter, page: $page) {
      info {
        next
      }
      results {
        name
        type
        id
      }
    }
  }
`;

export const GET_LOCATION = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        status
        image
      }
    }
  }
`;
