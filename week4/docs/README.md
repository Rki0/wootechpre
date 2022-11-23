# 기능 구현 목록

0. 게임 시작

- 게임 시작 메세지를 출력한다

1. 다리 길이를 입력받기

- 숫자를 입력받는다
- 3 이상 20 이하의 숫자만 가능하다
- 숫자 이 외의 모든 문자열은 받지말자.

2. 건널 수 있는 칸 정하기

- 하나의 칸에 대하여 0,1 중 무작위 값 생성
- 0이면 아래, 1이면 위를 갈 수 있다
- 아래 칸을 건널 수 있는 경우 D, 위 칸을 건널 수 있는 경우 U로 나타낸다

3. 플레이어가 이동할 칸을 입력받기

- 입력은 U와 D만 가능하다
- 이 외의 모든 문자열은 받지말자.

4. 건널 수 있는 곳인지 판단하기

- 3번에서 입력받은 문자열과 2-3번에서 표시된 것이 일치하면 건널 수 있으므로 O 표시
- 건널 수 없다면 X 표시
- 선택하지 않은 칸은 공백을 표시한다
- 현재까지 건넌 다리를 모두 출력한다

5. 게임 실패 시

- 4번에서 X가 표시되면 게임은 실패 처리된다
- 게임 시도 횟수를 1 증가시킨다.
- 재시작 혹은 종료 여부를 묻는다

6. 재시작 혹은 종료 여부 입력 받기

- 입력은 R과 Q만 가능하다
- 이 외의 모든 문자열은 받지말자.
- 재시작(R) 입력시, 게임을 다시 시작한다
- 종료(Q) 입력 시, 결과 메세지를 출력한다

7. 재시작 시

- 게임은 1,2번에서 정했던 다리를 그대로 사용한다
- 단, 유저가 직접 건너는 칸을 입력했던 것은 초기화된다.

8. 종료 시

- 결과 메세지는 유저가 진행한 다리의 상태, 게임 성공 여부, 총 시도한 횟수를 보여준다.
- 게임 성공 여부는 "실패", "성공"으로 표현한다
- 총 시도한 횟수는 유저가 게임 종료(Q)를 할 때가지, 시도한(R) 횟수를 의미한다.
- 이 때, 시도한 횟수는 재시작 + 첫 시도이다.