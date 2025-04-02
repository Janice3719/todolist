const express = require('express');
const path = require('path');
const app = express();

// 정적 파일 제공 (HTML, CSS, JS)
app.use(express.static(__dirname));

// 기본 경로에서 login.html 반환
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// 서버 실행
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
