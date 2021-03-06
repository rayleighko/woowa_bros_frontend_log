# 1일차 교육 내용 기록

- 강의 및 목표 소개
- 1주차 '보일러플레이트' 파트 진행.
- 이 디렉터리에 실습 시 진행했던 자료 포함.
- 일부 강의 내용은 이 문서 혹은 각 실습 자료의 주석으로 포함.
- 실습 위주의 강의이기 때문에 실습 파일을 직접 참고하길 바람.

각 버전 별로 강의 진행. 버전이 증가하면 디벨롭되는 형식.

v0 - 주먹구구로 만든 앱
~
v4 - Redux-saga를 이용해 API를 받아 처리하는 앱

### 프로젝트 SetUp

> \$ npx create-react-app hello-react --typescript

### .ts와 .tsx의 차이

순수 ts code만 사용하면 .ts 확장자를 사용. UI 코드가 포함되면 .tsx 확장자 사용.

### html과 css를 맞춤형으로 사용하려면 오랜 시간이 걸리기 때문에 패키지를 사용할 것임.

디자인은 ant.design을 사용함.

---

#### Tips

하나의 컴포넌트는 Properties를 받을 수 있는데 이를 줄어서 props라고 부른다. 더불어 하나의 컴포넌트는 자신만의 상태(State)를 가지고 있는데, 이를 로컬 스테이트라고 부른다.

제너릭은 해당 함수가 어떤 인터페이스를 인자로 받는지를 나타내는 것이다. 더불어 하나의 인터페이스는 여러 인자로 구성할 수 있는데, 이때 콜론(:)과 물음표콜론(?:)으로 각 인자의 타입을 정할 수 있다. 콜론은 필수 인자, 물음표콜론은 선택 인자를 나타낸다.

더불어 인터페이스와 타입으로 인자의 타입을 정할 수 있는데, 보편적으로 인터페이스를 사용한다. 하지만 필요하다면 타입으로 인자의 타입을 설정해도 무방함.

재활용되는 로직에 비즈니스 로직을 포함시키면 안된다. 그렇기 때문에 재활용되는 로직은 비즈니스 로직을 받지 않는 형태로 만들거나 받기 직전까지만 구현하는 것이 좋다.

타입스크립트는 OOP의 대부분 문법을 차용하지만, 리액트는 모든 TS 문법을 사용하지 않는다.

---

이번 주에 진행하는 보일러 플레이트 목록

v0 - https://codesandbox.io/s/924zj53kwr  
v1 - https://codesandbox.io/s/xzvm68m9xw  
v2 - https://codesandbox.io/s/xlkmn0kpp4  
v3 - https://codesandbox.io/s/xjnzyn38mo  
v4 - https://codesandbox.io/s/n51jrkq2wl  

# 2일차 교육 내용 기록

2일차에는 결석을 해서 추후에 독학해서 정리하는 걸로! 참고 자료는 하단에 있음.

예제 코드 링크입니다~ (이 포스트를 계속 업데이트 하겠습니다)

1회차: (프로젝트 생성, 리엑트 컴포넌트 맛보기)
- https://codesandbox.io/s/924zj53kwr
- https://codesandbox.io/s/xzvm68m9xw

2회차: (Redux 핵심F/U, React에 Redux 적용, 컴포넌트 역할 분리)
- https://codesandbox.io/s/redux-basic-6505n
- https://codesandbox.io/s/xlkmn0kpp4
- https://codesandbox.io/s/xjnzyn38mo

3회차: redux middleware, saga, 비동기 액선 처리
- https://codesandbox.io/s/n51jrkq2wl
- (업데이트 예정)
