function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// 1.1 Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day .
// Ex: <li class="day">3</li>

// Os dias 24, 25 e 31 são feriados e, além da classe day , 
// devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a 
// classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ul = document.getElementById("days");
for (index in dezDaysList) {
  const li = document.createElement('li');
  ul.appendChild(li)
  day = dezDaysList[index];
  li.innerHTML = day
  li.className = 'day'
  if (day == 24) {
    li.classList.add('holiday')
  } else if (day == 25) {
    li.classList.add('holiday')
  } else if (day == 30) {
    li.classList.add('holiday')
  }

  if (day == 4) {
    li.classList.add('friday')
  } else if (day == 11) {
    li.classList.add('friday')
  } else if (day == 18) {
    li.classList.add('friday')
  } else if (day == 25) {
    li.classList.add('friday')
  }
}
// 2. Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

const buttonContainer = document.querySelector('.buttons-container');
const holiday = 'Feriados'
function createHolidayBTN(buttonName) {
  const button = document.createElement('button');
  buttonContainer.appendChild(button);
  button.innerHTML = buttonName
  button.setAttribute('id', "btn-holiday")
}
createHolidayBTN('feriados');

// 3. É interessante que este botão possua também a lógica inversa. 
// Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function eventClickHolidayBTN() {
  const button = document.querySelector('#btn-holiday')
  button.addEventListener('click', () => {
    console.log('aaa');
    const friday = document.querySelectorAll('.holiday');
    for (let index = 0; index < friday.length; index++) {
      if (friday[index].style.backgroundColor == 'white') {
        friday[index].style.backgroundColor = rgb(238, 238, 238);
      } else {
        friday[index].style.backgroundColor = 'white';
      }
    }
  })
}
eventClickHolidayBTN();

// 4. Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function changefriday(params) {
  const buttonfriday = document.createElement('button');
  buttonContainer.appendChild(buttonfriday);
  buttonfriday.innerHTML = params
}
changefriday('sexta-feira')