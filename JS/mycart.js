// This variable is used to build emails for orders. It's
// just set to send to Mrs. Mom with the subject "New Pie Order".
var emailPrepend = "mailto:19kathys63@gmail.com?subject=New%20Pie%20Order&body=";
// This variable acts as a filter for the final order email that
// exlcudes which items will have the word "pie" appended to it
var exlcudePie = ["Caramel Corn"];

    // Variable used to determine what has been removed from cart
    // before placing order. Acts as a list of items to filter from
    // final order.
var removed = [];
// Function for removing item from cart
function removeItem(idNum) {
    temp = document.getElementById("oi-" + String(idNum));

    temp.remove();
    removed.push(idNum);
}

// Function called when end user hits "Send Order *mail_emoji" button
function sendOrder() {
    let finalOrder = []
    // Filter out the removed from the final order
    for (var i = 0; i < cart.length; i++) {
        if (removed.indexOf(i) == -1){
            finalOrder.push(cart[i]);
        }
    }

    console.log("Final order: ")
    for (var i = 0; i < finalOrder.length; i++) {
        console.log("\t" + finalOrder[i]);
    }

    let custName = document.getElementById("custName").value;
    let custNumber = document.getElementById("custNumber").value;

    let custDeets = "Name:%20" + custName + "%0D%0APhone%20Number:%20" + custNumber;

    // abbreviation for newline, used for mailto
    let nl = "%0D%0A";
    let orderDeets = nl + nl;

    // append pie where applicable, using excludePie as filter
    for (var i = 0; i < finalOrder.length; i++) {
        let forderDesc = finalOrder[i];
        if (exlcudePie.indexOf(forderDesc) == -1) {
            forderDesc += "%20Pie";
        }
        orderDeets += forderDesc + nl;
    }

    window.location.href = emailPrepend + custDeets + orderDeets;
}

// instantiate map linking pie names to
// img sources
const imgSources = new Map();
imgSources.set("Strawberry", "StrawberryPie.jpg");
imgSources.set("Blueberry Cream Cheese", "BlueberryCreamCheesePie.jpg");
imgSources.set("Cinnamon Roll Crust Apple", "CinnamonRollCrustApplePie.jpg");
imgSources.set("Peanut Butter", "PeanutButterPie.jpg");
imgSources.set("Coconut Cream", "20251115_094852.jpg");
imgSources.set("Caramel Corn", "AlmondPecanCaramelCorn.jpg");

var unIdCount = 0;

var temp = sessionStorage.getItem("cart");
var cart = temp.split(";");

var orderParent = document.getElementById("orderRegion");
for(var i = 0; i < cart.length; i++) {
    //console.log(cart[i]);
    let oiID = "oi-" + String(unIdCount);
    unIdCount += 1;

    var orderItem = document.createElement("li");
    orderItem.className = "orderItem";
    orderItem.id = oiID;
    
    var orderImage = document.createElement("img");
    orderImage.className = "orderImage";
    orderImage.src = "../images/" + imgSources.get(cart[i]);
    
    var orderDesc = document.createElement("p");
    orderDesc.className = "orderDesc";
    var tempDesc = cart[i];
    if (tempDesc != "Caramel Corn") {
        tempDesc += " Pie";
    }
    orderDesc.innerHTML = tempDesc;
    orderDesc.style.marginTop = String(window.innerWidth/727.4) + "%";

    var itemDestroy = document.createElement("img");
    itemDestroy.src = "../images/trash.png";
    itemDestroy.className = "itemDestroy";
    let tempNum = Number(unIdCount)-1;
    itemDestroy.addEventListener("click", function(){removeItem(tempNum)});

    orderItem.appendChild(orderImage);
    orderItem.appendChild(orderDesc);
    orderItem.appendChild(itemDestroy);
    orderParent.appendChild(orderItem);
}

let orderButtonItem = document.getElementById("confirmOrder");
// orderButtonItem.formaction = function(){sendOrder()};
orderButtonItem.addEventListener("click", sendOrder);