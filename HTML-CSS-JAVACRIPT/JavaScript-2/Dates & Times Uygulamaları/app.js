var dt = new Date();
console.log(dt);

var dtA = new Date('8/24/2010 14:50:10');
var dtB = new Date(2010, 7, 24, 14, 50, 10);
console.log(dtA);
console.log(dtB);

var dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC);

var start = new Date('2/3/2001');
var finish = new Date('2/3/2024');
console.log((finish - start) / 31536000000);

var birthDay = new Date('8/1/1985');
var ageDifMs = Date.now() - birthDay.getTime();
var ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);