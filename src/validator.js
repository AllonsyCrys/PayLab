
const validator = {
    
    isValid() {
        
        let cardNumberArray = Array.from(document.getElementById("cardNumberInput").value)
        
        let cardNumberArrayInverse= cardNumberArray.reverse()

        function getEvenIndex(item, index) {
            return index % 2 === 0
      
            }
       
        let cardNumberArrayEvens = cardNumberArray.filter(getEvenIndex)
        let cardNumberArrayTimesTwo = cardNumberArrayEvens.map(x => x * 2)
        
    
        //multiplicar por 2
        //somar os dígitos de itens com mais 2 dígitos







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
