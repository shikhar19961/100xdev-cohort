try {
    let name = "Shikhar"
    let age=18
    let isMarried = false
    let marriageStatus
    if (isMarried) {
        marriageStatus = "Married"
    }else{
        marriageStatus = "Not Married"
    }
    console.log(`
    Person name is ${name} 
    Age is ${age}
    Married Status using ternary  ${isMarried?'Married':'Not Married'}
    Married Status if else  ${marriageStatus}`);
    let sum = 0       
    for (let index = 1; index <= 1000; index++) {
        sum = sum + index
    }  
    console.log(sum);
} catch (error) {
    console.log(`Error : ${error}`);
}