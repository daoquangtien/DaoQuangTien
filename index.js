// Bài 2

let inputValue = document.querySelector(".inputNumber")
let count = 3
let randomNumber = Math.floor(Math.random() * 10)

function userInput() {

    count--

    if (inputValue.value < 0 || inputValue.value > 10 || !Number(inputValue.value)) {
        alert("Không hợp lệ! Chỉ nhập số từ 0 - 10")
        count = 3
    } else if (inputValue.value === randomNumber && count > 0 && count >= 0) {
        alert(`Jactpot là ${randomNumber}, chúc mừng bạn trở thành tỷ phú`)
    } else if (inputValue.value !== randomNumber && count > 0) {
        alert(`Bạn còn ${count} lượt chơi`)
    } else if (inputValue.value !== randomNumber && count === 0) {
        alert(`Vẫn sai, thế là bạn hết lượt chơi rồi!`)
        alert(`Jackpot là ${randomNumber}`)
    } else if (count < 0) {
        alert(`Hết lượt chơi rồi! Hẹn bạn dịp khác`)
    }
}

// Bài 1

// Phần 2:

merge2String("123", "abcd")

function merge2String(s1, s2) {
    let mergeArr = []
    let arrS1 = s1.split("")
    let arrS2 = s2.split("")

    let maxLength = Math.max(arrS1.length, arrS2.length)
    for (let i = 0; i < maxLength; i++) {
        mergeArr.push(arrS1[i])
        mergeArr.push(arrS2[i])
    }

    for (let i = 0; i < mergeArr.length; i++) {
        if (mergeArr[i] === undefined) {
            mergeArr.splice(i, 1)
        }
    }
    console.log("Bài 1 phần 2: " + mergeArr)
}

// Bài 1

// Phần 1:

findOppositeNumber(10, 2)

function findOppositeNumber(n, inputNumber) {
    let middle = n / 2
    let result
    if (inputNumber < middle) {
        result = inputNumber + middle
    } else if (inputNumber >= middle) {
        result = inputNumber - middle
    }
    console.log('Bài 1 phần 1: ' + result)
}