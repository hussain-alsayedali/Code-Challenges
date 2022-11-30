let marks = [22, 2, 2];
return Math.floor(marks.reduce((accu, x) => accu + x) / marks.length);
