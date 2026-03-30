// 1-б
// 2-г
// 3-б
// 4-б
// 5-б
// 6-г
// 7-в
// 8-в
// 9
// == utguudig hairshuul n
// === utguudig shaardlagatai ued true bushaan n
// 10
// function addNumbers(a, v) {
//   return a + v;
// }
// let c = addNumbers(5, 5);
// console.log(c);
//  11
// const greet = (name, callback) => {
//   let lplp = "namaig" + name + "gedeg";
//   callback(lplp);
// };
// const nom = (popo) => {
//   console.log(popo);
// };
// greet("ganhuleg", nom);
// 12
// console.log([1, 2, 3].map((n) => n * 2));
// 13
// for- ene n 1-r davdalttai bolno

// while-ene n 2-r davdalttai bolno
//  14
// console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((num) => num % 2 !== 0));
// 15
// 16
// const removeDuplicates = [1, 2, 2, 3, 4, 4, 5];
// console.log([...new Set(removeDuplicates)]);
// 17
// const findMax = [4, 7, 2, 8, 10, 3];
// console.log(findMax.reduce((max, current) => (current > max ? current : max)));
// 18
// const sumOfArray = [1, 2, 3, 4, 5];
// console.log(sumOfArray.reduce((sum, current) => sum + current, 0));
// 19
// const fuzzBizz =
// 20
const a = [1, 3, 5];
const b = [2, 4, 6];
const mergeArrays = (a, b) => {
  let merged = a.concat(b);
  return merged.sort((x, y) => x - y);
};
console.log(mergeArrays(a, b));
