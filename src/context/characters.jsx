import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  filter: {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  },
  page: 1,
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'prevPage':
      return {
        ...state,
        page: state.page - 1,
      };

    case 'nextPage':
      return {
        ...state,
        page: state.page + 1,
      };

    case 'setPage':
      return { ...state, page: action.payload };

    case 'setFilter':
      if (action.payload.value === 'any') {
        return {
          ...state,
          page: 1,
          filterOptions: {
            ...state.filterOptions,
            [action.payload.option]: '',
          },
        };
      }
      return {
        ...state,
        page: 1,
        filterOptions: {
          ...state.filterOptions,
          [action.payload.option]: action.payload.value,
        },
      };
    case 'resetFilter':
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const CharacterContext = createContext(undefined);

export const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  return (
    <CharacterContext.Provider value={{ state, dispatch }}>{children}</CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }

  return context;
};
