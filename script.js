// //first method ------>
// var ans = ''
// var exp = /[^+-/%*]/g

// function number(n) {
//     if (document.getElementById('display').value == 0)
//         document.getElementById('display').value = ''
//     ans = document.getElementById('display').value += n
// }

// function eql(val) {
//     let input = ''
//     let arr = []
//     let answer = 0
//     val = val.split("").map((v) => {
//         if (v.match(exp)) {
//             input += v
//         }
//         else {
//             arr.push(input)
//             arr.push(v)
//             input = ''
//         }
//     })

//     if (input != '') {
//         arr.push(input)
//         input = ''
//     }

//     answer = parseFloat(arr[0]);
//     for (var i = 2; i < arr.length; i = i + 2) {

//         switch (arr[i - 1]) {
//             case '+':
//                 answer += parseFloat(arr[i]);
//                 break;
//             case '-':
//                 answer -= parseFloat(arr[i]);
//                 break;
//             case '/':
//                 answer = answer / parseFloat(arr[i]);
//                 break;
//             case '*': answer = answer * parseFloat(arr[i]);
//                 break;
//             case '%': answer = answer % parseFloat(arr[i]);
//                 break;
//         }

//     }
//     document.getElementById('display').value = String(answer)
// }

// function clr() {
//     arr = [];
//     ans = '';
//     document.getElementById('display').value = ""
// }

// function del() {
//     let dis = document.getElementById('display')
//     dis.value = dis.value.slice(0, -1)
//     ans = dis.value
// }
//---------------------------------------------------------------------------------------->

//second Method--------------------->
let dis = document.getElementById('display')
let ans = ''
function number(n) {
    if (dis.value == 0)
        dis.value = ''
    ans = dis.value += n
}

function eql(arr) {
    dis.value = eval(arr)
}

function clr() {
    ans = ''
    dis.value = ''
}
function del() {
    dis.value = dis.value.slice(0, -1)
    ans = dis.value
}
