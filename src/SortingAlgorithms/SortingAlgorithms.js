export function getMergeSortAnimations(array) {
  let animations = [];
  if (array.length <= 1) return array;
  let auxillaryArray = array.slice();
  mergeSort(array, 0, array.length - 1, animations, auxillaryArray);
  return animations;
}

function mergeSort(array, startIdx, endIdx, animations, auxillaryArray) {
  if (startIdx == endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSort(auxillaryArray, startIdx, middleIdx, animations, array);
  mergeSort(auxillaryArray, middleIdx + 1, endIdx, animations, array);
  var i = startIdx,
    j = middleIdx + 1,
    k = startIdx;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxillaryArray[i] < auxillaryArray[j]) {
      array[k] = auxillaryArray[i];
      var a = auxillaryArray[i];
      animations.push([k, a]);
      animations.push([k, a]);
      k++;
      i++;
    } else {
      array[k] = auxillaryArray[j];
      var a = auxillaryArray[j];
      animations.push([k, a]);
      animations.push([k, a]);
      k++;
      j++;
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    array[k] = auxillaryArray[i];
    var a = auxillaryArray[i];
    animations.push([k, a]);
    animations.push([k, a]);
    k++;
    i++;
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    array[k] = auxillaryArray[j];
    var a = auxillaryArray[j];
    animations.push([k, a]);
    animations.push([k, a]);
    k++;
    j++;
  }

  return;
}

export function getInsertionSortAnimations(array) {
  let animations = [];
  var i, key, j;
  for (i = 0; i < array.length; i++) {
    key = array[i];
    j = i - 1;
    animations.push([i, 1]);

    while (j >= 0 && array[j] > key) {
      animations.push([j, 2]);
      j--;
    }
    j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      animations.push([j, 2]);
      animations.push([j + 1, array[j]]);
      animations.push([j, 1]);
      j--;
    }
    array[j + 1] = key;
    animations.push([j + 1, key]);
    animations.push([j + 1, 3]);
    animations.push([i, 3]);
  }
  for (let i = 0; i < array.length; i++) animations.push([i, 4]);
  return animations;
}

export function getBubbleSortAnimations(array) {
  let animations = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      animations.push([j, 1]);
      animations.push([j + 1, 1]);
      if (array[j] > array[j + 1]) {
        animations.push([j + 1, array[j]]);
        animations.push([j, array[j + 1]]);
        let c = array[j];
        array[j] = array[j + 1];
        array[j + 1] = c;
      }
      animations.push([j, 2]);
      animations.push([j + 1, 2]);
    }
    animations.push([array.length - 1 - i, 3]);
  }
  for (let i = array.length - 1; i >= 0; i--) animations.push([i, 2]);
  return animations;
}

export function getQuickSortAnimations(array) {
  let animations = [];
  partition(array, 0, array.length - 1, animations);
  for (let i = 0; i < array.length; i++) animations.push([i, 2]);
  return animations;
}
function partition(array, i, j, animations) {
  if (i < j) {
    var pivot = array[j];
    animations.push([j, 1]);
    var j1 = i;
    for (let i1 = i; i1 < j; i1++) {
      if (array[i1] <= pivot) {
        animations.push([j1, array[i1]]);
        animations.push([i1, array[j1]]);
        let val = array[j1];
        array[j1] = array[i1];
        array[i1] = val;
        j1++;
      }
    }
    animations.push([j, array[j1]]);
    animations.push([j1, array[j]]);
    array[j] = array[j1];
    array[j1] = pivot;
    animations.push([j1, 3]);

    partition(array, i, j1 - 1, animations);
    partition(array, j1 + 1, j, animations);
  } else if (i == j) animations.push([j, 3]);
  return;
}
export function getHeapSortAnimations(array) {
  let animations = [];
  let n = array.length;
  for (let i = n / 2 - 1; i >= 0; i--) {
    heapify(array, i, n, animations);
  }

  for (let i = n - 1; i >= 0; i--) {
    let c = array[i];
    array[i] = array[0];
    array[0] = c;
    animations.push([0, 1]);
    animations.push([i, 1]);
    animations.push([0, array[0]]);
    animations.push([i, array[i]]);
    animations.push([i, 4]);
    heapify(array, 0, i, animations);
  }
  for (let i = 0; i < n; i++) animations.push([i, 5]);
  return animations;
}
function heapify(array, i, n, animations) {
  let f = 2 * i + 1;
  let s = 2 * i + 2;
  let largest = i;
  animations.push([i, 1]);
  if (f < n) animations.push([f, 1]);
  if (s < n) animations.push([s, 1]);
  if (f < n && array[f] > array[i]) {
    largest = f;
  }
  if (s < n && array[s] > array[largest]) {
    largest = s;
  }
  animations.push([largest, 2]);
  animations.push([i, 2]);
  let c = array[i];
  array[i] = array[largest];
  array[largest] = c;
  animations.push([i, array[i]]);
  animations.push([largest, array[largest]]);
  animations.push([i, 3]);
  if (f < n) animations.push([f, 3]);
  if (s < n) animations.push([s, 3]);
  if (largest != i) heapify(array, largest, n, animations);

  return;
}
