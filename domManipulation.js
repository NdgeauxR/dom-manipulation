const myHeading = document.getElementById("myHeading");
if (myHeading) {
  myHeading.textContent = "Blue Roses";
}


const myParagraph = document.querySelector(".myParagraph");
if (myParagraph) {
  myParagraph.style.color = "blue";
  myParagraph.style.fontSize = "20px";
}


const myButton = document.getElementById("myButton");
if (myButton) {
  myButton.addEventListener("click", () => {
    alert("Button clicked!");
  });
}


const myLink = document.querySelector("a.myLink");
if (myLink) {
  myLink.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Click Prevented");
  });
}
