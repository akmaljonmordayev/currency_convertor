const url = "https://currency-converter-pro1.p.rapidapi.com/currencies";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "50c6e93fa1msh70b2c3913068001p13ac1djsn1489537ab55d",
    "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
  },
};
async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    let newArr = [];
    for (res in result) {
      newArr.push(Object.keys(result[res]));
    }
    let selects = document.querySelectorAll("select");
    newArr[1].forEach((item, ind) => {
      const option = document.createElement("option");
      option.innerHTML = item;
      option.value = item;
      selects[0].appendChild(option.cloneNode(true));
      selects[1].appendChild(option.cloneNode(true));
    });
  } catch (error) {
    console.error(error);
  }
}
getData();
let select1 = document.querySelector(".select1");
let select2 = document.querySelector(".select2");
let sel1;
let sel2;
function selectedImg2(){
  let imgTag = document.querySelector(".flag1");
  console.log(imgTag);
  let split = sel1;
  let lowerCase = split.toLowerCase();
  let bigRes = lowerCase.substr(0, lowerCase.length - 1);
  imgTag.src = `https://flagcdn.com/48x36/${bigRes}.png`;
}
select1.addEventListener("change", (e) => {
  sel1 = e.target.value;
  selectedImg2()
});
function selectedImg1(){
  let imgTag = document.querySelector(".flag2");
  console.log(imgTag);
  let split = sel2;
  let lowerCase = split.toLowerCase();
  let bigRes = lowerCase.substr(0, lowerCase.length - 1);
  imgTag.src = `https://flagcdn.com/48x36/${bigRes}.png`;
}
select2.addEventListener("change", (e) => {
  sel2 = e.target.value;
  selectedImg1()
});
let input = document.querySelector(".input1");
async function consequence() {
  const url1 = `https://currency-converter-pro1.p.rapidapi.com/convert?from=${sel1}&to=${sel2}&amount=${input.value}`;
  const options1 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "50c6e93fa1msh70b2c3913068001p13ac1djsn1489537ab55d",
      "X-RapidAPI-Host": "currency-converter-pro1.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url1, options1);
    const result = await response.json();
    const formattedResult = parseFloat(result.result).toLocaleString("en-US", {
      maximumFractionDigits: 2,
    });
    document.querySelector(
      ".exchange-rate"
    ).innerHTML = `Result:${formattedResult} ${sel2} 🚀🚀`;
  } catch (error) {
    console.error(error);
  }
}
let errText = document.querySelector(".err")
document.querySelector(".get").addEventListener("click", ()=>{
  if(input.value !== ""){
    consequence()
    errText.innerHTML = ''
  }else{
    errText.innerHTML = 'Iltimos miqdor kiriting👆👆👆'
  }
});
