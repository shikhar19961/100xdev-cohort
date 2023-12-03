let ages = [21,22,23,24,25]
for (let index = 0; index < ages.length; index++) {
    if(ages[index]%2 == 0){
        console.log(ages[index]);
    }
}

var biggestNumber = ages.sort((a,b)=>(b-a))[0]
console.log(`Biggest Number is ${biggestNumber}`);