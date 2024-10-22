# 기능

- [ ] 사용자에게 자동차 이름 입력받기
  - [ ] 빈 문자열인지 유효성 검사하기
  - [ ] 쉼표를 기준으로 이름 분리하기
  - [ ] 자동차 수 검사하기
  - [ ] Service 클래스 호출하여 자동차 객체 생성하고 저장하기
- [ ] 사용자에게 시도할 횟수 입력받기
  - [ ] 시도 횟수 검증하기
- [ ] 시도 횟수만큼 반복문 돌면서 자동차 전진 처리하기
  - [ ] 반복문을 한번 돌 때마다 자동차 이름과 이동 횟수를 출력하기
- [ ] 최종 우승자 출력하기

# TDD 개발 순서

1. 상수 저장

- 에러 메시지, 출력 메시지, 출력 메시지, 대쉬

2. util 함수 관련 테스트 코드 작성 → util 함수 작성
3. validateUtil 함수 관련 테스트 코드 작성 → validateUtil 함수들 작성
4. Validator 클래스 관련 테스트 코드 작성 → Validator 클래스 작성
5. OutputView 클래스 관련 테스트 코드 작성 → OutputView 클래스 작성
6. CarModel 클래스 관련 테스트 코드 작성 → CarModel 클래스 작성
7. RacingCarService 클래스 관련 테스트 코드 작성 → RacingCarService 클래스 작성
8. RacingCarController 클래스 관련 테스트 코드 작성 → RacingCarController 클래스 작성

# MVC + Service 패턴

### view

| 클래스     | 메서드              |
| ---------- | ------------------- |
| InputView  | inputCarNames       |
| OutputView | printAdvancedResult |
|            | printEmptyLine      |
|            | printString         |
|            | printWinners        |

### controller

| 클래스              | 메서드 |
| ------------------- | ------ |
| RacingCarController | run    |

### service

| 클래스           | 필드        | 메서드             |
| ---------------- | ----------- | ------------------ |
| RacingCarService | tryNum,cars | saveCars           |
|                  |             | processCarMovement |
|                  |             | getWinners         |

### model

| 클래스   | 필드                   | 메서드           |
| -------- | ---------------------- | ---------------- |
| CarModel | carName, advancedCount | getCarName       |
|          |                        | getAdvancedCount |
|          |                        | setAdvancedCount |
|          |                        | advanceOnRandom  |

### util

| 함수              |
| ----------------- |
| isAdvancePossible |
| getCars           |

### validataionUtil

| 함수              |
| ----------------- |
| checkEmptyString  |
| checkMinCarNumber |
| checkMaxCarNumber |
| checkMinTryNumbe  |
| checkMaxTryNumber |

### vaildator

| 클래스    | 메서드            |
| --------- | ----------------- |
| vaildator | validateUserInput |
|           | validateCarNumber |
|           | validateTryNumber |
