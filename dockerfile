# Node.js 기반 이미지 사용
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 파일 복사
COPY package.json package-lock.json ./
RUN npm install

# 나머지 파일 복사
COPY . .

# 서버 실행 포트 설정
EXPOSE 3000

# 서버 실행
CMD ["node", "server.js"]
