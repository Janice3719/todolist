document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");

    loginButton.addEventListener("click", function () {
        // 입력된 username과 password 가져오기
        const username = document.querySelector("input[type='text']").value;
        const password = document.querySelector("input[type='password']").value;

        // 올바른 계정인지 확인
        if (username === "hi" && password === "hi") {
            // 로그인 성공 → march.html로 이동
            window.location.href = `march.html?username=${encodeURIComponent(username)}`;
        } else {
            // 로그인 실패 → 경고 메시지 표시
            alert("로그인 실패! username과 password를 확인하세요.");
        }
    });
});
