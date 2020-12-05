export const color = {
  background: '#1c1c1c',
  orange: '#ff8311',
  selectionBlack: '#202329',
  header: '#434343',
  border: '#11b0c8',
  grayTransparent: 'rgba(46, 46, 46, 0.9)',

  cardBackground: 'rgb(46, 46, 46)',
  cardInfo: 'rgb(46, 46, 46, 0.8)',

  selectionOrange: '#ff9800',
  textPrimary: '#f4f6fc',
};

export const font = {
  primary: 'font-family: "Open Sans", Arial, sans-serif;',
  test: `font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";`,
  size: size => `font-size: ${size}px`,
};

const sizes = {
  mobile: 500,
  tablet: 769,
  laptop: 1025,
  desktop: 1500,
};

export const device = {
  mobileS: `only screen and (max-width: ${sizes.mobile - 1}px)`,
  mobile: `only screen and (max-width: ${sizes.tablet - 1}px)`,
  tablet: `only screen and (min-width: ${sizes.tablet}px)`,
  tabletOnly: `only screen and (min-width: ${sizes.tablet}px) and (max-width: ${
    sizes.laptop - 1
  }px)`,
  laptop: `only screen and (min-width: ${sizes.laptop}px)`,
  laptopOnly: `only screen and (min-width: ${sizes.laptop}px) and (max-width: ${
    sizes.desktop - 1
  }px)`,
  desktop: `only screen and (min-width: ${sizes.desktop}px)`,
};
