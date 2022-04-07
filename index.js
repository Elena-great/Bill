const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip =  document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip); //при нажатии на кнопку появятся поля с выобором чаевых

function showTip(e) {
  e.preventDefault();
  tip.style.display = "block"
}

function calculateAmount(e) {
  e.preventDefault(); //чтобы страница не разгружалась и не терялся результат
  const bill = document.querySelector("#bill").value;
  const people = document.querySelector("#people").value;
  const tip = document.querySelector("#tip").value;

  if(bill ===  "" || people === "" || people < 1) {
  Swal.fire({
  icon: 'error',
  title: 'Error!',
  text: 'Please enter your information!',
})
  }

  //формулы
  let amountPerPerson = bill/people; //сколько заплатит один человек
  let tipPerPerson = (bill*tip)/people; //чаевые на человека
  let totalSum = amountPerPerson + tipPerPerson; //общая сумма

  //добавляем центы
  amountPerPerson = amountPerPerson.toFixed(2);
  tipPerPerson = tipPerPerson.toFixed(2);
  totalSum = totalSum.toFixed(2);

  //показываем в приложении
  document.querySelector("#devideBill").textContent = amountPerPerson;
  document.querySelector("#dividedTip").textContent = tipPerPerson;
  document.querySelector("#billAndTip").textContent = totalSum;
}