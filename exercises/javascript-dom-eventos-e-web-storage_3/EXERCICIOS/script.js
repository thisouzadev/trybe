function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
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
};
// 2. Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

const buttonContainer = document.querySelector('.buttons-container');

function createHolidayBTN(buttonName) {
  const button = document.createElement('button');
  buttonContainer.appendChild(button);
  button.innerHTML = buttonName
  button.setAttribute('id', "btn-holiday")
};
createHolidayBTN('feriados');

// 3. É interessante que este botão possua também a lógica inversa. 
// Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function eventClickHolidayBTN() {
  let button = document.querySelector('#btn-holiday')
  let friday = document.querySelectorAll('.holiday');
  button.addEventListener('click', () => {
    for (let index = 0; index < friday.length; index++) {
      if (friday[index].style.backgroundColor === 'blue') {
        friday[index].style.backgroundColor = 'rgb(238, 238, 238)';
      } else {
        friday[index].style.backgroundColor = 'blue';
      }
    }
  })
};
eventClickHolidayBTN();

// 4. Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function changefridayButton(params) {
  const buttonfriday = document.createElement('button');
  buttonContainer.appendChild(buttonfriday);
  buttonfriday.innerHTML = params
  buttonfriday.setAttribute('id', 'btn-friday');
};
changefridayButton('sexta-feira');

// 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de 
// "click" que modifica o texto exibido nos dias que são Sexta-feira.

// É interessante que este botão possua também a lógica inversa. Ao ser 
// clicado novamente ele retorna à configuração inicial exibindo os dias.

function changeText(dayArray) {
  const buttonFriday = document.querySelector('#btn-friday');
  buttonFriday.addEventListener('click', () => {
    const allFridays = document.querySelectorAll('.friday')
    for (let i = 0; i < allFridays.length; i++) {
      if (allFridays[i].innerHTML !== 'sextou') {
        allFridays[i].innerHTML = 'sextou'
      } else {
        allFridays[i].innerHTML = dayArray[i];
        //sexta.innerText = parseInt(sexta.nextSibling.innertext) - 1;
      }
    }
  })
};
let dayzfriday = [4, 11, 18, 25]
changeText(dayzfriday);

// 6. Implemente duas funções que criem um efeito de "zoom". 
// Ao passar o ponteiro do mouse em um dia do mês no calendário, 
// o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, 
// o texto deve retornar ao tamanho original.
function dayMouseOver() {
  let day = document.querySelector('#days'); // ull
  day.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let day = document.querySelector('#days'); // ul
  day.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};
dayMouseOver();
dayMouseOut();
// 7.Implemente uma função que adiciona uma tarefa personalizada ao calendário.
function createAssignment(string) {
  let task = document.querySelector('.tasks-container');
  const span = document.createElement('span');
  task.appendChild(span).classList.add = 'my-tasks';
  span.setAttribute('class', 'my-tasks')
  span.innerHTML = string
}
createAssignment("cozinhar");

// 8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada 
// no exercício anterior.

function captionColor(color) {
  const myTasks = document.querySelector('.my-tasks');
  const div = document.createElement('div');
  myTasks.appendChild(div);
  div.setAttribute('class', 'task')
  div.style.backgroundColor = color
}
captionColor("red")

// 9. Implemente uma função que adiciona um evento que, ao clicar no elemento com a 
// tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected 
// , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

function targetSelect() {
  let tarefa = document.querySelector('.task')
  tarefa.addEventListener('click', (event) => {

    event.target.classList.toggle('select')
  })
}
targetSelect();

// 10. Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no 
// calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();