// 날짜 입력 박스
const dateInput = document.getElementById('dateInput');
const dateBox = document.createElement('div');
dateBox.style.fontSize = '30px';

// 할 일 리스트 박스
const listBox = document.createElement('ul');
listBox.style.listStyleType = 'none'; // 목록 점 없애기
const box = document.querySelector('.box');
box.appendChild(dateBox);
box.appendChild(listBox);

// 버튼 요소들
const modifyButton = document.querySelector('input[name="modify"]'); 
const deleteButton = document.querySelector('input[name="delete"]');
const saveButton = document.querySelector('input[name="save"]');

let selectedListItem = null; // 선택된 할 일 항목

// 날짜 입력 처리 (등록 시 제외됨)
dateInput.addEventListener('change', function() {
  dateBox.innerHTML = `[${this.value}]`; // 날짜 형식 추가
});

// 할 일 추가 처리
const taskInput = document.getElementById('todoInput'); // id 수정
const addButton = document.getElementById('addButton');

// addButton 클릭 이벤트
addButton.addEventListener('click', function() {
  const task = taskInput.value.trim();

  if (!task) {
    alert("할 일을 입력하세요!");
    return;
  }

  const listItem = document.createElement('li');
  listItem.style.display = 'flex';
  listItem.style.alignItems = 'center';
  listItem.style.gap = '10px';
  listItem.style.padding = '8px';
  listItem.style.borderBottom = '1px solid #ccc';
  listItem.style.cursor = 'pointer';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `task-${Date.now()}`;

  const label = document.createElement('label');
  label.textContent = task; // ✅ 날짜 제거
  label.style.fontSize = '20px';
  label.htmlFor = checkbox.id;

  // 체크박스 클릭 시 줄 긋기 기능 추가
  checkbox.addEventListener('change', () => {
    label.classList.toggle('checked');
  });

  // 할 일 항목 클릭 시 선택
  listItem.addEventListener('click', (event) => {
    if (!event.target.matches('input[type="checkbox"]')) {
      selectedListItem = listItem;
      listBox.childNodes.forEach(item => item.style.backgroundColor = ""); // 이전 선택 해제
      listItem.style.backgroundColor = "#f0f0f0"; // 선택된 항목 강조
    }
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listBox.appendChild(listItem);

  taskInput.value = ''; // 입력창 초기화
});

// 수정 버튼 클릭 시
modifyButton.addEventListener('click', () => {
  if (selectedListItem) {
    const label = selectedListItem.querySelector('label');
    const newTask = prompt('할 일을 수정하세요:', label.textContent);
    if (newTask) {
      label.textContent = newTask;
      selectedListItem.style.backgroundColor = ""; // 선택 해제
      selectedListItem = null;
    }
  } else {
    alert('수정할 할 일을 선택하세요.');
  }
});

// 삭제 버튼 클릭 시
deleteButton.addEventListener('click', () => {
  if (selectedListItem) {
    listBox.removeChild(selectedListItem); // 선택된 항목 삭제
    selectedListItem = null;
  } else {
    alert('삭제할 할 일을 선택하세요.');
  }
});
