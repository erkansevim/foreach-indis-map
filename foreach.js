const price= [100,200,50,90];
let sum=0;

price.forEach((p,i,prices)=>{
sum+=p
console.log(sum);
prices[i]=p*2
})

console.log(price);

//--------------

const fiyatlar=[100,300,50,90];

fiyatlar.map((p, i, array)=>{
    if (p<250) {
        array[i]=p*1.5
    }else {
        array[i]=p*1.2
    }

})

//---------
const lira =[100,150,200,80,50]
const dolar=27.5;
const euro=29.5;

const dolarPrices=lira.map((money)=>money/dolar)
console.log(dolarPrices);

const euroPrices=lira.map((money)=>money/euro)
console.log(euroPrices);

//-----------
const text="erkan Sevim is a developer"

text.split(" ").map((a)=>a.toUpperCase()).forEach((a)=>console.log(a));

text.split(" ").filter((a)=>a.startsWith("S")).map((a)=>a.slice(0,1).toLowerCase()+a.slice(1)).forEach((a)=>console.log(a))

//------



