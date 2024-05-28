const price= [100,200,50,90];
let sum=0;

price.forEach((p,i,prices)=>{
sum+=p
console.log(sum);
prices[i]=p*2
})

console.log(price);