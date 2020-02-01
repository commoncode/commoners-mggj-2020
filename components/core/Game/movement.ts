export const getWalkDuration = (x1, y1, x2, y2, speed) => {
  const travelX = x1 > x2 ? x1 - x2 : x2 - x1;
  const travelY = y1 > y2 ? y1 - y2 : y2 - y1;

  const distance = Math.sqrt(Math.pow(travelX, 2) + Math.pow(travelY, 2));

  return Math.abs(distance / speed);
};
