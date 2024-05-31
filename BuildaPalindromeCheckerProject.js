const textInput = document.getElementById("text-input")
const checkButton = document.getElementById("check-btn")
const result = document.getElementById("result")


const makePalindrome = () =>{
  
  const replaced = textInput.value.toLowerCase().replace(/[^a-z0-9]/g,"")
  if (textInput.value === ""){
    alert("Please input a value")
  } else if (textInput.value.length === 1 || replaced ===[...replaced].reverse().join("")){
    result.innerText = `${textInput.value} is a palindrome`}
   else {
    result.innerText = `${textInput.value} is not a palindrome`}  
}
  
checkButton.addEventListener("click",makePalindrome) 
