let url = "http://www.zombie-bites.com";
if (url[0] === "h" && url[8] == "w") {
  url = url.split("/");
  let dom = url[2].split(".")[1];
  console.log(dom);
  return dom;
}
if (url[0] === "h" && url[1] === "t") {
  url = url.split("/");
  let dom = url[2];
  dom = dom.split(".");
  return dom[0];
} else if (url[0] === "w" && url[1] === "w") {
  url = url.split(".");
  let dom = url[1];
  return dom;
} else {
  url = url.split(".");
  return url[0];
}
