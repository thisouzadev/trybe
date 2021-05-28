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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const ul = document.getElementById("days");
for (index in dezDaysList) {
  const li = document.createElement('li');
  ul.appendChild(li)
  li.innerHTML = dezDaysList[index]
  li.className = 'day'
  if (dezDaysList[index] == 24)  {
    li.classList.add('holiday')
  } else if (dezDaysList[index] == 25) {
    li.classList.add('holiday')
  } else if (dezDaysList[index] == 30) {
    li.classList.add('holiday')
  }

  if (dezDaysList[index] == 4) {
    li.classList.add('friday')
  } else if (dezDaysList[index] == 11) {
    li.classList.add('friday')
  } else if (dezDaysList[index] == 18) {
    li.classList.add('friday')
  } else if (dezDaysList[index] == 25) {
    li.classList.add('friday')
  }
}



