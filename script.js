const inCard = document.getElementById("inCard")
const inDate = document.getElementById("inDate")
const inCVV = document.getElementById("inCVV")

const maskNumber = "####-####-####-####"
const maskDate = "##/##"
const maskCVV = "###"

let cardNumber = []
let dateNumber = []
let cvvNumber = []

inCard.addEventListener('keydown', (e) => {
    if (e.key === "Tab") {
        return
    }
    e.preventDefault()
    insertData(maskNumber, e.key, cardNumber)
    inCard.value = cardNumber.join("")
})

inDate.addEventListener('keydown', (e) => {
    if (e.key === "Tab") {
        return
    }
    insertData(maskDate, e.key, dateNumber)
    inDate.value = dateNumber.join("")
})

inCVV.addEventListener('keydown', (e) => {
    if (e.key === "Tab") {
        return
    }
    insertData(maskCVV, e.key, cvvNumber)
    inCVV.value = cvvNumber.join("")
})

let insertData = (mask, key, arr) => {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
    if (key === "Backspace" && arr.length > 0) {
        arr.pop();
        return
    }

    if (numbers.includes(key) && arr.length + 1 <= mask.length) {
        if (mask[arr.length] === "-" || mask[arr.length] === "/") {
            arr.push(mask[arr.length], key)
        } else {
            arr.push(key)
        }
    }
}