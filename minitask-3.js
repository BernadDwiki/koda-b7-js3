let uang = 125000;
let kembalian = "";
let i = 1;
while(uang>=50000){
    kembalian += "50000 ";
    uang = uang - 50000;
}
while(uang>=10000){
    kembalian += "10000 "
    uang = uang - 10000;
}
while(uang>=5000){
    kembalian += "5000 "
    uang = uang - 5000;
}
while(uang>=2000){
    kembalian += "2000 "
    uang = uang - 2000;
}
while(uang>=1000){
    kembalian += "1000 "
    uang = uang - 1000;
}

console.log("Kembalian anda adalah : "+kembalian);