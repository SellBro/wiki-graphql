import React from 'react';

import { LoaderContainer } from './styled';

const animations = [
  'https://media.giphy.com/media/WPtWaxuzyf5awJYb3m/giphy.gif',
  'https://media.giphy.com/media/l378w2NKt3URm6w5W/giphy.gif',
  'https://media.giphy.com/media/pVVKJJuEQre3219fLh/giphy.gif',
];

const Loader = React.memo(() => (
  <LoaderContainer>
    <img
      height="300"
      src={animations[Math.floor(Math.random() * animations.length)]}
      alt="loader"
    />
  </LoaderContainer>
));

export default Loader;
