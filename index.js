function count(type) {
  const resultElement = document.getElementById("result");

  let number = resultElement.innerText;

  if (type === "100") {
    number = parseInt(number) + 100;
  } else if (type === "500") {
    number = parseInt(number) + 500;
  } else if (type === "1000") {
    number = parseInt(number) + 1000;
  } else if (type === "5000") {
    number = parseInt(number) + 5000;
  }
  resultElement.innerText = number;
}

function minus(type) {
  const resultElement = document.getElementById("result");

  let number = resultElement.innerText;

  if (type === "500") {
    if (resultElement.innerText >= 500) {
      number = parseInt(number) - 500;
      alert("생수를 구매하였습니다.");
    } else {
      alert("금액이 부족합니다.");
    }
  } else if (type === "800") {
    if (resultElement.innerText >= 800) {
      number = parseInt(number) - 800;
      alert("밀키스를 구매하였습니다.");
    } else {
      alert("금액이 부족합니다.");
    }
  } else if (type === "1200") {
    if (resultElement.innerText >= 1200) {
      number = parseInt(number) - 1200;
      alert("콜라를 구매하였습니다.");
    } else {
      alert("금액이 부족합니다.");
    }
  } else if (type === "1500") {
    if (resultElement.innerText >= 1500) {
      number = parseInt(number) - 1500;
      alert("핫식스를 구매하였습니다.");
    } else {
      alert("금액이 부족합니다.");
    }
  } else if (type === "2100") {
    if (resultElement.innerText >= 2100) {
      number = parseInt(number) - 2100;
      alert("환타를 구매하였습니다.");
    } else {
      alert("금액이 부족합니다.");
    }
  } else if (type === "4500") {
    if (resultElement.innerText >= 4500) {
      number = parseInt(number) - 4500;
      alert("컨디션을 구매하였습니다.");
    } else {
      alert("금액이 부족합니다.");
    }
  }
  resultElement.innerText = number;
}
