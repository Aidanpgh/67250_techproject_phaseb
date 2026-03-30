// var x = 5
// var y = 7

// var z = x + y

// console.log(z)

// A = "Hello"
// B = "world!"

// var C = A + " " + B

// console.log(C)

// function sumnPrint(x1, x2) {
//     var sum = x1 + " " + x2
//     console.log(sum)
// }

// sumnPrint(x, y)

// sumnPrint(A, B)


// if (C.length > z) {
//     console.log(C);
//     // Nested condition check
//     if (C.length < z) {
//         // Code block for nested true
//         console.log(z);
//     }
//     // End of nested check block
// } else {
//     console.log("good job!");
// }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(list) {
//     for (var i = 0; i < list.length; i++) {
//         if (list[i] === "Banana") {
//             alert("Banana found");
//             return;
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// function findTheBanana2(list) {
//     list.forEach(element => {
//         if (element === "Banana") {
//             alert("Banana found");
//             return;
//         }
//     });
// }

// findTheBanana2(L1);
// findTheBanana2(L2);

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    if (x < 5 || x >= 20) {
        alert("Good night!");
    } else if (x < 12) {
        alert("Good morning!");
    } else if (x < 18) {
        alert("Good afternoon!");
    } else {
        alert("Good Evening!");
    }
}

var greetingElement = document.getElementById("greeting");

if (greetingElement) {
    greeting(hour);
}

function addYear() {
    var year = new Date().getFullYear();
    var yearElement = document.getElementById("copyYear");
    if (yearElement) {
        yearElement.textContent = year + " MonoMuse. All rights reserved.";
    }
}

