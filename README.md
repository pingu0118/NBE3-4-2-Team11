# :building_construction: **POFO : 모든 개발자를 위한 아카이빙 사이트**

> **:pushpin: 개발자들의 프로젝트, 이력서, 작성한 게시글을 한곳에 아카이빙하는 플랫폼**

---

## :pushpin: **프로젝트 개요**

### :rocket: **주요 기능**
#### :small_blue_diamond: 메인 페이지
- 사이트 정보 및 기능 소개
- 소셜 로그인(회원가입)

#### :small_blue_diamond: 개인 페이지
- **이력서 관리**: 이력서, 자격증, 대외 활동, 입상 내역 등 등록/수정/삭제
- **프로젝트 관리**: 프로젝트 등록, 수정, 삭제

#### :small_blue_diamond: 게시판 페이지 (개인 블로그 기능)
- **게시글 CRUD**: 작성, 수정, 삭제

#### :small_blue_diamond: 2차 인증
- 초기 소셜 로그인
- 민감 정보 접근 시 메일링 서비스(Gmail, Naver 등)
- 2차 인증 문자 발송 및 확인 로직 추가

#### :small_blue_diamond: 계정 관리 기능
- 휴먼 계정 처리: 로그인 이력이 1년 이상 없는 계정을 자동으로 휴먼 계정으로 전환
- 유저 정보 조회: 관리자가 유저 관련 정보를 표 형식으로 조회 가능

---

## :busts_in_silhouette: **팀원**

| 이름  | 역할  | 기능 |
|------|------|--------|
| :technologist: [ **차승호** ](https://github.com/loong6138) | Backend | 공지사항 & 문의사항 기능 구현 / UI 디자인 |
| :technologist: [ **김상진** ](https://github.com/sangxxjin) | Backend | 이력서 기능 구현 / UI 디자인 |
| :technologist: [ **김누리** ](https://github.com/NRKim93) | Backend | 유저 로그인 기능 구현 / UI 디자인 |
| :technologist: [ **이세연** ](https://github.com/seeyeon) | Backend | 프로젝트 기능 구현 / UI 디자인 |
| :technologist: [ **권보경** ](https://github.com/pingu0118) | Backend | 게시판 & 공통 기능 구현 / UI 디자인 |
| :technologist: [ **이상억** ](https://github.com/leesangeok) | Backend | 관리자 로그인 기능 구현 / UI 디자인 |

---

## :dart: **Target User**
- **현업 개발자**: 프로젝트 및 기술 블로그 관리
- **취업 준비생**: 포트폴리오 및 자격증 관리
- **취미 개발자**: 개인 프로젝트 기록

---

## :hammer_and_wrench: **기술 스택**

### :desktop_computer: **Frontend**
- Next.js, React, TypeScript, Axios

### :desktop_computer: **Backend**
- Spring Boot, Java
- Spring Security, JWT

### :floppy_disk: **Database**
- MySQL

---

## :shield: **보안 및 인증**
- OAuth 2.0
- Spring Security
- JWT (토큰 기반 인증)
- Access/Refresh Token을 HttpOnly Cookie에 저장하여 인증 처리
---

## :page_facing_up: **문서 및 참고자료**

| 항목  | 링크  | 비고  |
|------|------|------|
| **기능 명세서** | [Google Sheets](https://docs.google.com/spreadsheets/d/11EgM7Jocbc1PbeUknhGzXWnCIBPURaLFAw-dXzd05Oo/edit?gid=0#gid=0) |  |
| **ERD (데이터베이스 설계)** | [ERD Cloud](https://www.erdcloud.com/d/6cZ3yPmhjqN42zvSQ) |  |
| **API 명세서** | [Notion](https://www.notion.so/API-f2be9b45de4a40669f77a7f168fb3029?pvs=4) | :red_circle: *접근 제한 가능* |
| **Figma 디자인** | [Figma](https://www.figma.com/design/strPSmUOapzDsLgdIT6Niw/NBE3-4-2-Team-11?node-id=0-1&p=f&t=fOthvsYpGKGV8u4l-0) | UI/UX |


---

## :speech_balloon: **협업 툴**
- **Notion**
- **Slack (허들 지원)**
- 필요 시 **ZEP 추가 활용**
