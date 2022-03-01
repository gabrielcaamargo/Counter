const decreaseButton = document.getElementById('decreaseBtn')
const increaseButton = document.getElementById('increaseBtn')
const resetButton = document.getElementById('resetBtn')


let counterNumberResult = 0
const resultLayout = document.querySelector('p')

decreaseButton.addEventListener('click', () => {
  counterNumberResult -= 1
  resultLayout.innerText = counterNumberResult
  
  
  if(counterNumberResult < 0) {
    resultLayout.style.color = "red"
  }
})

increaseButton.addEventListener('click', ()=> {
  counterNumberResult += 1
  resultLayout.innerText = counterNumberResult

  if(counterNumberResult > 0) {
    resultLayout.style.color = "green"
  }
}) 

resetButton.addEventListener('click', () => {
  counterNumberResult = 0
  resultLayout.innerText = counterNumberResult

  resultLayout.style.color = "black"
})



