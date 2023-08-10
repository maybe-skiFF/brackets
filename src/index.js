module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  let closedBrackets = [];
  let stack = [];
  
  bracketsConfig.forEach(el => {
      openBrackets.push(el[0]);
      closedBrackets.push(el[1]);
  });

  for (i = 0; i < str.length; i++) {
      let curr = str[i];
      let last = stack.slice(-1);
      let isOpen = openBrackets.includes(curr);
      let isClose = closedBrackets.includes(curr);

      if (!isClose && !isOpen) {
          continue;
      }
      if (isClose && isOpen) {
        (last != curr) ? stack.push(curr) : stack.pop();
          continue;
      }
      if (isOpen) {
          stack.push(curr);
      } else {
          if (stack.length == 0) {
              return false;
          }
          if (last == openBrackets[closedBrackets.indexOf(curr)]) {
              stack.pop();
          }
      }
  }
  return stack.length === 0;
}