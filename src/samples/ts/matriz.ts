// Static matriz with  sample X and O
type  ValuesType = `x` | `o` | ``

type StaticRangeArray = [
    [ValuesType, ValuesType, ValuesType],
    [ValuesType, ValuesType, ValuesType],
    [ValuesType, ValuesType, ValuesType]
];


const gameXandO:StaticRangeArray = [
    ["x","o",""],
    ["x","o","x"],
    ["o","x",""]
]

console.log(gameXandO);


// Dynamic matriz sample calendar
const numberVariables:number[][] = [
    [1,2,3,4,5],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6,7],
    [1,2,3,4,5,6,7,8],
]

numberVariables.push([1,2,3,4,5,6,7,8,9]);
console.log(numberVariables);

