var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100
// z=5, x-green

//Progression 1: Add z chocolates of x color
function addChocolates(chocolates, color, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  for (let i = 0; i < count; i++) {
    chocolates.unshift(color);
  }
}

//Progression 2: Remove z chocolates from the top the dispenser
function removeChocolates(chocolates, count) {
  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (count > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  let removedChocolates = [];
  for (let i = 0; i < count; i++) {
    let topChoco = chocolates.shift();
    removedChocolates.push(topChoco);
  }

  return removedChocolates;
}

//Progression 3: Dispense z chocolates
function helperDispenseChocolater(chocolates, number) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  return true;
}
function dispenseChocolates(chocolates, number) {
  let checker = helperDispenseChocolater(chocolates, number);
  if (checker != true) {
    return checker;
  }
  let ans = [];
  for (let i = 0; i < number; i++) {
    ans.push(chocolates.pop());
  }

  return ans;
}

//Progression 4: Dispense z chocolates of x color
function dispenseChocolatesOfColor(chocolates, number, color) {
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  let ans = [];

  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] === color) {
      let chocolate = chocolates[i];
      ans.push(chocolate);
    }
  }
  return ans;
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolatesArray, number) {
  let ans = [];
  let green = 0;
  let silver = 0;
  let blue = 0;
  let crimson = 0;
  let purple = 0;
  let red = 0;
  let pink = 0;

  for (let i = 0; i < chocolatesArray.length; i++) {
    if (chocolatesArray[i] == 'green') {
      green++;
    }
    if (chocolatesArray[i] == 'silver') {
      silver++;
    }
    if (chocolatesArray[i] == 'blue') {
      blue++;
    }
    if (chocolatesArray[i] == 'crimson') {
      crimson++;
    }
    if (chocolatesArray[i] == 'purple') {
      purple++;
    }
    if (chocolatesArray[i] == 'red') {
      red++;
    }
    if (chocolatesArray[i] == 'pink') {
      pink++;
    }
  }
  if (green != 0) {
    ans.push(green);
  }
  if (silver != 0) {
    ans.push(silver);
  }
  if (blue != 0) {
    ans.push(blue);
  }
  if (crimson != 0) {
    ans.push(crimson);
  }
  if (purple != 0) {
    ans.push(purple);
  }
  if (red != 0) {
    ans.push(red);
  }
  if (pink != 0) {
    ans.push(pink);
  }
  return ans;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolatesArray) {
  let colorCounts = {};

  for (let i = 0; i < chocolatesArray.length; i++) {
    let color = chocolatesArray[i];
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  }

  let sortedColors = Object.keys(colorCounts).sort((a, b) => colorCounts[b] - colorCounts[a]);
  let sortedChocolates = [];
  for (let color of sortedColors) {
    for (let i = 0; i < colorCounts[color]; i++) {
      sortedChocolates.push(color);
    }
  }
  return sortedChocolates;
}

//Progression 7: Change z chocolates of x color to y color
function changeChocolateColor(chocolates, number, color, finalColor) {
  if (chocolates.length == 0) {
    return [];
  }
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  for (let i = 0; i < number; i++) {
    if (chocolates[i] !== finalColor && chocolates[i] == color) {
      chocolates[i] = finalColor;
    } else {
      return "Can't replace the same chocolates";
    }
  }
  return chocolates;
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  let count = 0;
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  }
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      chocolates[i] = finalColor;
    }
  }
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == finalColor) {
      count++;
    }
  }
  return [count, chocolates];
}

//Challenge 1: Remove one chocolate of x color from the top
function removeChocolateOfColor(chocolates, color) {
  let indexStore = 0;
  for (let i = 0; i < chocolates.length; i++) {
    if (chocolates[i] == color) {
      indexStore = i;
      break;
    }
  }
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(chocolatesArray) {
  let green = 0;
  let silver = 0;
  let blue = 0;
  let crimson = 0;
  let purple = 0;
  let red = 0;
  let pink = 0;

  for (let i = 0; i < chocolatesArray.length; i++) {
    if (chocolatesArray[i] == 'green') {
      green++;
    }
    if (chocolatesArray[i] == 'silver') {
      silver++;
    }
    if (chocolatesArray[i] == 'blue') {
      blue++;
    }
    if (chocolatesArray[i] == 'crimson') {
      crimson++;
    }
    if (chocolatesArray[i] == 'purple') {
      purple++;
    }
    if (chocolatesArray[i] == 'red') {
      red++;
    }
    if (chocolatesArray[i] == 'pink') {
      pink++;
    }
  }
  let count = 0;
  if (green % 3 == 0) {
    count += green % 3;
  }
  if (blue % 3 == 0) {
    count += blue % 3;
  }

  if (pink % 3 == 0) {
    count += pink % 3;
  }
  if (crimson % 3 == 0) {
    count += crimson % 3;
  }
  if (red % 3 == 0) {
    count += red % 3;
  }
  if (silver % 3 == 0) {
    count += silver % 3;
  }
  if (purple % 3 == 0) {
    count += purple % 3;
  }
  return Math.floor(count);
}
