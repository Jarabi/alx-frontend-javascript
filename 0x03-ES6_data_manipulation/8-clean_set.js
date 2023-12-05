const cleanSet = (set, startString) => {
  const start = startString.length;
  const stringArr = [];

  for (const value of set) {
    if (startString && value.startsWith(startString)) stringArr.push(value.slice(start));
  }

  return stringArr.join('-');
};

export default cleanSet;
