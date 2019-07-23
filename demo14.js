"use strict";
// interface Seex {
//     sex: string
//     interest: string
//     buy?: boolean
// }
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、低', '低'));
