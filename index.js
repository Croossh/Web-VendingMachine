let water = ["생수", "500"];
let milkis = ["밀키스(캔)", "800"];
let coke = ["콜라(컵)", "1200"];
let hot6 = ["핫식스", "1500"];
let fanta = ["환타", "2000"];
let condi = ["컨디션 파워", "4500"];

let buyingArray = [];

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
  // 가격 버튼 클릭 시 조건
  if (type === "500") {
    // 생수
    number = parseInt(number) + 500;

    const li = document.createElement("li");
    const textnode = document.createTextNode(water[0]);
    buyingArray.push(textnode.data);

    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "800") {
    // 밀키스
    number = parseInt(number) + 800;

    const li = document.createElement("li");
    const textnode = document.createTextNode(milkis[0]);
    buyingArray.push(textnode.data);

    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "1200") {
    // 콜라
    number = parseInt(number) + 1200;

    const li = document.createElement("li");
    const textnode = document.createTextNode(coke[0]);
    buyingArray.push(textnode.data);

    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "1500") {
    // 핫식스
    number = parseInt(number) + 1500;

    const li = document.createElement("li");
    const textnode = document.createTextNode(hot6[0]);
    buyingArray.push(textnode.data);

    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "2000") {
    // 환타
    number = parseInt(number) + 2000;

    const li = document.createElement("li");
    const textnode = document.createTextNode(fanta[0]);
    buyingArray.push(textnode.data);

    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  } else if (type === "4500") {
    // 컨디션
    number = parseInt(number) + 4500;

    const li = document.createElement("li");
    const textnode = document.createTextNode(condi[0]);
    buyingArray.push(textnode.data);

    li.appendChild(textnode);
    document.getElementById("basket_area").appendChild(li);
  }

  resultElement.innerText = parseInt(number);
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

  const realElement = document.getElementById("total_result");
  let realNumber = parseInt(realElement.innerText);

  if (payingNumber === 0) {
    alert("선택된 음료가 없습니다.");
  } else if (payingNumber > exchangeNumber) {
    alert("소지금이 부족합니다.");
  } else if (payingNumber !== 0) {
    realNumber += payingNumber;

    result = exchangeNumber - payingNumber;
    payingElement.innerText = 0;

    const basketItems = document.getElementById("basket_area");
    basketItems.innerHTML = "";
    alert("모든 물품을 구매하였습니다.");

    for (i = 0; i < buyingArray.length; i++) {
      const li = document.createElement("li");
      const textnode = document.createTextNode(buyingArray[i]);
      console.log(textnode);

      li.appendChild(textnode);
      document.getElementById("totalBying_area").appendChild(li);
    }

    exchangeElement.innerText = parseInt(result);
    realElement.innerText = parseInt(realNumber);
  }
}
