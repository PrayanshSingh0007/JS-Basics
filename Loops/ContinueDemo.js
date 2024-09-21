let a = 2;
while (a <= 12) {
  if (a % 7 == 0) {
    a++;
    continue;
  }
  console.log(a);
  a++;
}