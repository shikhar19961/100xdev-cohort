const time = setTimeout(run,3000)
console.time(time)
function run(){
    console.log("This worked");
    console.timeEnd(time)
}
