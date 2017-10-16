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

export function divideAndConquer(a) {
  a = Array.isArray(a) ? a : [];
  const half = Math.floor(a.length / 2);
  let b = [];
  let c = [];

  for (let i = 0; i < half; i++) {
    b[i] = a[i];
  }
  b.push(999);
  for (let i = half, j = 0; i < a.length; i++, j++) {
    c[j] = a[i];
  }
  c.push(999);

  let i = 0;
  let j = 0;

  for (let k = 0; k < a.length; k++) {
    if (b[i] <= c[j]) {
      a[k] = b[i];
      i++;
    } else {
      a[k] = c[j];
      j++;
    }
  }

  return a;
}
