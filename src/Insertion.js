export function insertSort(a) {
  a = Array.isArray(a) ? a : [];
  for (let i = 1; i < a.length; i++) {
    let value = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > value) {
      a[j + 1] = a[j];
      j = j - 1;
    }
    a[j + 1] = value;
  }

  return a;
}
