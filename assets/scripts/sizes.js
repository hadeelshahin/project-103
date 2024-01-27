//all these values are just Read-only Values;
const boxEl = document.getElementById("main-box");
//const boxEl = document.body.firstElementChild;
console.log(boxEl);
//getBoundingClientRect()
const rect = boxEl.getBoundingClientRect();
console.log(rect); //return DOMrectObject with the Dom element position and size information,dimensions
// bottom: 300
// height: 200
// left: 100
// right: 400
// top: 100
// width: 300
// x:100
// y:100

console.log("Top:", rect.top);
console.log("Left:", rect.left);
console.log("Right:", rect.right);
console.log("Bottom:", rect.bottom);
console.log("Width:", rect.width);
console.log("Height:", rect.height);
/***************************************************************************** */
//offsetTop :===rect.top    #it does not change uppon scrolling
console.log("boxEl.offsetTop === rect.top =>", boxEl.offsetTop === rect.top); //true
console.log("boxEl.offsetTop === rect.x =>", boxEl.offsetTop === rect.x); //true
console.log("boxEl.offsetLeft === rect.y =>", boxEl.offsetLeft === rect.y); //true
console.log("boxEl.offsetParent :", boxEl.offsetParent);
console.log("boxEl.offsetHeight :", boxEl.offsetHeight);
/*****************************************************************************/
//clientTop  #gives the inner positioning #offset return the outer
console.log("boxEl.clientTop :", boxEl.clientTop);
/*****************************************************************************/
//ScrollHeight
console.log("boxEl.scrollHeight :", boxEl.scrollHeight); //404  returns the entire height+the nonvisible

/*****************************************************************************/
console.log(
  "boxEl.scrollHeight,boxEl.scrollHeight :" +
    "(" +
    window.innerHeight +
    "," +
    boxEl.scrollHeight +
    ")"
);

/*****************************************************************************/
console.log("Get the user-agent :", window.navigator.userAgent); // Get the user-agent string
console.log("Get the preferred language :", window.navigator.language); // Get the preferred language
console.log("Get the platform :", window.navigator.platform); // Get the platform
console.log(" Get the browser vendor :", window.navigator.vendor); // Get the browser vendor

// Check if geolocation is supported
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => console.log("geolocation :", position),
    (error) => console.error(error)
  );
}

// Check if clipboard API is supported
if (navigator.clipboard) {
  navigator.clipboard
    .readText()
    .then((data) => console.log("clipboard API :", data));
}
/*****************************************************************************/

console.log("window.location.href :", window.location.href); //http://127.0.0.1:5500/index.html
console.log("window.location.protocol :", window.location.protocol); //http:
console.log("window.location.host :", window.location.host); //127.0.0.1:5500
console.log("window.location.hostname :", window.location.hostname); //127.0.0.1
console.log("window.location.port :", window.location.port); //5500
console.log("window.location.pathname :", window.location.pathname); ///index.html
console.log("window.location.search :", window.location.search);
console.log("window.location.hash :", window.location.hash);
