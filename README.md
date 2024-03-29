# 🥤 웹 자판기 🍹 (반응형 웹)
### ✔ 배포 주소 → https://croossh.github.io/Web-VendingMachine/

#### <사용 방법>
1. 금액 투입
2. 음료 선택
3. 장바구니 확인 👉 구매
4. 구매한 음료 및 총 금액 확인

#### <참고 사항>
✔ Vanilla Javascript 작성<br>
✔ 모바일 및 웹 반응형<br>
✔ 장바구니 및 구매한 음료 합산 표시

### WHY Start?<br> 
✔ HTML의 기본 구조와 CSS(flex)에 익숙해지기 위해<br>
✔ javascript를 통한 DOM에 대한 이해<br>
✔ javascript ES6를 연습하고, 기본 문법 활용<br>

# 회고
첫 프로젝트의 시작은 그림과 같이 만들었다.

🔽 프로젝트 초창기 UI

<img src="git_Image/just_drink_initial.jpg" width="500" height="300"/>

DOM에 대해서 알게 되었고, JS에서 DOM에 접근할 수 있는 메서드들에 대해 공부하게 되었다.<br>
inline으로 css와 js 를 적용하는 방법을 배우게 되었다.<br>

🔽 프로젝트 수정 후 UI

<img src="git_Image/Untitled (1).png" width="500" height="300"/>

### 1. 🚨 **트러블 슈팅(문제)** - 장바구니

⌛ **고민했던 부분**

음료를 클릭하고, 숫자를 더하거나 빼는건 큰 문제가 없었으나 클릭한 갯수를 장바구니에 보여주고싶었다.

🛠 **해결방법**

엘리스를 수강하면서 JS 기초에 대해 배우고, 객체, 배열 등의 기본 메서드들을 배우며 드디어 장바구니를 영역을 추가할 수 있게 되었다.

1. 음료 클릭시 장바구니 영역에 추가한다. 동시에 stack에 쌓아둔다.
2. 구매를 누를 때 구매 영역에 요소 하나 하나를 꺼내서 총 구매 영역에 뿌릴 수 있게 되었다.

### 2. 🚨 **트러블 슈팅(문제)** - 선택된 음료 정리해서 보여주기

⌛ **고민했던 부분**

욕심이 생겼다.<br>
음료 하나하나를 그때그때 보여주는 것이 아닌 사전에 배열에서 정렬을 한 뒤 '음료Xn개' 형태로 보여주고 싶었다.<br>
⇒ ”배열을 이름 순으로 정렬하고 그 개수를 세서 그 결과를 뿌려주면 되지 않을까라는 생각”을 하였다.<br>
⇒ 기존의 로직은 O(n^2) 시간복잡도로 개선이 필요했다.<br>

🛠 **해결방법**

```jsx
const selectedDrink = (arr) => {
	let goal = {};
	for (el of arr) {
		goal[el] = (goal[el] || 0) + 1;
	}
	return goal;
};
```

- 배열의 중복 개수를 확인해줄 수 있는 간단한 로직을 설계하고 함수로 만들어서 버튼 클릭 시마다 보여지게 만들었다.

```jsx
let showList = selectedDrink(buyingArray);
let come = "";
for (i in showList) {
	come += `<li>${i} X ${showList[i]}</li>`;
};
```

배열 중복 개수를 확인하고, list 로 come에 차곡차곡 쌓은 뒤에 innerHTML로 보여주었다.<br>
<br>
### 23.02 추가 해결방법 (Map 자료구조)
```js
const getHowMany = (arr) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
};
```
- 기존 객체로 다루던 데이터를 Map 자료구조로 적용하였다.
- Map의 `KEY` 가 없으면 값에 1을 추가, 있으면 +1 을 추가하는 방법을 채택하였다.
- { 생수 ⇒ 1, 환타 ⇒ 2, … } 이렇게 반환해주는 함수로 변경하였다.
```js
const tmpProduct = getHowMany(buyingArray);
  let come = "";
  for (const [key, value] of tmpProduct) {
    come += `<li>${key} X ${value}</li>`;
  }
```
- 받아오는 부분에서 for..of 문으로 key와 value 를 come 변수에 쌓아주고 출력하였다.

**- 그 외 고민 했던 부분 -**

### 🚨 CSS 어떻게 꾸밀까?

아무리 하드 코딩, 스스로 해낸 뿌듯함이 있다고 하더라도 보기 좋은 떡이 먹기 좋은 법.

1. 무료 이미지도 가져와서 메인 배너를 만들고, 다양한 animation, transition, translate를 경험하면서 이쁘게 만들었다.

2. 처음엔 색 조합이 너무 미스매치인것 같아서 [https://color.adobe.com/ko/create/color-wheel](https://color.adobe.com/ko/create/color-wheel) 의 도움을 받아 이쁜 색 조합을 찾을 수 있었다.

3. 반응형 웹으로 만들기 위해 미디어 쿼리를 적용했고, 처음엔 불필요한 요소까지 모두 다시 적용하느라고 애썼지만 시행착오를 겪어서 필요한 부분만 뽑아서 미디어 쿼리를 먹일 수 있는 방법을 찾았다.

🔎 일단 길이같은 경우는 고정된 px보다 rem이나, 퍼센트(%)를 쓰면 반응형을 만들 때 노고가 훨씬 적게 들어간다.<br>
🔎row로 지정된 flex를 세로로 colunm으로 만들어주기만 하면 다른 영역들은 알아서 이쁘게 정렬된다.<br>

### **성과 및 느낀점**

- 장바구니 표시 영역에 Map과 Set 자료구조 적용으로 **시간복잡도 개선**
- 어떤 플랫폼이던 **동일한 UI**를 보여줄 수 있게 노력하였고 이후 UI Framework를 사용하는데 큰 도움이 되었다.
- **꾸준히** 자바스크립트 ES6 문법 학습하며 및 적용
- 이후 프로젝트를 진행하면서 라이브러리와 프레임워크가 **“왜”** 필요한지 이해하고 사용할 수 있는 계기가 되었다.
