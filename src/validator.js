
const validator = {
    
    isValid() {
        
        let cardNumberArrayInput = Array.from(document.getElementById("cardNumberInput").value)
        cardNumberArrayInput = cardNumberArrayInput.reverse()
        
        function getEvenIndex(item, index) {
            return index % 2 === 0
        }  
        let cardNumberArrayEvens = cardNumberArrayInput.filter(getEvenIndex)

        function getOddIndex(item, index){
            return index % 2 != 0
        }
        
        let cardNumberArrayOdds = cardNumberArrayInput.filter(getOddIndex)
       
        let cardNumberArrayEvensTimesTwo = cardNumberArrayEvens.map(x => x * 2)

        function getDoubleDigits(item) {
            return item > 9
        }

        function getSingleDigits(item) {
            return item <= 9
        }

        let cardNumbersEvensSingleDigits = cardNumberArrayEvensTimesTwo.filter(getSingleDigits)

        let cardNumbersEvensDoubleDigits = cardNumberArrayEvensTimesTwo.filter(getDoubleDigits)
        
        let cardNumberNewEvensSingleDigits = cardNumbersEvensDoubleDigits.map(function(item) {
            return item.toString(10).split('')
        })

        let cardNumbersNewEvensSingleDigitsSum = cardNumberNewEvensSingleDigits.map (function(item) {
            return parseInt(item[0]) + parseInt(item[1])
        })

        
        let cardNumberFinalArray = cardNumberArrayOdds.concat(cardNumbersEvensSingleDigits, cardNumbersNewEvensSingleDigitsSum)
         
        let cardNumberFinalArrayInts = cardNumberFinalArray.map(function(item){
            return parseInt(item)
        })


        let sumOfCardNumberDigits = cardNumberFinalArrayInts.reduce((sum,a) => sum + a, 0)
            
         if (sumOfCardNumberDigits % 10 == 0) {
            return true
        } else {
            return false
        }
    }

    maskify() {

    }
}

export default validator;








//validator.isValid(creditCardNumber): creditCardNumber
//validator.maskify(creditCardNumber): creditCardNumber






// primeiro pegar o valor do input

// let cardNumber = document.getElementsById("espaçoNoHTMLQueVouCriar").value

// colocar o valor em uma array?

// let cardNumberArray = Array.from(cardNumber)

// dobrar o valor de cada dígito em posição par

// se algum resultar em um número com dois dígitos, somar os dígitos

// somar todos os dígitos

// se terminar com zero, é um número de cartão válido

    // usar o "%" sumOfCardNumberDigits % 10 == 0



//    let cardNumber = document.getElementById("cardNumberInput").value
