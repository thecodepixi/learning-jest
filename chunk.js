const chunkArray = (arr, len) => {
  const chunkedArr = [];

  arr.forEach((val) => {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });
  console.log(chunkedArr);
  return chunkedArr;
};

module.exports = chunkArray;
