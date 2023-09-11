function isEqual(oneObj, twoObj) {
  let isEq = false;

  if (Object.keys(oneObj).length !== Object.keys(twoObj).length) {
    return false;
  }

  if (Array.isArray(oneObj) && Array.isArray(twoObj)) {
    return JSON.stringify(oneObj) === JSON.stringify(twoObj);
  }

  if (typeof oneObj === 'object' && typeof twoObj === 'object') {
    for (const key in oneObj) {
      if (!isEqual(oneObj[key], twoObj[key])) {
        return false;
      }
    }
    return true;
  }

  return oneObj === twoObj;
}

module.exports = isEqual;
