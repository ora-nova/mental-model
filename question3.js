function flattenAndUnique(nestedArray) {
let solution= nestedArray.flat(Infinity);
let result=[];
for(let item of solution){
    if(!result.includes(item)){
        result.push(item);
    }
}
    return result;
}

const nestedArray = [1, [2, 3], 4, [2, [5, 1]], 3];
const result = flattenAndUnique(nestedArray);
console.log(result); 
