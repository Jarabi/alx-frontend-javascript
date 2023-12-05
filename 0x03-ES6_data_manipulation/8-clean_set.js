const cleanSet = (set, startString) => {
  const startPoint = startString.length;
  const stringSetArr = [];

  if (startString === '') return startString;

  for (const value of set) {
    if (value.startsWith(startString)) stringSetArr.push(value.slice(startPoint));
  }

  return stringSetArr.join('-');
};

export default cleanSet;
