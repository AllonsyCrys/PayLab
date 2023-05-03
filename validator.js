const validator = {
  isValid: function (cardNumber) {

    const cardNumberInput = cardNumber.split('').reverse() // transforma o input em uma array com split e inverte ela com o reverse
    

    function getEvenIndex(item, index) { //pega os números em posição par
      return index % 2 === 0
    }
    const cardNumberEvens = cardNumberInput.filter(getOddIndex)

    function getOddIndex(item, index) { // pega os números em posição ímpar
      return index % 2 !== 0
    }

    const cardNumberOdds = cardNumberInput.filter(getEvenIndex)

    const cardNumberDoubledEvens = cardNumberEvens.map(x => x * 2) // dobra os pares

    function getTwoDigits(item) {                         //seliona os com 2 dígitos
      return item > 9
    }

    function getOneDigits(item) {                        //seliona os com 1 dígito
      return item <= 9
    }

    const cardNumbersEvensOneDigits = cardNumberDoubledEvens.filter(getOneDigits) // cria a array com 1 dígito

    const cardNumbersEvensTwoDigits = cardNumberDoubledEvens.filter(getTwoDigits) // cria a array com 2 dígitos

    const cardNumberNewOneDigits = cardNumbersEvensTwoDigits.map(function (item) { // divide os double digits em uma array de dois dígitos separados ['1', '2']
      return item.toString(10).split('')
    })

    const cardNumbersNewOneDigitsSum = cardNumberNewOneDigits.map(function (item) { // soma os dígitos
      return parseInt(item[0]) + parseInt(item[1])
    })


    const cardNumberFinal = cardNumberOdds.concat(cardNumbersEvensOneDigits, cardNumbersNewOneDigitsSum) // concatena todas as arrays

    const cardNumberFinalInts = cardNumberFinal.map(function (item) { //transforma em integer
      return parseInt(item)
    })


    const sumOfCardNumberDigits = cardNumberFinalInts.reduce((sum, a) => sum + a, 0) //soma todos os números da array com o método reduce

    if (sumOfCardNumberDigits % 10 === 0) {       //determina o retorno com base no algoritmo
      return true
    } else {
      return false
    }
  }
  ,
  maskify: function (cardNumber) {

    const unmaskedDigits = cardNumber.slice(-4).split('')  //faz uma array com os números que não precisam ser mascarados
    const maskedDigits = []

    for (let i = 0; i < cardNumber.length - 4; i++) {       //faz uma array com os últimos 4 números mascarados
      maskedDigits.push("#")
    }

    const maskedCardNumber = maskedDigits.concat(unmaskedDigits)    //concatena as arrays
    return maskedCardNumber.join('')                                //transforma em string //replace



  }

}

export default validator;












