function getSummandSubList(nList, mSum){
    let subSet = new Array(nList.length + 1)
    while(nList.length > 1){
        const first = nList.shift();
        if(first < mSum){
            const numSearched = mSum - first
            if(subSet[numSearched]==1){
                return [first, numSearched]
            }
            subSet[first] = 1
        }
    }return [];
}
(function(){
    const nList = [2,3,4,5,17,9]
    const mSum = 10
    const result = getSummandSubList(nList, mSum);
    if(result.length > 0){
        console.log(`Solution for ${mSum} is [${result}]`)
    }else{
        console.log("List empty, not enough numbers or none added M")
    }
})();