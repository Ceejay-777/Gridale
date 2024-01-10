export const color_2x2_bg = [
  "bg-red-600",
  "bg-yellow-400",
  "bg-green-600",
  "bg-blue-600",
  "bg-orange-600",
  "bg-pink-600",
];

export const color_3x3_bg = [
  "bg-red-600",
  "bg-yellow-400",
  "bg-green-600",
  "bg-blue-600",
  "bg-orange-600",
  "bg-pink-600",
  "bg-purple-600",
  "bg-gray-600",
  "bg-teal-600",
];

export const color_4x4_bg = [
  "bg-red-600",
  "bg-yellow-400",
  "bg-green-600",
  "bg-blue-600",
  "bg-orange-600",
  "bg-pink-600",
  "bg-purple-600",
  "bg-gray-600",
  "bg-teal-600",
  "bg-indigo-300",
  "bg-rose-950",
  "bg-lime-300",
  "bg-pink-400",
  "bg-gray-950",
  "bg-white",
  "bg-orange-300",
];

const shuffle = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
};

const generateRandomIndex = (totalColorNo) => {
  const possibleInts = Array.from({ length: totalColorNo }, (_, i) => i);
  shuffle(possibleInts);
  console.log(possibleInts.slice(0, totalColorNo));
  return possibleInts.slice(0, gridNo);
};

const generateRandomColors = (colorsList, randomIndex, gridNo) => {
  const randomColors = [];
  for (let i = 0; i < gridNo; i++) {
    randomColors.push(colorsList[randomIndex[i]]);
  }
  console.log(randomColors);
};

// generateRandomColors(color_2x2_bg, generateRandomIndex(4), 4);
// console.log(generateRandomIndex(6));
