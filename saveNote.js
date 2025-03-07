const noteData = document.getElementById("textbox");
const noteName = document.getElementById("nameNote");
const h1 = document.querySelector("h1");

//leh function
function save() {
  try {
    localStorage.setItem("noteData", noteData.value);
    localStorage.setItem("noteName", noteName.value);
  } catch {
    console.error("Data not saved");
  }
}
//Live updation you know you know you know???
noteName.addEventListener("input", () => {
  h1.textContent = noteName.value;
  if(h1.textContent == "")
  {
    h1.textContent = "FoxPad"
  }
});
