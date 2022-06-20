const arr = [
  'Yestoday is a History',
  'Tomorrow is a Mystery',
  'Today is a Gift',
  "That's why we call it the Present",
];

/*
  ["Yestoday", "is", "a", "History", "Tomorrow", ...]
*/

const result = arr.flatMap((it) => it.split(' '));
console.log(result);
