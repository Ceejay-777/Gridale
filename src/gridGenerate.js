export const shuffle = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list
};

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
  "bg-green-300",
  "bg-orange-300",
];


export const getRandomIndex = (totalColorNo, gridColorNo) => {
  const possibleInts = Array.from({ length: totalColorNo }, (_, i) => i);
  shuffle(possibleInts);
  // console.log(possibleInts.slice(0, gridColorNo));
  return possibleInts.slice(0, gridColorNo);
};

export const getRandomColors = (colorsList, randomIndex, gridColorNo) => {
  const randomColors = [];
  for (let i = 0; i < gridColorNo; i++) {
    randomColors.push(colorsList[randomIndex[i]]);
  }
  return randomColors;
};

export const generateRandomColors = (colorsList, totalColorNo, gridColorNo) => {
  let randomColors = getRandomColors(
    colorsList,
    getRandomIndex(totalColorNo, gridColorNo),
    gridColorNo
  );
  let primaryColor = randomColors[Math.floor(Math.random() * gridColorNo)];

  for (let i = 0; i < totalColorNo - gridColorNo; i++) {
    randomColors.push(primaryColor);
  }

  shuffle(randomColors);
  return [randomColors, primaryColor];
};

export const generateGridslist = (a, b, c) => {
  let gridslist = []
  let totalPossibleClicks = 0
  for (let x=1;  x <= a; x++) {
    gridslist.push(color_2x2_bg)
    totalPossibleClicks += 1
  }
  for (let x=1;  x <= b; x++) {
    gridslist.push(color_3x3_bg)
    totalPossibleClicks += 3
  }
  for (let x=1;  x <= c; x++) {
    gridslist.push(color_4x4_bg)
    totalPossibleClicks += 4
  }

  return [gridslist, totalPossibleClicks]
}


