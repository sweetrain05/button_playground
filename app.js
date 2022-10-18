"use strict";

let btn = document.getElementById("btn");
let colorPicker = document.querySelector(".picker");

// Pick your Color Section

// Background Color
let bgColor = document.getElementById("backgroundColorPicker");
bgColor.addEventListener("input", (e) => {
  btn.style.backgroundColor = bgColor.value;
});

// Font Color
let fontColor = document.getElementById("fontColorPicker");
fontColor.addEventListener("input", (e) => {
  btn.style.color = fontColor.value;
  if (fontColor.value == "#FFFFFF") {
    colorPicker.style.border = true;
  } else {
    colorPicker.style.border = none;
  }
});

// Border Color
let borderColor = document.getElementById("BorderColorPicker");
borderColor.addEventListener("input", (e) => {
  btn.style.borderColor = borderColor.value;
});

// Design your Border Section

// Border Thickness
let borderThickness = document.getElementById("thickness");
borderThickness.addEventListener("change", () => {
  btn.style.borderWidth = borderThickness.value + "px";
});

// Border Line Design
let borderType = document.querySelectorAll(".borderRadio");
for (let i = 0; i < borderType.length; i++) {
  borderType[i].addEventListener("click", () => {
    switch (borderType[i].value) {
      case "Solid":
        btn.style.borderStyle = "none";
        btn.style.borderStyle = "solid";
        break;
      case "Dotted":
        btn.style.borderStyle = "none";
        btn.style.borderStyle = "dotted";
        break;
      case "None":
        btn.style.borderStyle = "none";
        break;
    }
  });
}

// Border Roundness
let borderRadius = document.getElementById("radius");
borderRadius.addEventListener("change", () => {
  btn.style.borderRadius = borderRadius.value + "px";
});

// Choose your Font Section

// Font Name
let fontName = document.getElementById("fontlist");
fontName.addEventListener("change", () => {
  switch (fontName.value) {
    case "Lato":
      btn.style.fontFamily = "'Lato', sans-serif";
      break;
    case "Nunito":
      btn.style.fontFamily = "'Nunito', sans-serif";
      break;
    case "Dangrek":
      btn.style.fontFamily = "'Dangrek', cursive";
      break;
    case "Titan One":
      btn.style.fontFamily = "'Titan One', cursive";
      break;
  }
});

// Font Size
let fontSize = document.getElementById("fontSize");
fontSize.addEventListener("change", () => {
  btn.style.fontSize = fontSize.value + "px";
});

// Font Style
let fontStyle = document.querySelectorAll(".fontRadio");
for (let i = 0; i < fontStyle.length; i++) {
  fontStyle[i].addEventListener("click", () => {
    switch (fontStyle[i].value) {
      case "Bold":
        if (btn.style.fontWeight != 900) {
          btn.style.fontWeight = 900;
        } else {
          btn.style.fontWeight = 400;
          fontStyle[i].checked = false;
        }
        break;
      case "Italic":
        if (btn.style.fontStyle != "italic") {
          btn.style.fontStyle = "italic";
        } else {
          btn.style.fontStyle = "normal";
          fontStyle[i].checked = false;
        }
        break;
    }
  });
}

// Code Snippet : Update code after any change in button property

let cssCode = document.getElementById("cssCode");
let htmlCode = document.getElementById("htmlCode");

function loadCode() {
  var newCode = `.button { <br>

        &nbsp;&nbsp;&nbsp;background-color: ${bgColor.value}; <br>
        &nbsp;&nbsp;&nbsp;color: ${fontColor.value}; <br>
        &nbsp;&nbsp;&nbsp;border-color: ${borderColor.value}; <br><br>
    
        &nbsp;&nbsp;&nbsp;border-width: ${borderThickness.value}px; <br>
        &nbsp;&nbsp;&nbsp;border-style: ${borderType.value}; <br>
        &nbsp;&nbsp;&nbsp;border-radius: ${borderRadius.value}px; <br><br>
    
        &nbsp;&nbsp;&nbsp;font-family: ${fontName.value}; <br>
        &nbsp;&nbsp;&nbsp;font-size: ${fontSize.value}px; <br>
        &nbsp;&nbsp;&nbsp;font-style: ${fontStyle.value}; <br><br>
    
        &nbsp;&nbsp;&nbsp;padding: 1rem 2rem; <br>
        &nbsp;&nbsp;&nbsp;cursor: pointer; <br>
            }
            `;
  cssCode.innerHTML = newCode;
}

// Code Snippet : Modal
let showModal = document.querySelector(".fa-code");
let modal = document.querySelector(".modal");
showModal.addEventListener("click", () => {
  loadCode();
  modal.style.display = "block";
});

let closeModal = document.querySelector(".fa-xmark");
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Code Snippet : Code Copy
// Code Snippet : Copied Alert Box
let htmlCopy = document.getElementById("htmlCopy");
let cssCopy = document.getElementById("cssCopy");
let copyAlert1 = document.getElementById("copyAlert1");
let copyAlert2 = document.getElementById("copyAlert2");

htmlCopy.addEventListener("click", () => {
  let copyText = htmlCode.innerText;
  navigator.clipboard.writeText(copyText);
  copyAlert1.style.display = "inline";
  setTimeout(() => {
    copyAlert1.style.display = "none";
  }, 500);
});

cssCopy.addEventListener("click", () => {
  let copyText = cssCode.innerText;
  navigator.clipboard.writeText(copyText);
  copyAlert2.style.display = "inline";
  setTimeout(() => {
    copyAlert2.style.display = "none";
  }, 500);
});
