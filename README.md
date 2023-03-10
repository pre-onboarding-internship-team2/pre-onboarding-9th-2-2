# readme

# 여행 상품 사이트 상품 리스트 필터링 및 장바구니 구현

원티드 프리온보딩 인턴십 프론트엔드 9차 2주차 과제

## 배포 링크 🔗

[Trip Market](https://pre-onboarding-9th-2-2.vercel.app/)

## 실행 방법 👟

```
yarn install
yarn dev

&&

npm install
npm run dev
```

## 디렉토리 구조 📂

```
/src
├── components                // 페이지를 구성하는 컴포넌트
│   ├── Header.tsx
│   ├── main
│   │   ├── FilterBox.tsx
│   │   ├── ModalBox.tsx
│   │   ├── function
│   │   │   └── dataFilter.ts  // 지역, 가격 필터링 함수
│   │   └── types
│   │       └── types.ts
│   └── reservations
│       └── EmptyBox.tsx
├── pages                      // 라우팅 경로 별 페이지
│   ├── MainPage.tsx
│   ├── NotFoundPage.tsx
│   ├── ReservationsPage.tsx
│   └── SkeletonPage.tsx
├── redux                      // redux-toolkit 상태 관리 
│   ├── function
│   │   └── fetchData.ts       // 비동기 작업 처리 함수
│   ├── hook
│   │   └── redux.hook.ts
│   ├── index.ts
│   ├── slice                  
│   │   ├── cartSlice.ts        // 장바구니 상태 관리
│   │   └── dataSlice.ts        // 상품 데이터 상태 관리 
│   └── types.ts
├── App.tsx                    // 라우팅 처리
├── main.tsx
└── vite-env.d.ts
```

## 사용 기술 스택 🔨

| 사용처 | 사용 기술 | 결정 사유 |
| --- | --- | --- |
| 프레임워크 | React (Vite) | - CRA와 비교했을 때 매우 효율적으로 번들링 작업 진행 |
| 언어 | Typescript(Javascript) | - 더 안정적인 코드 작성: 컴파일 과정에서 버그를 사전에 찾을 수 있음 <br /> - 개발 생산성 향상: 자동완성, 타입체크, 에러 표시 도구 제공 <br /> - 코드 가독성 향상: 개발자가 코드를 이해하고 유지보수하기 쉽게 만듦 |
| 스타일 | Chakra UI | - 웹 응용 프로그램을 위해 액세스 가능하고 재사용 가능한 사용자 인터페이스 구성 요소를 빠르게 구축 가능 |
| 라우팅 처리 | react-router-dom |  |
| 비동기 통신 | axios | - 비동기적 HTTP 통신 방법으로 response 데이터를 다룰 수 있으며 Promise 객체화 가능 <br /> |
| 상태 관리 | Redux Toolkit | - 프로젝트 데이터를 전역적으로 관리 <br />- 프로미스 생명 주기 기반 액션 타입 생성 |
| 코드 포매팅 | ESLint |  |
| 배포 | Vercel | - Github 레포지토리와 연동하여 배포 |

## 주안점 💫

### UX / UI

- 초기 렌더링 시, CSR의 단점을 보완하고자 Skeleton 레이아웃을 데이터를 가져오는 동안 표시
- 최대 수량 초과 시 toast를 통해 피드백 제공
- 404 페이지에 접근 시 메인 페이지로 이동할 수 있는 링크 버튼 안내

### 관심사 분리

- 상태관리 폴더, 컴포넌트 폴더 그리고 페이지 폴더를 구분하여 구성
- 여행상품 목록과 필터 옵션을 받아 필터링 된 목록을 반환하는 함수를 별도로 작성

### 응집도

- 리덕스 관련 폴더를 필요도에 따라 구별해서 세분화 시킴
- 각각의 파일 관련 타입의 경우 관련 폴더 안에 개별적으로 생성하여 사용

## 시연 영상 🎦

메인


https://user-images.githubusercontent.com/46833758/224325616-9b58d2e0-3905-4827-a54c-041c8ec16489.mov


- 예약버튼을 통해 장바구니에 저장


https://user-images.githubusercontent.com/46833758/224325631-85d4e052-38ab-4d84-9867-7b9946eab0f4.mov


- 여행 상품 정보 클릭시 모달창


https://user-images.githubusercontent.com/46833758/224325651-3dc3a564-02f8-45eb-bf88-2c8887cf19db.mov


- 가격필터
- 공간필터

장바구니


https://user-images.githubusercontent.com/46833758/224325669-5f9d786a-078b-4315-8898-1d8b2ebda1fb.mov


- 저장한 상품 삭제

https://user-images.githubusercontent.com/46833758/224325678-fd9acc41-278a-4911-9252-914f3fbd80b1.mov


- 구매수량 변경 & 총금액

추가적인 부분


https://user-images.githubusercontent.com/46833758/224325703-bb84b297-10bc-4077-9225-212edc9f1014.mov


- 로딩시 스켈레톤 화면 구현



## 팀원 구성표 👨‍💻👩‍💻
<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/jiyeon2">
      <img src="https://avatars.githubusercontent.com/u/18395475?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>이지연</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/foreknowledge">
      <img src="https://avatars.githubusercontent.com/u/29790944?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>김예지</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ggsno">
      <img src="https://avatars.githubusercontent.com/u/46833758?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오강산</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/yses9296">
      <img src="https://avatars.githubusercontent.com/u/54027716?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>최은서</b></sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/tjswo2292">
      <img src="https://avatars.githubusercontent.com/u/55657931?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>최선재</b></sub>
      </a>
    </td>
</tr>
<tr>
    <td align="center">
      <a href="https://github.com/jiwonmik">
      <img src="https://avatars.githubusercontent.com/u/59993029?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>김지원</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/onezeun">
      <img src="https://avatars.githubusercontent.com/u/78632052?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>한지은</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/iuesver">
      <img src="https://avatars.githubusercontent.com/u/87600354?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오혁상</b></sub>
      </a>
    </td>
      <td align="center">
      <a href="https://github.com/junseokoh-hub">
      <img src="https://avatars.githubusercontent.com/u/99642719?v=4" width="100px;" alt=""/>
      <br />
      <sub><b>오준석</b></sub>
      </a>
    </td>
        <td align="center">
      <a href="https://github.com/pre-onboarding-internship-team2">
      <img src="https://avatars.githubusercontent.com/u/125961436?s=200&v=4" width="100px;" alt=""/>
      <br />
      <sub><b>2팀</b></sub>
      </a>
    </td>
  </tr>
</table>

## commit convention 📝

| Tag Name | Description |
| --- | --- |
| feat | 새로운 기능 추가 |
| design | UI style 변경 |
| refactor | 코드 리팩토링 |
| fix | 에러, 버그 수정 |
| docs | 문서수정 |
| chores | 기타 수정사항 |

# 협업 방식 👥

## 커뮤니케이션 툴

- 노션([회의록](https://www.notion.so/2da78bd48750440292898f3157a0021b))
- 디스코드
- 깃헙 팀 레포지토리의 PR 코멘트, 커밋메시지

## 과제 수행 방식

1. 기업과제 요구사항 3가지를 이슈 3가지로 할당
    - 기업과제 전체를 한번에 리뷰하기에는 범위가 커서 요구사항 단위로 작업하고 공유하기로 결정함
2. 프로젝트 진행 규칙을 세우고 각자의 브랜치에서 이슈 단위로 작업 진행
    
    ```markdown
    # **팀 repository 에 PR 방법
    1. organization repository에 각자의 이름으로 branch 생성 및 main branch를 개인 개정의 repository로 fork
    2. 각자의 fork된 개인 개정의 repository에서 기능(이슈)단위의 branch 생성 및 구현
    3. organization repository에 각자의 이름 branch에 기능(이슈)단위로 PR 및 merge
    4. 최종 제출 직전에 토론으로 하나의 branch만 main branch로 merge
    5. 나머지 branch들은 삭제 (PR만 남아있게끔)**
    ```
    
3. 이슈마다 PR를 생성하여 자신의 코드에 대한 설명을 남기고 팀원들의 코드를 리뷰
    - PR 내용과 브랜치의 커밋으로 팀원의 작업상황을 확인
4. 디스코드에서 회의를 진행하여 본인의 작업물, 경과, 고민점 등을 공유
    - 자신의 코드를 설명하고 Best Practice에 대한 의견 교환 및 소통하는 연습 🤗
5. 디스코드 회의 이후 다른 팀원의 코드와 작업방식, PR에서 받은 코멘트를 참고하여 자신의 프로젝트를 개선
6. 마지막에 팀원끼리 투표를 진행하여 과제로 제출할 코드 선정
    - 다음부터는 ‘기업 과제’로서 팀원들의 코드가 어떤지 객관적으로 평가해 볼 수 있도록 채점표를 만들어 이야기를 나눠볼 예정
