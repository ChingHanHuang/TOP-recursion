const fibIterative = (n) => {
  let a = [0, 1];
  while (n > a.length) {
    a.push(a[a.length - 2] + a[a.length - 1]);
  }
  return a;
};

console.log("fibIterative: " + fibIterative(8));

const fibRecursive = (n, a = [0, 1]) => {
  if (a.length >= n) return a;
  return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
};

console.log("fibRecursive: " + fibRecursive(8));
