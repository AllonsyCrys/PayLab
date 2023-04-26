const validator = {
  isValid: function (cardNumber) {

    const cardNumberArrayInput = cardNumber.split('').reverse()


    function getEvenIndex(item, index) {
      return index % 2 === 0
    }
    const cardNumberArrayEvens = cardNumberArrayInput.filter(getOddIndex)

    function getOddIndex(item, index) {
      return index % 2 !== 0
    }

    const cardNumberArrayOdds = cardNumberArrayInput.filter(getEvenIndex)

    const cardNumberArrayEvensTimesTwo = cardNumberArrayEvens.map(x => x * 2)

    function getDoubleDigits(item) {
      return item > 9
    }

    function getSingleDigits(item) {
      return item <= 9
    }

    const cardNumbersEvensSingleDigits = cardNumberArrayEvensTimesTwo.filter(getSingleDigits)

    const cardNumbersEvensDoubleDigits = cardNumberArrayEvensTimesTwo.filter(getDoubleDigits)

    const cardNumberNewEvensSingleDigits = cardNumbersEvensDoubleDigits.map(function (item) {
      return item.toString(10).split('')
    })

    const cardNumbersNewEvensSingleDigitsSum = cardNumberNewEvensSingleDigits.map(function (item) {
      return parseInt(item[0]) + parseInt(item[1])
    })


    const cardNumberFinalArray = cardNumberArrayOdds.concat(cardNumbersEvensSingleDigits, cardNumbersNewEvensSingleDigitsSum)

    const cardNumberFinalArrayInts = cardNumberFinalArray.map(function (item) {
      return parseInt(item)
    })


    const sumOfCardNumberDigits = cardNumberFinalArrayInts.reduce((sum, a) => sum + a, 0)

    if (sumOfCardNumberDigits % 10 === 0) {
      return true
    } else {
      return false
    }
  }
  ,
  maskify: function (cardNumber) {

    const unmaskedDigits = cardNumber.slice(-4).split('')
    const maskedDigits = []

    for (let i = 0; i < cardNumber.length - 4; i++) {
      maskedDigits.push("#")
    }

    const maskedCardNumber = maskedDigits.concat(unmaskedDigits)
    return maskedCardNumber.join('') 
    


  }

}

export default validator;












