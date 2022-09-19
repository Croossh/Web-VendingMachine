// 동전 투입 함수
function count(type) {
  const resultElement = document.getElementById("result");
  const self = document.getElementById("self_coin").value;

  let number = parseInt(resultElement.innerText);

  if (type === "100") {
    number = parseInt(number) + 100;
  } else if (type === "500") {
    number = parseInt(number) + 500;
  } else if (type === "1000") {
    number = parseInt(number) + 1000;
  } else if (type === "5000") {
    number = parseInt(number) + 5000;
  } else {
    if (self === "" || self <= 99) {
      alert("100원 이상의 금액을 입력해주세요. (100 ≤ 금액 ≤ 1억 )");
    } else if (self >= 0) {
      // 100원 미만 단위 절삭
      let makeArr = self.split("");
      makeArr[makeArr.length - 1] = 0;
      makeArr[makeArr.length - 2] = 0;
      let joinArr = makeArr.join("");
      // 금액 추가
      number = parseInt(number) + parseInt(joinArr);
    } else {
      alert("숫자(양수)만 입력해주세요.");
      document.getElementById("self_coin").value = "";
    }
  }
  resultElement.innerText = parseInt(number);
  document.getElementById("self_coin").value = "";

  if (parseInt(resultElement.innerText) >= 100000000) {
    resultElement.innerText = 0;
  }
}

// 장바구니 관련
let buyingArray = [];
let totalArray = [];

const getHowMany = (arr) => {
  let goal = {};
  for (el of arr) {
    goal[el] = (goal[el] || 0) + 1;
  }
  return goal;
};

// 클릭시 장바구니 추가 관련 함수
function plus(type) {
  // 잔액 긁어오기
  const resultElement = document.getElementById("pay_result");
  let number = parseInt(resultElement.innerText);

  // 가격 버튼 클릭 시 조건
  if (type === "500") {
    number = parseInt(number) + 500;
    buyingArray.push("생수");
  } else if (type === "800") {
    number = parseInt(number) + 800;
    buyingArray.push("밀키스(캔)");
  } else if (type === "1200") {
    number = parseInt(number) + 1200;
    buyingArray.push("콜라");
  } else if (type === "1500") {
    number = parseInt(number) + 1500;
    buyingArray.push("핫식스");
  } else if (type === "2000") {
    number = parseInt(number) + 2000;
    buyingArray.push("환타");
  } else if (type === "4500") {
    number = parseInt(number) + 4500;
    buyingArray.push("컨디션");
  }

  // 배열 중복 갯수 확인
  let test = getHowMany(buyingArray);
  let come = "";
  for (i in test) {
    come += `<li>${i} X ${test[i]}</li>`;
  }

  // 이전 자식요소 삭제
  let cell = document.getElementById("basket_area");
  while (cell.hasChildNodes()) {
    cell.removeChild(cell.firstChild);
  }

  // 장바구니에 보여지는 영역
  document.getElementById("basket_area").innerHTML = `${come}`;
  // 잔액
  resultElement.innerText = parseInt(number);
}

// 비우기 함수
function empty() {
  const payingElement = document.getElementById("pay_result");
  let payingNumber = parseInt(payingElement.innerText);

  if (payingNumber > 0) {
    // 돈 0원 만들기
    payingElement.innerText = 0;

    // 장바구니 영역 비우기
    const basketItems = document.getElementById("basket_area");
    basketItems.innerHTML = "";

    // 장바구니 배열 초기화
    buyingArray = [];
  }
}

// 구매 함수
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
    // 소지금 및 총 금액 합산
    realNumber += payingNumber;
    result = exchangeNumber - payingNumber;
    payingElement.innerText = 0;

    // 구매시 장바구니 비우기
    const basketItems = document.getElementById("basket_area");
    basketItems.innerHTML = "";
    alert("모든 물품을 구매하였습니다.");

    // 배열 중복 갯수 확인
    let countBuy = getHowMany(buyingArray);
    let come = "";
    for (i in countBuy) {
      come += `<li>${i} X ${countBuy[i]}</li>`;
    }

    // 이전 자식요소 삭제
    let cell = document.getElementById("totalBying_area");
    while (cell.hasChildNodes()) {
      cell.removeChild(cell.firstChild);
    }

    // 장바구니 배열을 구매한 배열로 옮기기
    for (j = 0; j < buyingArray.length; j++) {
      totalArray.push(buyingArray[j]);
    }

    // 장바구니 배열 초기화
    buyingArray = [];

    // 총 구매 갯수 확인
    let countTotal = getHowMany(totalArray);
    let come2 = "";
    for (z in countTotal) {
      come2 += `<li>${z} X ${countTotal[z]}</li>`;
    }

    // 장바구니에 보여지는 영역
    document.getElementById("totalBying_area").innerHTML = `${come2}`;

    exchangeElement.innerText = parseInt(result);
    realElement.innerText = parseInt(realNumber);
  }
}

function refresh() {
  document.getElementById("result").innerText = 0;
}
