const Result = require("../src/Result");

describe("결과 테스트", () => {
  // calculateEachLotto
  test("모든 로또에 대한 연산 진행", () => {
    const result = new Result([[7, 13, 19, 22, 31, 45]], [1, 2, 3, 4, 5, 6], 7);

    result.calculateOneLotto = jest.fn();
    result.getPrize = jest.fn();

    result.calculateEachLotto();

    expect(result.calculateOneLotto).toHaveBeenCalled();
    expect(result.getPrize).toHaveBeenCalled();
  });

  // calculateOneLotto
  test("하나의 로또에 대한 점수 산정", () => {
    const result = new Result([[1, 2, 3, 22, 31, 45]], [1, 2, 3, 4, 5, 6], 45);

    result.calculateOneLotto(result.bundleOfLotto[0]);

    expect(result.score).toBe(3);
    expect(result.matchBonus).toBe(true);
    expect(result.rank).toStrictEqual([1, 0, 0, 0, 0]);
  });

  // calculateScore
  test("로또와 당첨 번호가 하나 일치하면 점수가 1 오른다.", () => {
    const result = new Result([[1, 9, 12, 22, 31, 45]], [1, 2, 3, 4, 5, 6], 7);

    result.score = 0;
    result.calculateScore(1);

    expect(result.score).toBe(1);
  });

  // checkBonusNumber
  test("보너스 번호 당첨 여부는 참, 거짓으로 판단한다.", () => {
    const result = new Result([[1, 7, 12, 22, 31, 45]], [1, 2, 3, 4, 5, 6], 7);

    result.checkBonusNumber(7);

    expect(result.matchBonus).toBe(true);
  });

  // getRanking
  test("맞춘 숫자 개수에 따라 등수 산정", () => {
    const result = new Result([[7, 13, 19, 22, 31, 45]], [1, 2, 3, 4, 5, 6], 7);

    result.getFifthRank = jest.fn();
    result.getFourthRank = jest.fn();
    result.getThirdRank = jest.fn();
    result.getSecondRank = jest.fn();
    result.getFirstRank = jest.fn();

    result.getRanking();

    expect(result.getFifthRank).toHaveBeenCalled();
    expect(result.getFourthRank).toHaveBeenCalled();
    expect(result.getThirdRank).toHaveBeenCalled();
    expect(result.getSecondRank).toHaveBeenCalled();
    expect(result.getFirstRank).toHaveBeenCalled();
  });

  // getFifthRank
  test("3개를 맞췄을 경우 테스트", () => {
    const result = new Result(
      [[7, 13, 19, 22, 31, 45]],
      [7, 13, 19, 21, 5, 6],
      1
    );

    result.score = 3;
    result.getFifthRank();

    expect(result.rank).toStrictEqual([1, 0, 0, 0, 0]);
  });

  // getFourthRank
  test("4개를 맞췄을 경우 테스트", () => {
    const result = new Result(
      [[7, 13, 19, 22, 31, 45]],
      [7, 13, 19, 22, 5, 6],
      1
    );

    result.score = 4;
    result.getFourthRank();

    expect(result.rank).toStrictEqual([0, 1, 0, 0, 0]);
  });

  // getThirdRank
  test("5개를 맞췄을 경우 테스트", () => {
    const result = new Result(
      [[7, 13, 19, 22, 31, 45]],
      [7, 13, 19, 22, 31, 6],
      1
    );

    result.score = 5;
    result.matchBonus = false;
    result.getThirdRank();

    expect(result.rank).toStrictEqual([0, 0, 1, 0, 0]);
  });

  // getSecondRank
  test("5개와 보너스 번호를 맞췄을 경우 테스트", () => {
    const result = new Result(
      [[7, 13, 19, 22, 31, 45]],
      [7, 13, 19, 22, 31, 6],
      45
    );

    result.score = 5;
    result.matchBonus = true;
    result.getSecondRank();

    expect(result.rank).toStrictEqual([0, 0, 0, 1, 0]);
  });

  // getFirstRank
  test("6개를 맞췄을 경우 테스트", () => {
    const result = new Result(
      [[7, 13, 19, 22, 31, 45]],
      [7, 13, 19, 22, 31, 45],
      1
    );

    result.score = 6;
    result.getFirstRank();

    expect(result.rank).toStrictEqual([0, 0, 0, 0, 1]);
  });

  // getPrize
  test("총 상금 산출", () => {
    const result = new Result([[1, 2, 3, 4, 5, 7]], [1, 2, 3, 4, 5, 6], 7);

    result.rank = [0, 0, 0, 1, 0];

    const finalPrize = result.getPrize();

    expect(finalPrize).toBe(30000000);
  });

  // getEarningsRate
  test("수익률 산출", () => {
    const lottoArray = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ];

    const result = new Result(lottoArray, [1, 2, 3, 4, 5, 6], 7);

    result.rank = [1, 0, 0, 0, 0];
    result.getEarningsRate();

    expect(result.earningsRate).toBe("62.5");
  });

  // checkEarningsRateOverThousand
  test("수익률이 1000 이상인지 판별한다.", () => {
    const result = new Result([[1, 2, 3, 4, 5, 7]], [1, 2, 3, 4, 5, 6], 7);

    result.getEarningsRateMarkedByComma = jest.fn();

    result.earningsRate = "1000.0";
    result.checkEarningsRateOverThousand();

    expect(result.getEarningsRateMarkedByComma).toHaveBeenCalled();
  });

  // getEarningsRateMarkedByComma
  test("수익률이 1000 이상이면 수치에 쉼표를 삽입한다.", () => {
    const result = new Result([[1, 2, 3, 4, 5, 7]], [1, 2, 3, 4, 5, 6], 7);

    result.earningsRate = "1000000.0";
    result.getEarningsRateMarkedByComma();

    expect(result.earningsRate).toBe("1,000,000.0");
  });
});
