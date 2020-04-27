const Button = document.getElementById("button");
const Wellcome = document.getElementById("wellcome");
const Input = document.querySelector("footer input");

Button.addEventListener('click', () => {
  const email = Input.value;
  ValidationEmail(email);
  PrepareContainer(email);
})

const ValidationEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (regex.test(email))
    return
  else
  alert("Você entrou com um endereço de email inválido!")
}

const PrepareContainer = (email) => {
  const user = document.createElement("p");
  user.innerHTML = email;
  Wellcome.appendChild(user)
  Wellcome.classList.add('show');
}