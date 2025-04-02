const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공 (HTML, CSS, JS, 이미지 등)
app.use(express.static(path.join(__dirname, 'public')));

// 🔹 기본 URL(/) 접속 시 login.html을 보여줌
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
