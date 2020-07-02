function quickSort(arr, compare=(a,b)=>a-b) {
  return quickSortImpl(arr, 0, arr.length - 1, compare);
}

function quickSortImpl(arr, left, right, compare) {
  if (left < right) {
    const p = pivot(arr, left, right, compare);
    quickSortImpl(arr, left, p - 1, compare);
    quickSortImpl(arr, p + 1, right, compare);
    return arr;
  }
  return arr;
}

function pivot(arr, left, right, compare) {
  const base = arr[left];
  // i 后面都是小于base的
  let i = left + 1;
  // [ 2,  3,  1,  0,  4,  5,  6]
  //       i   j
  for (let j = i; j <= right; j++) {
    if (compare(arr[j], base) < 0) {
      swap(j, i);
      i++;
    }
  }
  swap(left, i - 1);
  return i - 1;
  function swap(a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
}
