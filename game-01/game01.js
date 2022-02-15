function getSummandSubList(nList, mSum){
    while(nList.length > 1){
        const first = nList.shift();
        const numSearched = mSum - first
        if(nList.includes(numSearched)){
            return [first, numSearched];
        }
    }return [];
}
(function(){
    const nList = [2,3,4,5,6,17,8,9]
    const mSum = 10
    const result = getSummandSubList(nList, mSum);
    if(result.length > 0){
        console.log(`Solution for ${mSum} is [${result}]`)
    }else{
        console.log("List empty, not enough numbers or none added M")
    }
})();