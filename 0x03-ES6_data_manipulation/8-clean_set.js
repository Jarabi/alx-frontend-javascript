const cleanSet = (set, startString) => {
  const stringArr = [];

  for (const value of set) {
    if (startString && value.startsWith(startString)) {
      stringArr.push(value.substring(startString.length));
    }
  }

  return stringArr.join('-');
};

export default cleanSet;
