//变量的作用域
// var appearance:string='hello'
// function scope():void {
//     var appearance:string = '喵'
//     console.log(appearance);
// }
// scope()
// console.log(appearance);

//全局变量，局部变量
//let
function scope():void {
    var appearanceA:string = '狗'
    {
        let appearanceB:string = '猫'
        console.log(appearanceB);
    }
    console.log(appearanceA);
}
scope()