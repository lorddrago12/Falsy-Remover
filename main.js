function bouncer(arr) {
  const result = [...arr]; // copy so we don't mutate the original
  const falsyValues = [false, null, 0, "", undefined];

  // remove normal falsy values
  for (let j = 0; j < falsyValues.length; j++) {
    while (result.includes(falsyValues[j])) {
      const falsyValuesIndex = result.indexOf(falsyValues[j]);
      result.splice(falsyValuesIndex, 1);
    }
  }

  // handle NaN separately since NaN === NaN is false in JS
  while (result.some(function(el) { return Number.isNaN(el); })) {
    const nanIndex = result.findIndex(function(el) { return Number.isNaN(el); });
    result.splice(nanIndex, 1);
  }

  return result;
}
