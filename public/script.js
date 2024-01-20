let usName = document.getElementById("name");
let usAge = document.getElementById("number");
function getVal() {
  fetch("http://localhost:3000/addName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: usName.value, age: usAge.value }),
  });
}
