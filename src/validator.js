const validator = {
  isValid: function (cardNumber) {

    const cardNumberInput = cardNumber.split('').reverse()


    function getEvenIndex(item, index) {
      return index % 2 === 0
    }
    const cardNumberEvens = cardNumberInput.filter(getOddIndex)

    function getOddIndex(item, index) {
      return index % 2 !== 0
    }

    const cardNumberOdds = cardNumberInput.filter(getEvenIndex)

    const cardNumberDoubledEvens = cardNumberEvens.map(x => x * 2)

    function getTwoDigits(item) {
      return item > 9
    }

    function getOneDigits(item) {
      return item <= 9
    }

    const cardNumbersEvensOneDigits = cardNumberDoubledEvens.filter(getOneDigits)

    const cardNumbersEvensTwoDigits = cardNumberDoubledEvens.filter(getTwoDigits)

    const cardNumberNewOneDigits = cardNumbersEvensTwoDigits.map(function (item) {
      return item.toString(10).split('')
    })

    const cardNumbersNewOneDigitsSum = cardNumberNewOneDigits.map(function (item) {
      return parseInt(item[0]) + parseInt(item[1])
    })


    const cardNumberFinal = cardNumberOdds.concat(cardNumbersEvensOneDigits, cardNumbersNewOneDigitsSum)

    const cardNumberFinalInts = cardNumberFinal.map(function (item) {
      return parseInt(item)
    })


    const sumOfCardNumberDigits = cardNumberFinalInts.reduce((sum, a) => sum + a, 0)

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












