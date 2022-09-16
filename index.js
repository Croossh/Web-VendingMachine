let water = ["생수", "500", "원"];
let milkis = ["밀키스(캔)", "800", "원"];
let coke = ["콜라(컵)", "1200", "원"];
let hot6 = ["핫식스", "1500", "원"];
let fanta = ["환타", "2000", "원"];
let condi = ["컨디션 파워", "4500", "원"];

function count(type) {
  const resultElement = document.getElementById("result");

  let number = parseInt(resultElement.innerText);

  if (type === "100") {
    number = parseInt(number) + 100;
  } else if (type === "500") {
    number = parseInt(number) + 500;
  } else if (type === "1000") {
    number = parseInt(number) + 1000;
  } else if (type === "5000") {
    number = parseInt(number) + 5000;
  }
  resultElement.innerText = parseInt(number);
}

function plus(type) {
  const resultElement = document.getElementById("pay_result");

  let number = parseInt(resultElement.innerText);

  if (type === "500") {
    number = parseInt(number) + 500;
    const li = document.createElement("li");
    const textnode = document.createTextNode(water[0]);
    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "800") {
    number = parseInt(number) + 800;
    const li = document.createElement("li");
    const textnode = document.createTextNode(milkis[0]);
    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "1200") {
    number = parseInt(number) + 1200;
    const li = document.createElement("li");
    const textnode = document.createTextNode(coke[0]);
    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "1500") {
    number = parseInt(number) + 1500;
    const li = document.createElement("li");
    const textnode = document.createTextNode(hot6[0]);
    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "2000") {
    number = parseInt(number) + 2000;
    const li = document.createElement("li");
    const textnode = document.createTextNode(fanta[0]);
    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "4500") {
    number = parseInt(number) + 4500;
    const li = document.createElement("li");
    const textnode = document.createTextNode(condi[0]);
    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  }

  resultElement.innerText = parseInt(number);
  console.log(number);
}

function empty() {
  const payingElement = document.getElementById("pay_result");
  let payingNumber = parseInt(payingElement.innerText);

  if (payingNumber > 0) {
    payingElement.innerText = 0;

    const basketItems = document.getElementById("basket_area");
    basketItems.innerHTML = "";
  }
}

function buy() {
  const payingElement = document.getElementById("pay_result");
  let payingNumber = parseInt(payingElement.innerText);

  const exchangeElement = document.getElementById("result");
  let exchangeNumber = parseInt(exchangeElement.innerText);

  // const realElement = document.getElementById("real_result");
  // let realNumber = parseInt(realElement.innerText);

  let result = 0;
  if (payingNumber === 0) {
    alert("선택된 음료가 없습니다.");
  } else if (payingNumber <= exchangeNumber) {
    // realElement.innerText += parseInt(payingNumber);

    result = exchangeNumber - payingNumber;
    payingElement.innerText = 0;

    const basketItems = document.getElementById("basket_area");
    basketItems.innerHTML = "";
    alert("모든 물품을 구매하였습니다.");
  } else if (payingNumber > exchangeNumber) {
    alert("소지금이 부족합니다.");
  }

  exchangeElement.innerText = parseInt(result);
}
