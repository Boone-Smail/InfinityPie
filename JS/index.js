console.log(window.innerWidth)

var containerEm = window.innerWidth/80;
var imageEm = window.innerWidth/60;
var itemPrefix = "translateY(";
var itemSuffix = ") translateX(120%)";
var paraTransform = window.innerWidth/80;

var containerItems = document.getElementsByClassName("contentContainer");
var containerImages = document.getElementsByClassName("containerImage");
var containerParagraphs = document.getElementsByClassName("containerParagraph");

// a list used to designate pies in the cart while on the home page
// and the order list.
var pieList = []

// console.log(containerItems.length);
// console.log(containerEm); 

if (window.innerWidth > 480) {
    console.log("Window size requirements met for resizing");
    for (let i = 0; i < containerItems.length; i++) {
        containerItems[i].style.height = String(containerEm) + "em";
        containerImages[i].style.width = String(imageEm) + "em";
        containerParagraphs[i].style.transform = itemPrefix + String(-paraTransform) + "em" + itemSuffix;
    }
}

var lastEm = imageEm;
function resizeElements() {
    var imageEm = window.innerWidth/60;

    if (imageEm != lastEm || window.innerWidth > 480) {
        var paraTransform = window.innerWidth/80;
        var containerEm = window.innerWidth/80;

        for (let i = 0; i < containerItems.length; i++) {
        containerItems[i].style.height = String(containerEm) + "em";
        containerImages[i].style.width = String(imageEm) + "em";
        containerParagraphs[i].style.transform = itemPrefix + String(-paraTransform) + "em" + itemSuffix;
        }

        lastEm = imageEm;
    }
    //console.log(lastEm, "<- lastEm");
}

// console.log(containerItems[0].style.height);
// console.log(containerParagraphs.length);
// console.log(containerParagraphs[0].style.transform);

setInterval(resizeElements, 1000);