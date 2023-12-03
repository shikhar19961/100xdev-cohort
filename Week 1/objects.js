let users = [
    {
        name:'Shikhar',
        gender:'male'
    },{
        name:'Amit',
        gender:'male'
    },{
        name:'Priya',
        gender:'female'
    }
]

console.log(`Male members are`);
for (const iter of users) {
        if(iter.gender == 'male'){
            console.log(iter.name);
        }
}