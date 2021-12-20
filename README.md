# 실행 방법

## 로컬

```
$ npm run dev
```

> 로컬환경 시 환경변수를 config에 직접 추가하거나 스크립트에 추가하여야합니다.  
> (깃에 푸쉬 할 때 credential이 노출되지 않도록 확인.)  
> 또는 foreman 라이브러리를 글로벌로 설치하여 `.env`를 같이 실행 하면 됩니다.

## 도커

```
$ docker-compose up --build -d
```

> --build : 도커파일 빌드 하는 옵션
> -d : 백그라운드 실행

# 폴더 구조

`도메인` 방식의 폴더 구조를 형성 하였으며
하위 폴더에는 `controllers`, `model`, `services`로 구성된다.

```
📦src
 ┣ 📂users
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜findByFirstName.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂model
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜user.methods.ts
 ┃ ┃ ┣ 📜user.schema.ts
 ┃ ┃ ┣ 📜user.statics.ts
 ┃ ┃ ┗ 📜user.types.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜findByFirstName.service.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜userRoutes.ts
 ┣ 📜app.ts
 ┣ 📜config.ts
 ┣ 📜db.ts
 ┣ 📜errors.ts
 ┣ 📜index.ts
 ┗ 📜test.ts
```

# 기술 스택

TypeScript(esModule)  
Express, MongoDB  
Docker  
Twilio
