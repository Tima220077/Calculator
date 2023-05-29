const plusA = document.getElementById("pluss")
const minusA = document.getElementById("minus")
const divideA = document.getElementById("divide")
const multiplyA = document.getElementById("multiply")
const clearA = document.getElementById("clear-btn")
const sumEl = document.getElementById("sum-el")

plusA.addEventListener("click", function(){
    let sumEl = document.getElementById("sum-el")
    let n1 = parseInt(document.getElementById("type-numbera").value)
    let n2 = parseInt(document.getElementById("type-numberb").value)
    let result = n2 + n1
    sumEl.textContent = ""
    sumEl.textContent += "Sum is: " + result
})

minusA.addEventListener("click", function(){
    let sumEl = document.getElementById("sum-el")
    let n1 = parseInt(document.getElementById("type-numbera").value)
    let n2 = parseInt(document.getElementById("type-numberb").value)
    let result = n2 - n1
    sumEl.textContent = ""
    sumEl.textContent += "Sum is: " + result
})

divideA.addEventListener("click", function(){
    let sumEl = document.getElementById("sum-el")
    let n1 = parseInt(document.getElementById("type-numbera").value)
    let n2 = parseInt(document.getElementById("type-numberb").value)
    let result = n2 / n1
    sumEl.textContent = ""
    sumEl.textContent += "Sum is: " + result
})

multiplyA.addEventListener("click", function(){
    let sumEl = document.getElementById("sum-el")
    let n1 = parseInt(document.getElementById("type-numbera").value)
    let n2 = parseInt(document.getElementById("type-numberb").value)
    let result = n2 * n1
    sumEl.textContent = ""
    sumEl.textContent += "Sum is: " + result
})

clearA.addEventListener("click", function(){
    sumEl.textContent = "Sum is: "
    
})