# 🧹 Falsy Remover

A lightweight JavaScript utility that bounces all falsy values out of an array — cleanly, without changing the original.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📖 Overview

`bouncer(arr)` takes any array and returns a new array with every falsy value removed. It handles all standard falsy values **plus** `NaN`, which requires special treatment since `NaN === NaN` is `false` in JavaScript.

---

## 🚫 Values Removed

| Value       | Type        |
|-------------|-------------|
| `false`     | Boolean     |
| `null`      | Null        |
| `0`         | Number      |
| `""`        | String      |
| `undefined` | Undefined   |
| `NaN`       | Number      |

---

## 🚀 Usage

```js
bouncer([7, "hello", false, null, 0, "", undefined, NaN, 42]);
// → [7, "hello", 42]

bouncer([null, NaN, NaN, "keep me", 0, true]);
// → ["keep me", true]

bouncer([false, false, false]);
// → []
```

---

## 📦 Installation

No dependencies. Just copy the function into your project:

```js
function bouncer(arr) {
  const result = [...arr]; // copy so we don't mutate the original
  const falsyValues = [false, null, 0, "", undefined];

  // Remove standard falsy values
  for (let j = 0; j < falsyValues.length; j++) {
    while (result.includes(falsyValues[j])) {
      const falsyValuesIndex = result.indexOf(falsyValues[j]);
      result.splice(falsyValuesIndex, 1);
    }
  }

  // Handle NaN separately since NaN === NaN is false in JS
  while (result.some(function(el) { return Number.isNaN(el); })) {
    const nanIndex = result.findIndex(function(el) { return Number.isNaN(el); });
    result.splice(nanIndex, 1);
  }

  return result;
}
```

---

## ⚙️ How It Works

1. **Copies the input** — uses the spread operator (`[...arr]`) to avoid mutating the original array.
2. **Iterates over known falsy values** — loops through `[false, null, 0, "", undefined]` and splices out every occurrence using `indexOf`.
3. **Handles `NaN` separately** — uses `Number.isNaN()` to find and remove `NaN` entries, since equality checks alone can't detect them.

---

## 🧪 Test Cases

```js
bouncer([1, null, 2, undefined, 3]);     // → [1, 2, 3]
bouncer(["a", 0, "b", "", "c"]);         // → ["a", "b", "c"]
bouncer([NaN, 1, NaN, 2]);              // → [1, 2]
bouncer([false, true, false, true]);     // → [true, true]
bouncer([]);                             // → []
```

---
