//스크롤 하면 todolist로 가게 하고 싶어(수정해야됨)

const sections = document.querySelectorAll('section'); // 각 페이지 섹션 요소 선택

window.addEventListener('wheel', (event) => {
  event.preventDefault(); // 기본 스크롤 동작 방지

  const currentSection = document.querySelector('.active'); // 현재 활성화된 섹션
  let nextSection;

  if (event.deltaY > 0) {
    // 아래로 스크롤
    nextSection = currentSection.nextElementSibling;
  } else {
    // 위로 스크롤
    nextSection = currentSection.previousElementSibling;
  }

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' }); // 다음 섹션으로 부드럽게 스크롤
    currentSection.classList.remove('active');
    nextSection.classList.add('active');
  }
});

sections[0].classList.add('active'); // 첫 번째 섹션 활성화