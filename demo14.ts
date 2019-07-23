// interface Seex {
//     sex: string
//     interest: string
//     buy?: boolean
// }

// let seex: Seex = {
//     sex: '男',
//     interest: '家务'
// }
// console.log(seex);

interface Search {
    (source: string, subString: string): boolean
}
let mySearch: Search
mySearch = function (source: string, subString: string): boolean {
    let flag = source.search(subString)
    return (flag != -1)
}
console.log(mySearch('高、低', '低'));
