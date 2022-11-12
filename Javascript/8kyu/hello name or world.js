let name = "JohN";
if (name)
  name =
    name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase("");
else name = "World";
console.log(name);

return `Hello, ${name}!`;
