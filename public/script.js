let prName = document.getElementById("PrName");
let prPrice = document.getElementById("PrPrice");
let prImage = document.getElementById("PrImage");
let prDes = document.getElementById("PrDes");
let prUUID = document.getElementById("PrUUID");
function getVal() {
  fetch("http://localhost:3000/addName", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: prName.value, price: prPrice.value, image: prImage.value, description: prDes.value, uuid: prUUID.value}),
  });
}
