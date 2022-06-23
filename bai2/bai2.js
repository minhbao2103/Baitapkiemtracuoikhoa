function alternatingSums(a) {
    let teamA = 0;
    let teamB = 0;
    let newArray = []
    a.map((item,index) =>{
        if(index % 2 === 0){
            teamA += item;
        }else{
            teamB += item;
        }
    })
    newArray.push([teamA,teamB])
    console.log(newArray);
}
console.log(alternatingSums([60, 40, 55, 75, 64]))