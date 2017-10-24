//{ // local
document.addEventListener ("click", (e) => {
event = e;
alert("event: ", e.type);
if (e instanceof MouseEvent 
//&& e.getModifierState("Alt") && e.getModifierState("Shift")
) {
return handleEvent (e);
} // if

return true;
}, true); // event listener

document.addEventListener ("keydown", (e) => {
if (e.key === "Enter" && e.shiftKey && e.altKey) {
return handleEvent (e);
} // if

return true;
}, true); // event listener

function handleEvent (e) {
message (getInfo(e));
e.cancelBubble = true;
e.stopPropagation();
e.preventDefault ();
return false;
} // handleEvent

function getInfo (e) {
let element = e.target;
let css = element.getBoundingClientRect ();
return `${element.nodeName}${elementId(element)}${elementClass(element)}: ${elementPosition(element)}`;

function elementId (element) {
return (element.id)? "#" + element.id : "";
} // elementId

function elementClass (element) {
return (element.getAttribute("class"))? "." + element.className : "";
} // elementClass

function elementPosition (element) {
return `${round(css.left)}, ${round(css.top)}`;
} // elementPosition 

function mousePosition (e) {
return `client (${e.clientX}, ${e.clientY}); screen (${e.screenX}, ${e.screenY})`;
} // mousePosition

} // displayElementInfo

function round (n, digitCount) {
if (! digitCount) digitCount = 2;
let p = Math.pow (10.0, digitCount);
return Math.round(p * n) / p;
} // round

function message (text) {
let _message = document.querySelector ("#status, #message, .message");
if (_message) _message.innerHTML = text;
else alert (text);
} // message
//} // local
