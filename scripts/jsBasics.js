// level 1---------
// 1.
let fname="john"
let admin
admin = fname
// alert(admin)

// 2.

// 3.
// console.log(`${admin} : ${typeof(admin)}`)

// 4.
let a=5
let b=4
// console.log(a > b)
let c="apple"
let d="pineapple"
// console.log(c > d)
let e="2"
let f="12"
// console.log(e > f)
let g
let h=null
// console.log(g == h)
// console.log(g === h)

// level 2-----------
// 1.
function func1(num) {
    if(num > 100) {
        console.log("Thanks")
    } else {
        console.log("Enter a number greater than 100!")
    }
}
// func1(prompt())

// 2.
// var x=prompt("Enter a number :")
// if(x > 0) {
//     console.log(1)
//     alert(1)
// } else if(x < 0) {
//     console.log(-1)
//     alert(-1)
// } else if(x == 0) {
//     console.log(0)
//     alert(0)
// } else {
//     console.log("Enter a number!")
//     alert("Enter a number!")
// }

// 3.
function min(a, b) {
    console.log(Math.min(a, b))
}
// min(4, 3)
let myFunc = (a, b) => console.log(Math.min(a, b))
// myFunc(5, 7)

// level 3--------
// 1.
function filterRange(arr, a, b) {
    let arr2=[]
    // arr.forEach(
    //     (item) => {
    //         if(item >= a && item <= b) arr2.push(item)
    //     }
    // )
    arr2.push(arr.filter(
        (item) => item >= a && item <= b
    ))
    return arr2
}
let arr3 = [5, 3, 8, 1];
let filtered = filterRange(arr3, 1, 4);
// console.log(filtered)
// console.log(typeof(" "))
// console.log(Number(" "))

// level 4-----------
// 1.
function camelize(str, fname2="please put a string value!") {
    if(typeof(str) == "string") {
        const array = str.split("-")
        fname2 = array[0]
        array.forEach(
            (item, i) => {
                if(i != 0) fname2 += array[i].charAt(0).toUpperCase() + array[i].substring(1, array[i].length)
            }
        )
    }
    return fname2
}
// console.log(camelize("hello-aritry-samaddar"))

// 2.
function unique_elements(Arr) {
    let Array=[]
    Arr.filter(
        (item) => {
            if(!Array.includes(item)) {
                Array.push(item)
            }
        }
    )
    console.log(Array.toString())
}
let strings = ["React Js", "JavaScript", "React Js", "JavaScript", "JavaScript", "JavaScript", "React Js", "React Js"];
// unique_elements(strings)

// 3.
const truncate = (str, len) => {
    if (str.length > len) return str.slice(0, len) + "...";
    return str;
 };
//  console.log(truncate("What I'd like to tell on this topic is:", 20))
//  console.log(truncate("Hi everyone!", 20))
let users=[
    {
        fname:"john",
        city:"delhi",
        
    },
    {
        fname:"henry",
        city:"mumbai",
        phone:309839843
    },
    {
        fname:"harry",
        city:"chennai",
        phone:38746384
    },
    {
        fname:"mary",
        city:"delhi",
        phone:2389237
    },
]
const marks=[100,80,90,75,60]
console.log(users.filter(
    (item)=>item.city==="delhi"&&item.phone
))