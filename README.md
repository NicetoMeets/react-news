# React News with TO-DO


https://user-images.githubusercontent.com/108124042/212672277-d46b669f-a830-496a-a1af-47b53ea9a799.mp4



1. react-create-app 명령어 사용해서 프로젝트 생성 및 github 레포지토리 연결
2. 제공된 서버파일을 실행
3. axios 라이브러리를 사용하여 데이터 json 불러오기
3. 불러온 데이터를 기준으로 뉴스 컴포넌트에 출력
4. 홈페이지, todo페이지, 뉴스컴포넌트, todo컴포넌트 각각 구성
5. redux-toolkit, redux-persist, react-redux 라이브러리 설치
6. redux를 사용하여 todo데이터 전역으로 관리
7. reducer 제작하여 todo데이터 추가, 삭제, 수정 기능 구현
6. 새로고침되도 검색조건이 유지되도록 적용
7. 홈페이지, todo페이지 css구성
8. Todo 생성시 요일별 선택 가능하도록 구성
9. 저장된 todo가 오늘 일자에 맞게 출력되도록 filter 적용
10. 체크박스기능 추가
11. Css최종 적용


 어려웠던 점
- 뉴스 데이터 CSS 적용
    - 뉴스 데이터를 가로 스크롤을 적용하여 예시와 비슷하게 구성하려했으나 css 적용이 어려워서 구글링 및 예제들을 찾아보고 적용하였다.

- TODO 적용할 일자 상태 관리
    - 제목, 내용은 단순 텍스트를 입력하면 되지만, 적용할 일자는 어떻게 처리할지 고민하다가 배열에 선택한 요일을 담는 방식으로 처리를 하였고, 예시를 기반으로 원 안에 요일 글자가 구성되도록 css 처리하였다.

- TODO state 상태관리
    - 입력한 TODO 데이터들을 새로고침이 되면 사라지기 때문에 redux-persist를 사용하여 새로고침되어도 데이터가 유지되도록 적용하였고, sessionStorage를 사용해 세션으로 데이터가 관리되도록 하였다.

- TODO 오늘 할 일에 해당되는 데이터 출력
    - 입력한 TODO중, 오늘 일자에 맞게 출력이 되어야 하므로 로직을 고민하다가 TODO state의 각 데이터에 들어있는 days 배열 기준으로 filter를 적용해 처리하였다.
