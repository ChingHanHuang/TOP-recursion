const mergeSort = (a) => {
  if (!Array.isArray(a) || isNaN(a[0]))
    return "Invalid Parameter, please pass in an array of numbers";

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

module.exports = mergeSort;
