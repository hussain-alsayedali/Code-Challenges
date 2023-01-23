let str = "Creating kata is fun";
if (size >= str.length) {
  return str;
}
let slicedStr = "";
if (size <= 3) {
  slicedStr = str.slice(0, size);
} else {
  slicedStr = str.slice(0, size - 3);
}

return slicedStr + "...";
