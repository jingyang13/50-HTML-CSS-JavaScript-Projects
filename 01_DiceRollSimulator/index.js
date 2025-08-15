const buttonEl = document.getElementById('roll-button')
const diceEl = document.getElementById('dice')
const rollHistoryEl = document.getElementById('roll-history')

const historyList = []

function rollDice() {
    const rollResult = `&#${9855 + Math.floor(Math.random() * 6) + 1}`
    diceEl.innerHTML = rollResult
    historyList.push(rollResult)

    updateRollHistory()
}

function updateRollHistory() {
    rollHistoryEl.innerHTML = ''

    for(let i = 0; i < historyList.length; i++) {
        const listItem = document.createElement('li')
        listItem.innerHTML = `Roll ${i}: <span>${historyList[i]}</span>`
        rollHistoryEl.appendChild(listItem)
    }
}

buttonEl.addEventListener('click', () => {
    diceEl.classList.add('roll-animation')
    setTimeout(()=> {
        diceEl.classList.remove('roll-animation')
        rollDice()
    }, 1000)
})