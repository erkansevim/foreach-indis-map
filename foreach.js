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