let solve = function (A, B) {
  let res = [];
  for (let q in B) {
    let l1 = B[q][0];
    let r1 = B[q][1];
    let l2 = B[q][2];
    let r2 = B[q][3];

    let hm1 = new Map();
    for (let i = l1; i <= r1; i++) {
      hm1.set(A[i], (hm1.get(A[i]) || 0) + 1);
    }

    let hm2 = new Map();
    for (let i = l2; i <= r2; i++) {
      hm2.set(A[i], (hm2.get(A[i]) || 0) + 1);
    }
    let flag = false;

    if (hm1.size == hm1.size) {
      for (let k of hm1.keys()) {
        if (!(hm2.has(k) && hm2.get(k) == hm1.get(k))) {
          res[q] = 0;
          flag = true;
          break;
        }
      }
    } else {
      res[q] = 0;
      break;
    }
    res[q] = flag ? 0 : 1;
  }
  return res;
};

console.log(
  solve(
    [0, 100000],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 1, 0, 1],
    ]
  )
);
