var url ="https://api.currencyfreaks.com/latest?apikey=64d65064a59e4d29a16dd267e582d0b2";
var h1 = document.createElement("h1");
var h2 = document.createElement("h1");
async function price() {
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  var data = await fetch(url);
  var myData = await data.json();
  console.log(myData.rates["EGP"]);
  let amount = document.querySelector(".amount");
  let egpPrice = document.getElementById("v1");
  let sarPrice = document.getElementById("v2");
  egpPrice.innerHTML = `Price In EGP: ${Math.round(amount.value * myData.rates["EGP"])}`
  sarPrice.innerHTML = `Price In SAR: ${Math.round(amount.value * myData.rates["SAR"])}`
  let fxvalue = parseFloat(myData.rates["EGP"]).toFixed(2);
  let fxvaluesar = parseFloat(myData.rates["SAR"]).toFixed(2);
console.log(fxvalue);
console.log(fxvaluesar);

  h1.textContent = `EGP: ${fxvalue} جنيه`;
  h2.textContent = `SAR: ${fxvaluesar} ريال سعودى`;

  console.log("EGP " + myData.rates["EGP"]);
  console.log("SAR " + myData.rates["SAR"]);
}
price();
onload = ()=> {
  let amount = document.getElementById("txt1");
  amount.focus()
}