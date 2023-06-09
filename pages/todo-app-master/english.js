const inp = document.querySelector(".inp");
const engEles = document.querySelectorAll(".eng-ele");
let ind = 0;
const navs = document.querySelectorAll(".changeInd");
for (let i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", () => {
    navs[ind].style.backgroundColor = "white";
    ind = i;
    navs[ind].style.backgroundColor = "red";
    loadLocalStore();
  });
}
document.getElementById("btn-add").addEventListener("click", function (e) {
  if (inp.value) {
    let arr = JSON.parse(localStorage.data);
    arr[ind].push(inp.value);
    localStorage.setItem("data", JSON.stringify(arr));
  }
  loadLocalStore();
});

function clickCheck(event) {
  if (event.currentTarget.checked && ind <= 4) {
    const val = event.currentTarget.value;

    let arr = JSON.parse(localStorage.data);
    const curArr = arr[ind];
    let nextArr = arr[ind + 1];

    curArr.splice(curArr.indexOf(val), 1);
    nextArr.push(val);

    arr[ind] = curArr;
    arr[ind + 1] = nextArr;
    localStorage.setItem("data", JSON.stringify(arr));
    loadLocalStore();
  }
}
const loadLocalStore = () => {
  const eng = document.querySelector(".eng");
  eng.innerHTML = "";
  let str = ``;
  const arr = JSON.parse(localStorage.data);
  arr[ind].forEach((e) => {
    str += `<input class='eng-ele' onclick="clickCheck(event)" type="checkbox" value="${e}" /> ${e} <br/>`;
  });
  eng.innerHTML += str;
};
window.onload = (event) => {
  if (localStorage.data) {
    console.log(localStorage.data);
  } else {
    const arr = [[], [], [], [], [], []];
    localStorage.setItem("data", JSON.stringify(arr));
  }
};
