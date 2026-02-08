console.log(window.innerWidth)

var containerEm = window.innerWidth/70;
var imageEm = window.innerWidth/60;
var itemPrefix = "translateY(";
var itemSuffix = ") translateX(120%)";
var paraTransform = window.innerWidth/85;
var addButtonTransform = window.innerWidth/3.637

var containerItems = document.getElementsByClassName("contentContainer");
var containerImages = document.getElementsByClassName("containerImage");
var containerParagraphs = document.getElementsByClassName("containerParagraph");
var addButtons = document.getElementsByClassName("addButton");

// console.log(containerItems.length);
// console.log(containerEm); 

if (window.innerWidth > 480) {
    console.log("Window size requirements met for resizing");
    for (let i = 0; i < containerItems.length; i++) {
        containerItems[i].style.height = String(containerEm) + "em";
        containerImages[i].style.width = String(imageEm) + "em";
        containerParagraphs[i].style.transform = itemPrefix + String(-paraTransform) + "em" + itemSuffix;
        addButtons[i].style.transform = itemPrefix + String(-addButtonTransform) + "%" + ") translateX(120%)";
    }
}

var lastEm = imageEm;
function resizeElements() {
    var imageEm = window.innerWidth/60;

    if (imageEm != lastEm || window.innerWidth > 480) {
        var paraTransform = window.innerWidth/85;
        var containerEm = window.innerWidth/70;
        var addButtonTransform = window.innerWidth/3.637;

        for (let i = 0; i < containerItems.length; i++) {
        containerItems[i].style.height = String(containerEm) + "em";
        containerImages[i].style.width = String(imageEm) + "em";
        containerParagraphs[i].style.transform = itemPrefix + String(-paraTransform) + "em" + itemSuffix;
        addButtons[i].style.transform = itemPrefix + String(-addButtonTransform) + "%" + ") translateX(120%)";
        }

        lastEm = imageEm;
    }
    //console.log(lastEm, "<- lastEm");
}

// console.log(containerItems[0].style.height);
// console.log(containerParagraphs.length);
// console.log(containerParagraphs[0].style.transform);

// console.log(window.innerWidth);

setInterval(resizeElements, 1000);



// add buttons

// a list used to designate pies in the cart while on the home page
// and the order list.
var pieList = []

var yourCartElem = document.getElementById("orderButton");


function addToCart(name) {
    pieList.push(name);
    
    //debug
    // console.log("Pie list:")
    // for (var i = 0; i < pieList.length; i++) {
    //     console.log("\t", pieList[i])
    // }

    yourCartElem.textContent = "Your cart (" + String(pieList.length) + ")";

    return true;
}

var pieNames = document.getElementsByClassName("pieName");
// console.log("Pie name count =>", pieNames.length)
for (let i = 0; i < addButtons.length; i++) {
    let text = pieNames[i].textContent;
    // console.log(i, ":", text)
    addButtons[i].addEventListener("click", function(){addToCart(text.toString())});
}

// console.log("Add button count => ", addButtons.length)

function viewCart() {
    if (pieList.length <= 0) {
        alert("Your cart is empty!");
    }
    else {
        let temp = "";
        for(var i = 0; i < pieList.length; i++) {
            temp += pieList[i] + ";";
        }
        temp = temp.slice(0, -1);

        sessionStorage.setItem("cart", temp);
        window.location.href = "../HTML/order.html";
    }
}

yourCartElem.addEventListener("click", viewCart);