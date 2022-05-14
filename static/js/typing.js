const typedTextSpan = document.querySelector("#typed-text");
const typedColorTextSpan = document.querySelector("#typed-text-color");
const cursorSpan = document.querySelector("#cursor");

const textArray = [
  {
    normal: "I develop",
    color: "Web Applications",
  },
  {
    normal: "I Code using",
    color: "Ember / React",
  },
  {
    normal: "I love to",
    color: "travel and drive",
  }
];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
let colorcharIndex = 0;

function type() {
  let currentElement = textArray[textArrayIndex];
  let { normal, color } = currentElement

  if (charIndex < normal.length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += normal.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else if (colorcharIndex < color.length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedColorTextSpan.textContent += color.charAt(colorcharIndex);
    colorcharIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
  let currentElement = textArray[textArrayIndex];
  let { normal, color } = currentElement

  if (colorcharIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedColorTextSpan.textContent = color.substring(0, colorcharIndex-1);
    colorcharIndex--;
    setTimeout(erase, erasingDelay);
  } else if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = normal.substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }   else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});