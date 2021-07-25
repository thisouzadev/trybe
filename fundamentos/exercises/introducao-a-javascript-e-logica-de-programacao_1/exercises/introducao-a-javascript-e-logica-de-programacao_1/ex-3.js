let a = 4;
let c = 4;
let b = 5;

if (a > b && a > c){
    console.log('numero a é maior', a);
}
else if (b > c && b > a){
    console.log('numero b é maior', b);
}
else if(c > a && c > b){
    console.log('o numero c é o maior');
}
else if (a == b && a == c && b == c) {
console.log("todos iguais", a);
}