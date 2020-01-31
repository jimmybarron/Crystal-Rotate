console.log(document.querySelector('.crystalSpin'))

const crystalSpin = new ThreeSixty(document.querySelector('.crystalSpin'), {
  width: 640,
  height: 360,
  image: './image-sequence/crystal_sprite.png',
  count: 253,
  perRow: 15,
  draggable: true,
  swipeable: true,
  dragTolerance: 0.5,
  swipeTolerance: 0.5
});