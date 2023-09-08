function afterNYears(obj, afterN) {
  let newObj = {};
  for (const key in obj) {
      const element = obj[key];
      newObj[key] = element+Math.abs(afterN);
  }

  return newObj;
}

module.exports = afterNYears;
