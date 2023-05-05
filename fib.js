const fibIterative = (n) => {
  if (n < 0) return "Invalid parameter";

  let a = [0, 1];
  while (n > a.length) {
    a.push(a[a.length - 2] + a[a.length - 1]);
  }
  return a;
};

const fibRecursive = (n) => {
  if (n <= 0 || isNaN(n)) return "Invalid parameter";
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  return [
    ...fibRecursive(n - 1),
    fibRecursive(n - 1)[n - 3] + fibRecursive(n - 1)[n - 2],
  ];
};

module.exports = fibRecursive;
