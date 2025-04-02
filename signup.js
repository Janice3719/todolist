document.addEventListener("DOMContentLoaded", function () {
    const signupButton = document.querySelector(".signup-button");

    signupButton.addEventListener("click", function () {
        const username = document.querySelector('input[placeholder="username"]').value;
        const password = document.querySelector('input[placeholder="password"]').value;
        const email = document.querySelector('input[placeholder="email"]').value;

        if (username && password && email) {
            // 모든 필드가 입력되었을 때만 페이지 이동
            window.location.href = "login.html";
        } else {
            alert("모든 필드를 입력해주세요!");
        }
    });
});
