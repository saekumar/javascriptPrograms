function calcProfit() {
  let initial = Number(prompt('Eneter Initial Amout : '))
  let years = Number(prompt('Enter Years : '))
  let rate = Number(prompt('Enter rate of interest : '))
  let totalAmount = initial
  for (let i = 1; i <= years; i++) {
    totalAmount += totalAmount * rate
  }
  let profit = totalAmount - initial
  alert(`Total amout for ${years} years is : ${totalAmount}`)
  alert(`Profit is ${profit}`)
}

calcProfit()
