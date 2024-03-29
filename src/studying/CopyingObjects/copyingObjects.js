var inactiveBullet = {
  location: { x: 0, y: 0 },
  isVisible: false,
  tStart: 0,
  lastTimeStamp: 0,
};

var defaultBulletPositions = [
  { ...inactiveBullet },
  { ...inactiveBullet },
  { ...inactiveBullet },
];

var initialState = {
  screenDimensions: { height: 600, width: 1000 },
  shipOffset: 300,
  bullets: defaultBulletPositions,
};

//each  of the bullets is pointing at the same object.  So if you update the location of bullet 1, all of them
// now have the same location.
