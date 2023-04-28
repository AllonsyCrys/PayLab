import validator from './validator.js';

//const cardNumber = document.getElementById('cardNumberInput').value
/*pega o value do input do número do cartão */

const cardForm = document.getElementById("cardForm")
/*coloca o formulário em uma constante */

cardForm.addEventListener("submit", function (event) {
  event.preventDefault()

  const cardNumber = document.getElementById('cardNumberInput').value
  checkCard(cardNumber)
  
})

/*adiciona um event listener do tipo submit, ativando a função com o parâmetro evento, 
depois, event.preventDefault() faz com que o formulário não seja enviado automáticamente 
quando a página carrega 
*/
let cardCount = 1

function checkCard(cardNumber) {
  const cardNumberValidate = validator.isValid(cardNumber)
 
  
  if (cardNumberValidate === true) {
    alert('Cartão validado com sucesso')

    if (cardCount === 1) {
      document.getElementById('walletCardOne').innerHTML = validator.maskify(cardNumber)
      const walletTextOne = document.getElementById('walletCardOne');
      walletTextOne.style.color = "black"
    } else if (cardCount === 2) {
      document.getElementById('walletCardTwo').innerHTML = validator.maskify(cardNumber)
      const walletTextTwo = document.getElementById('walletCardTwo');
      walletTextTwo.style.color = "black"
    } else if (cardCount === 3) {
      document.getElementById('walletCardThree').innerHTML = validator.maskify(cardNumber)
      const walletTextThree = document.getElementById('walletCardThree');
      walletTextThree.style.color = "black"
    } else if (cardCount === 4) {
      document.getElementById('walletCardFour').innerHTML = validator.maskify(cardNumber)
      const walletTextFour = document.getElementById('walletCardFour');
      walletTextFour.style.color = "black"
    } else if (cardCount === 5) {
      document.getElementById('walletCardFive').innerHTML = validator.maskify(cardNumber)
      const walletTextFive = document.getElementById('walletCardFive');
      walletTextFive.style.color = "black"
    } else if (cardCount >= 6) {
      alert("Sua carteira está cheia")
    }
    cardCount++
  } else if (cardNumberValidate === false) {
    alert('Número de cartão inválido')
  }
}






