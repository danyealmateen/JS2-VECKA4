const obj = {
  egenskap: 100,
};
Object.seal(obj);

obj.egenskap = 0;
console.log(obj);
