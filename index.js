console.log(document.querySelector('.crystalSpin'))

const crystalSpin = new ThreeSixty(document.querySelector('.crystalSpin'), {
  width: 375,
  height: 210,
  image: './image-sequence/crystal_sprite_2.png',
  count: 253,
  perRow: 12,
  draggable: true,
  swipeable: true,
  dragTolerance: 0.5,
  swipeTolerance: 0.5
});