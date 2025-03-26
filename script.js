// 날짜 박스에 입력
const dateInput = document.getElementById('dateInput');
const dateBox = document.createElement('div');
dateBox.style.fontSize = '30px';

// 할 일 박스에 입력
const listBox = document.createElement('ul');
listBox.style.listStyleType = 'none'; // 목록 점 없애기
const box = document.querySelector('.box');
box.appendChild(dateBox);
box.appendChild(listBox);

// 수정 버튼
const modifyButton = document.querySelector('input[name="modify"]'); 
// 삭제 버튼
const deleteButton = document.querySelector('input[name="delete"]');

let selectedListItem = null; // 선택된 할 일 항목


// 날짜 입력 처리
dateInput.addEventListener('change', function() {
  dateBox.innerHTML = this.value;
});

// 할일 추가 처리
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');

// addButton 누를 시 처리 내용
addButton.addEventListener('click', function() {
  const task = taskInput.value;
  if (task) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task-${Date.now()}`;
    const label = document.createElement('label');
    label.textContent = task;
    label.style.fontSize = '20px';
    label.htmlFor = checkbox.id;
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listBox.appendChild(listItem);

    checkbox.addEventListener('click', () => {
      label.classList.toggle('checked');
    });

    // 할 일 항목 클릭 시 선택
    listItem.addEventListener('click', () => {
      selectedListItem = listItem;
    });

    taskInput.value = '';
  }
});

modifyButton.addEventListener('click', () => {
  if (selectedListItem) {
    const label = selectedListItem.querySelector('label');
    const newTask = prompt('할 일을 수정하세요:', label.textContent);
    if (newTask) {
      label.textContent = newTask;
      selectedListItem = null; // 선택 해제
    }
  } else {
    alert('수정할 할 일을 선택하세요.');
  }
});

deleteButton.addEventListener('click', () => {
  if (selectedListItem) {
    listBox.removeChild(selectedListItem); // 선택된 항목 삭제
    selectedListItem = null; // 선택 해제
  } else {
    alert('삭제할 할 일을 선택하세요.');
  }
});

