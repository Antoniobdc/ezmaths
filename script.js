function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
window.onload = rerun1()
function rerun1(){

a1 = rand(5,10);
b1 = a1 - 3;
c1 = a1 - 3;
d1 = a1 - 1;
e1 = a1 + 2;
f1 = a1 + 5;
ar1 = [b1,c1,d1,e1,f1];
arr1 = shuffle(ar1);
console.log(arr1);

g1 = a1 + 2;
h1 = a1 + 2;
i1 = a1 + 1;
j1 = a1 - 1;
k1 = a1 - 4;
l1 = [g1,h1,i1,j1,k1];
ll1 = shuffle(l1);
console.log(ll1);

ques1a = arr1[0] + " &ensp; " + arr1[1] + " &ensp; " + arr1[2] + " &ensp; " + arr1[3] + " &ensp; " + arr1[4];
ques1b = ll1[0] + " &ensp; " + ll1[1] + " &ensp; " + ll1[2] + " &ensp; " + ll1[3] + " &ensp; " + ll1[4];
ans1a = "Mode = " + b1 + "<br>Median = " + d1 + "<br>Mean = " + a1 + "<br>Range = 8";
ans1b = "Mode = " + g1 + "<br>Median = " + i1 + "<br>Mean = " + a1 + "<br>Range = 6";

r1 = rand(0,2);

ques1 = [ques1a,ques1b];
ans1 = [ans1a,ans1b];

document.getElementById('Question1').innerHTML= ques1[r1];
document.getElementById('Answer1').innerHTML= '';
}
function q1() {
document.getElementById('Answer1').innerHTML= ans1[r1];
}
