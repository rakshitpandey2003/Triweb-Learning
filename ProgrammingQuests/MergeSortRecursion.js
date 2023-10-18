function sort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(sort(left), sort(right));
  }
  
  function merge(left, right) {
    const res = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) res.push(left.shift());
      else res.push(right.shift());
    }
    return [...res, ...left, ...right];
  }
  const arr = [3, 8, 9, 0, 20, 1, 6];
  console.log(sort(arr));