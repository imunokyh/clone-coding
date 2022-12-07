### 컨테이너 실행
docker run -d -it --name react-app -p 3000:3000 -v /Users/yunho/Desktop/clone-coding:/mnt node:latest 

### 컨테이너 쉘 접속
docker exec -it react-app /bin/bash

### 컨테이너 이미지로 저장
docker commit react-app node-react:0.0.1