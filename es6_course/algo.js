const isValSeq = (arr, seq);
let count = 0;
for (let i = 0; i < arr.length && count < seq.length; i++) {
  num = arr[i];
  if (num !== undefined) {
    arr[i] = true;
  } else {
    return -1;
  }
}
console.log([1, 3, 4, 5, 6], [1, 3]);
