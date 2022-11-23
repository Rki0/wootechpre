const MissionUtils = require("@woowacourse/mission-utils");
const App = require("../src/App");
const RandomNumber = require("../src/RandomNumber");
const Constraints = require("../src/Constraints");

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  // 커스텀 테스트 케이스
  test("게임 시작 메세지 출력", () => {
    const logSpy = getLogSpy();

    const app = new App();
    app.showStartMessage();

    expect(logSpy).toHaveBeenCalledWith("숫자 야구 게임을 시작합니다.");
  });

  test("컴퓨터 랜덤 숫자 생성", () => {
    // spyOn의 순서도 중요하다
    // 이 코드를 app 보다 아래에 넣으면 테스트 에러임. 원하는대로 테스트가 진행되지 않음.
    const randomSpy = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
    const constraintsSpy = jest.spyOn(
      Constraints.prototype,
      "checkConstraints"
    );

    RandomNumber.makeRandomNumber();

    expect(randomSpy).toHaveBeenCalled();
    expect(randomSpy).toHaveBeenCalledWith(1, 9);
    expect(constraintsSpy).toBeTruthy();
    expect(constraintsSpy).toHaveBeenCalledTimes(1);
  });

  // 이게 입력값 검증 밑으로 가면 통과가 안됨
  // 테스트 하나하나 작성 순서도 중요한듯
  test("플레이어 숫자 입력", () => {
    const readSpy = jest.spyOn(MissionUtils.Console, "readLine");
    const constraintsSpy = jest.spyOn(
      Constraints.prototype,
      "checkConstraints"
    );

    const app = new App();
    app.getPlayerInput();

    expect(readSpy).toHaveBeenCalled();
    expect(readSpy).toHaveBeenCalledTimes(1);
    expect(constraintsSpy).toBeTruthy();
    expect(constraintsSpy).toHaveBeenCalledTimes(1);
  });

  test("입력값 숫자 범위 검증", () => {
    const rangeSpy = jest.spyOn(Constraints.prototype, "checkNumberRange");

    // constraints.checkNumberRange("123");
    // expect(constraints.checkNumberRange("1")).toBeTruthy();
    // expect(constraints.checkNumberRange("192")).toBeTruthy();
    // expect(constraints.checkNumberRange("365")).toBeTruthy();
    // expect(constraints.checkNumberRange("000")).toBeTruthy();

    // expect(rangeSpy("123")).toBeTruthy();
    // expect(rangeSpy("491")).toBeTruthy();
    // expect(rangeSpy("698")).toBeTruthy();
    // expect(rangeSpy("574")).toBeTruthy();
    // expect(rangeSpy("346")).toBeTruthy();
    // expect(rangeSpy([1, 2, 3])).toBeTruthy();
    // expect(rangeSpy([4, 7, 9])).toBeTruthy();

    const truthyInput = [
      "123",
      "491",
      "698",
      "574",
      "346",
      [1, 2, 3],
      [4, 7, 9],
    ];

    truthyInput.forEach((item) => {
      expect(rangeSpy(item)).toBeTruthy();
    });

    // expect(rangeSpy([4, 0, 9])).not.toBeTruthy();
    // expect(rangeSpy("012")).not.toBeTruthy();
    // expect(rangeSpy("qwe")).not.toBeTruthy();
    // expect(rangeSpy("106")).not.toBeTruthy();

    const falsyInput = ["012", "qwe", "106", [4, 0, 9]];

    falsyInput.forEach((item) => {
      expect(rangeSpy(item)).not.toBeTruthy();
    });
  });

  test("입력값 길이 검증", () => {
    const lengthSpy = jest.spyOn(Constraints.prototype, "checkInputLength");

    const truthyInput = [
      "123",
      "491",
      "698",
      "574",
      "346",
      [1, 2, 3],
      [4, 7, 9],
    ];

    truthyInput.forEach((item) => {
      expect(lengthSpy(item)).toBeTruthy();
    });

    const falsyInput = ["1234", "12", "1", "", [1, 2, 3, 4], [1, 2], [1], []];

    falsyInput.forEach((item) => {
      expect(lengthSpy(item)).not.toBeTruthy();
    });
  });

  test("입력값 중복 숫자 검증", () => {
    const sameSpy = jest.spyOn(Constraints.prototype, "checkNoSameNumber");

    const truthyInput = [
      "123",
      "491",
      "698",
      "574",
      "346",
      [1, 2, 3],
      [4, 7, 9],
    ];

    truthyInput.forEach((item) => {
      expect(sameSpy(item)).toBeTruthy();
    });

    const falsyInput = ["111", "113", "112", "646", [1, 3, 3], [1, 2, 2]];

    falsyInput.forEach((item) => {
      expect(sameSpy(item)).not.toBeTruthy();
    });
  });

  test("입력값 제한 조건 통합 검증", () => {
    const constraints = new Constraints();

    expect(constraints.checkConstraints("123")).toBeTruthy();

    expect(() => constraints.checkConstraints("333")).toThrow(
      "잘못된 값이 생성되었습니다. 게임을 종료합니다."
    );
    expect(() => constraints.checkConstraints("1234")).toThrow(
      "잘못된 값이 생성되었습니다. 게임을 종료합니다."
    );
    expect(() => constraints.checkConstraints("qwe")).toThrow(
      "잘못된 값이 생성되었습니다. 게임을 종료합니다."
    );
  });

  test("점수 산정", () => {
    const logSpy = getLogSpy();
    const app = new App();

    app.COMPUTER = [1, 2, 3];
    app.comparePlayerInputWithRandomNumber("123");
    expect(app.strike).toEqual(3);
    expect(app.ball).toEqual(0);
    expect(logSpy).toHaveBeenCalledWith(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );

    app.COMPUTER = [3, 2, 5];
    app.comparePlayerInputWithRandomNumber("123");
    expect(app.strike).toEqual(1);
    expect(app.ball).toEqual(1);
    expect(logSpy).toHaveBeenCalledWith("1볼 1스트라이크");

    app.COMPUTER = [7, 2, 9];
    app.comparePlayerInputWithRandomNumber("972");
    expect(app.strike).toEqual(0);
    expect(app.ball).toEqual(3);
    expect(logSpy).toHaveBeenCalledWith("3볼");

    app.COMPUTER = [7, 2, 9];
    app.comparePlayerInputWithRandomNumber("136");
    expect(app.strike).toEqual(0);
    expect(app.ball).toEqual(0);
    expect(logSpy).toHaveBeenCalledWith("낫싱");
  });

  test("게임 재시작 여부 질문", () => {
    const logSpy = getLogSpy();
    const replaySpy = jest.spyOn(App.prototype, "getPlayerRePlayInput");

    const app = new App();

    app.COMPUTER = [1, 2, 3];
    app.comparePlayerInputWithRandomNumber("123");

    expect(app.strike).toEqual(3);
    expect(app.ball).toEqual(0);
    expect(logSpy).toHaveBeenCalledWith(
      "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료"
    );
    expect(replaySpy).toHaveBeenCalled();
    expect(replaySpy).toHaveBeenCalledTimes(1);
  });

  test("게임 재시작 입력값 제한 사항 준수", () => {
    const restartCheckSpy = jest.spyOn(
      Constraints.prototype,
      "checkRePlayInputConstraints"
    );

    const constraints = new Constraints();

    constraints.checkRePlayInputConstraints("1");
    expect(restartCheckSpy).toBeTruthy();

    constraints.checkRePlayInputConstraints("2");
    expect(restartCheckSpy).toBeTruthy();

    expect(() => constraints.checkRePlayInputConstraints("3")).toThrow(
      "잘못된 입력입니다. 게임을 종료합니다."
    );
  });

  test("게임 재시작 테스트", () => {
    const playSpy = jest.spyOn(App.prototype, "play");
    const closeSpy = jest.spyOn(MissionUtils.Console, "close");
    const app = new App();

    app.decideRePlay("1");
    expect(playSpy).toHaveBeenCalled();
    expect(playSpy).toHaveBeenCalledTimes(1);

    app.decideRePlay("2");
    expect(closeSpy).toHaveBeenCalled();
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });

  // 우테코 실제 테스트 케이스
  test("게임 종료 후 재시작", () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246", "135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = [
      "낫싱",
      "3스트라이크",
      "1볼 1스트라이크",
      "3스트라이크",
      "게임 종료",
    ];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트", () => {
    const randoms = [1, 3, 5];
    const answers = ["1234"];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
