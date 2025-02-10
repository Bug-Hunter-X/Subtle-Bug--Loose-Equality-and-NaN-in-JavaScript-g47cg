function foo(a) {
  if (a == null) {
    return 0; //This will also return 0 if a is NaN
  }
  return a + 1;
}
console.log(foo(null)); // 0
console.log(foo(NaN)); // NaN