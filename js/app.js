const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

//selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char") 
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbol")


const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if(upperInput.checked){
        password == getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password == getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password == getRandomData(numberSetSet)
    }
    if(symbolInput.checked){
        password == getRandomData(symbolSet)
    }
}

document.getElementById("btn").addEventListener{
    "clicl",
    function(){
        generatePassword
    }
}
generatePassword();