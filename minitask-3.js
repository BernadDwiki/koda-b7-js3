let uang = 125000;
let kembalian = "";

let a = 0;
while(uang>=50000){
    a= a+1;
    uang = uang - 50000;
    if(uang <50000){
        kembalian += "50000 sebanyak "+a+ " lembar ";
    }
}

let b = 0;
while(uang>=10000){
    b= b+1;
    uang = uang - 10000;
    if(uang <10000){
        kembalian += "10000 sebanyak "+b+ " lembar ";
    }
}

let c = 0;
while(uang>=5000){
    c = c+1;
    uang = uang - 5000;
    if(uang <5000){
        kembalian += "5000 sebanyak "+c+ " lembar ";
    }
}

let d = 0;
while(uang>=2000){
    d = d+1;
    uang = uang - 2000;
    if(uang <2000){
        kembalian += "2000 sebanyak "+d+ " lembar ";
    }
}

let e = 0;
while(uang>=1000){
    e = e+1;
    uang = uang - 1000;
    if(uang <1000){
        kembalian += "1000 sebanyak "+e+ " lembar ";
    }
}

console.log("Kembalian anda adalah : "+kembalian);