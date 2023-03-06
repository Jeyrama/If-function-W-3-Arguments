/*
Create a function called "if" which takes 
3 arguments: a value bool and 2 functions 
(which do not take any parameters): func1 and func2

When bool is truthy, func1 should be called, otherwise call the func2.
*/


// Solution

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

// or

const _if = (bool, func1, func2) => bool ? func1() : func2();