import validator from './validator.js';


const cardNumber = document.getElementById("cardNumberInput").value

const cardNumberValidate = validator.isValid(cardNumber)

const cardNumberMasked = validator.maskify(cardNumber)

document.getElementById("sendButton").addEventListener("click", checkCard)

function checkCard() {

  if (cardNumberValidate === true) {
    alert("Cartão validado com sucesso")
    addToWallet()
  } else if (cardNumberValidate === false) {
    alert("O númedo de cartão inserido não é válido")
  } else {
    alert("Por favor, insira o número do cartão")

  }

}

function addToWallet() {
  document.getElementById("walletCardOne").innerHTML = cardNumberMasked
}












// chamar validator.isValid() e validator.maskify().
//assim validator.isValid(creditCardNumber): creditCardNumber e
//validator.maskify(creditCardNumber): creditCardNumber

//pra poder chamar um método tem que escrever assim nomeDoObjeto.nomeDoMétodo(ondeAplicar)


//const cardNumberArrayInput = Array.from(document.getElementById("cardNumberInput").value).reverse()