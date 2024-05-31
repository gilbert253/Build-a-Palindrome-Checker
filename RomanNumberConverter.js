const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function convertToRoman(number){
let romanNumeral = '' 
let romanList = [
["M", 1000],
["CM", 900],
["D", 500],
["CD", 400],
["C", 100],
["XC", 90],
["L", 50],
["XL", 40],
["X", 10],
["IX", 9],
["V", 5],
["IV", 4],
["I", 1]
];

for(let i in romanList){
  while (number >= romanList[i][1]){
    romanNumeral += romanList[i][0] 
    number -= romanList [i][1]}}
return romanNumeral
}

convertBtn.addEventListener("click",()=>{
  if (!number.value){
    output.innerText = "Please enter a valid number"
  } else if (number.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999"
    } else if (number.value <= 0) {
      output.innerText = "Please enter a number greater than or equal to 1"
    } else {
      output.innerText = convertToRoman(number.value)
    }
})
