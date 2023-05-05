const mergeSort = (a) => {
  if (a.length === 1) return a;

  let mid = a.length / 2;
  let left = mergeSort(a.slice(0, mid));
  let right = mergeSort(a.slice(mid));
  return sort(left, right);
};

const sort = (l, r) => {
  let ans = [];
  let i = 0,
    j = 0;
  while (i < l.length && j < r.length) {
    l[i] < r[j] ? ans.push(l[i++]) : ans.push(r[j++]);
  }
  while (i < l.length) ans.push(l[i++]);
  while (j < r.length) ans.push(r[j++]);
  return ans;
};

console.log(mergeSort([6, 5, 3, 1, 8, 7, 2, 4]));
