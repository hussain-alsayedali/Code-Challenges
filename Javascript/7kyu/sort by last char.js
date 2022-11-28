let x = "man i need a taxi up to ubud";

x = x.split(" ");

x = x.sort((a, b) => {
  if (b.slice(-1) > a.slice(-1)) {
    return -1;
  } else if (b.slice(-1) < a.slice(-1)) {
    return 1;
  } else {
    return 0;
  }
});

console.log(x);
return x;
