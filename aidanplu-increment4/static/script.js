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

/* Sets the 'active' class on the navigation link that matches the current page URL.*/

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav_bar a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

function showTicketPurchaseForm() {
    var form = document.getElementById("ticketPurchaseForm");
    if (form) {
        form.style.display = "block"; 
    }
}

function formSubmitted () {
    alert("Redirecting to payment system.")
}