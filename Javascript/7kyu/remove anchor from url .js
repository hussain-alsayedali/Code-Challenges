let url = "www.codewars.com#about"

let anchorIndex = url.indexOf('#')
return anchorIndex != -1 ? url.slice(0,anchorIndex) : url
 