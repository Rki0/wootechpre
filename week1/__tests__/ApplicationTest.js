const problem1 = require("../src/problem1");
const problem2 = require("../src/problem2");
const problem3 = require("../src/problem3");
const problem4 = require("../src/problem4");
const problem5 = require("../src/problem5");
const problem6 = require("../src/problem6");
const problem7 = require("../src/problem7");

describe("problem1", () => {
  test("case1", () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });

  test("case2", () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });

  test("case3", () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1);
  });

  // 예외사항 및 테스트 추가
  test("case4", () => {
    expect(problem1([99, 103], [211, 212])).toEqual(-1);
  });

  test("case5", () => {
    expect(problem1([399, 400], [211, 212])).toEqual(-1);
  });

  test("case6", () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test("case7", () => {
    expect(problem1([99, 100], [-1, 0])).toEqual(-1);
  });

  test("case8", () => {
    expect(problem1([1, 2], [211, 212])).toEqual(-1);
  });

  test("case9", () => {
    expect(problem1([99, 100], [399, 400])).toEqual(-1);
  });

  test("case10", () => {
    expect(problem1([121, 122], [211, 212])).toEqual(0);
  });

  test("case11", () => {
    expect(problem1([121, 122, 123], [211, 212])).toEqual(-1);
  });

  test("case12", () => {
    expect(problem1([121, 122], [212])).toEqual(-1);
  });

  test("case13", () => {
    expect(problem1([122, 121], [211, 212])).toEqual(-1);
  });

  test("case14", () => {
    expect(problem1([211, 212], [121, 122, 123])).toEqual(-1);
  });

  test("case15", () => {
    expect(problem1([211], [122, 123])).toEqual(-1);
  });
});

describe("problem2", () => {
  test("case1", () => {
    expect(problem2("browoanoommnaon")).toEqual("brown");
  });
  test("case2", () => {
    expect(problem2("zyelleyz")).toEqual("");
  });

  // 예외사항 및 테스트 추가
  test("case3", () => {
    expect(problem2("zyellleyz")).toEqual("");
  });

  test("case4", () => {
    expect(problem2("zyalllelyz")).toEqual("zyaelyz");
  });

  test("case5", () => {
    expect(problem2("aabba")).toEqual("a");
  });

  test("case6", () => {
    expect(problem2("saddaas")).toEqual("sas");
  });

  test("case7", () => {
    expect(problem2("abacccabba")).toEqual("ab");
  });

  test("case8", () => {
    expect(problem2("abaccckabbb")).toEqual("abaka");
  });

  test("case9", () => {
    expect(problem2("abbbccc")).toEqual("a");
  });

  test("case10", () => {
    expect(problem2("abacㅁㄴㅇㄹㄷba")).toEqual(undefined);
  });

  test("case11", () => {
    expect(problem2("알파벳이 아니지롱")).toEqual(undefined);
  });

  test("case12", () => {
    expect(problem2("AINGEONWND")).toEqual(undefined);
  });

  test("case13", () => {
    expect(problem2("abcdef")).toEqual("abcdef");
  });

  test("case14", () => {
    expect(
      problem2(
        "abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab"
      )
    ).toEqual(undefined);
  });

  test("case15", () => {
    expect(
      problem2(
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
      )
    ).toEqual("");
  });

  test("case16", () => {
    expect(problem2("aazzqweqweaaq")).toEqual("qweqweq");
  });

  test("case17", () => {
    expect(problem2("ksekkset")).toEqual("kseset");
  });
});

describe("problem3", () => {
  test("case1", () => {
    expect(problem3(13)).toEqual(4);
  });
  test("case2", () => {
    expect(problem3(33)).toEqual(14);
  });

  // 커스텀 테스트 케이스
  test("case3", () => {
    expect(problem3(10000)).toEqual(12000);
  });

  test("case4", () => {
    expect(problem3(333)).toEqual(228);
  });

  test("case5", () => {
    expect(problem3(2)).toEqual(0);
  });
});

describe("problem4", () => {
  test("case1", () => {
    expect(problem4("I love you")).toEqual("R olev blf");
  });

  // 커스텀 테스트 케이스
  test("case2", () => {
    expect(problem4("알파벳이 아닌 모든 것!!!?!?%&**1234   ")).toEqual(
      "알파벳이 아닌 모든 것!!!?!?%&**1234   "
    );
  });

  test("case3", () => {
    expect(problem4("ABCDEF")).toEqual("ZYXWVU");
  });

  test("case4", () => {
    expect(problem4("vwxyz")).toEqual("edcba");
  });

  test("case5", () => {
    expect(problem4("Hello  Everyone!")).toEqual("Svool  Veviblmv!");
  });

  test("case6", () => {
    expect(problem4("Svool, Dliow! 123")).toEqual("Hello, World! 123");
  });

  test("case7", () => {
    expect(problem4("abcdefghijklmnopqrstuvwxyz")).toEqual(
      "zyxwvutsrqponmlkjihgfedcba"
    );
  });

  test("case8", () => {
    expect(problem4("abcdefghijklmnopqrstuvwxyz !@#!#  ")).toEqual(
      "zyxwvutsrqponmlkjihgfedcba !@#!#  "
    );
  });
});

describe("problem5", () => {
  test("case1", () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test("case2", () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });
});

describe("problem6", () => {
  test("case1", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ])
    ).toEqual(["jason@email.com", "jm@email.com", "mj@email.com"]);
  });

  // 커스텀 케이스 추가

  test("case2", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["mj@email.com", "엠제이"],
        ["woememem@email.com", "워니엠"],
        ["woniee@email.com", "엠워니"],
        ["nowm@email.com", "이엠제"],
      ])
    ).toEqual([
      "jason@email.com",
      "jm@email.com",
      "mj@email.com",
      "nowm@email.com",
      "woememem@email.com",
      "woniee@email.com",
    ]);
  });

  test("case3", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠호우"],
        ["hohoddi@email.com", "엠호우띠"],
        ["jason@email.com", "메르시야"],
        ["mj@email.com", "메르띠"],
        ["mercy@email.com", "메르시호"],
        ["naldoddi@email.com", "메날르띠"],
        ["howooddi@email.com", "호우르띠시야"],
      ])
    ).toEqual([
      "hohoddi@email.com",
      "howooddi@email.com",
      "jason@email.com",
      "jm@email.com",
      "mercy@email.com",
      "mj@email.com",
      "naldoddi@email.com",
    ]);
  });

  test("case4", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠"],
        ["ja@wrongemail.com", "제이슨"],
        ["wonafeqwerwwefasf@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
      ])
    ).toEqual(undefined);
  });

  test("case5", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠"],
        ["ja@email.com", "제이슨"],
        ["wo@email.com", "워니"],
        ["mj@email.com", "엠니제이"],
        ["nowm@email.com", "제엠니"],
      ])
    ).toEqual([
      "ja@email.com",
      "jm@email.com",
      "mj@email.com",
      "nowm@email.com",
    ]);
  });

  test("case6", () => {
    expect(
      problem6([
        ["onepiece@email.com", "원피스"],
        ["jason@email.com", "제이슨"],
        ["onepisu@email.com", "원피수"],
        ["mj@email.com", "엠제이"],
        ["suonepi@email.com", "수원피"],
      ])
    ).toEqual([
      "jason@email.com",
      "mj@email.com",
      "onepiece@email.com",
      "onepisu@email.com",
      "suonepi@email.com",
    ]);
  });

  test("case7", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이제엠"],
        ["jasp@email.com", "박이김"],
        ["jp@email.com", "김이박"],
        ["qpw@email.com", "김이순"],
        ["teemo@email.com", "티모"],
        ["banana@email.com", "대위티모"],
        ["secondJm@email.com", "제이엠"],
        ["apple@email.com", "땷횱봵"],
        ["stran@email.com", "횱봵으"],
        ["zebra@email.com", "두글자이상의문자가연속적으로이제맞티모"],
      ])
    ).toEqual([
      "apple@email.com",
      "banana@email.com",
      "jason@email.com",
      "jm@email.com",
      "jp@email.com",
      "mj@email.com",
      "nowm@email.com",
      "qpw@email.com",
      "secondJm@email.com",
      "stran@email.com",
      "teemo@email.com",
      "zebra@email.com",
    ]);
  });

  test("case8", () => {
    expect(
      problem6([
        ["jm@email.com", "제이엠제이워니"],
        ["jason@email.com", "제이슨"],
        ["woniee@email.com", "워니"],
        ["mj@email.com", "엠제이"],
        ["nowm@email.com", "이워니"],
      ])
    ).toEqual([
      "jason@email.com",
      "jm@email.com",
      "mj@email.com",
      "nowm@email.com",
      "woniee@email.com",
    ]);
  });

  test("case9", () => {
    expect(
      problem6([
        ["kim@email.com", "김ㅡ이"],
        ["nam@email.com", "ㅡ이야"],
        ["choi@email.com", "최강"],
        ["lee@email.com", "강합니다"],
        ["jun@email.com", "왜ㅇㅡ이야"],
      ])
    ).toEqual(["jun@email.com", "kim@email.com", "nam@email.com"]);
  });
});

describe("problem7", () => {
  test("case1", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "jun", "bedi"]);
  });

  test("case2", () => {
    expect(
      problem7(
        "mrko",
        [
          ["mrko", "jun"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "bedi"]);
  });

  test("case3", () => {
    expect(
      problem7(
        "mrko",
        [
          ["mrko", "jun"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["jun", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["bedi", "bedi", "donut", "bedi", "shakevan"]
      )
    ).toEqual(["andole", "bedi"]);
  });

  test("case4", () => {
    expect(
      problem7(
        "mrko",
        [
          ["mrko", "jun"],
          ["bedi", "jun"],
          ["bedi", "donut"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["jun", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        ["donut", "shakevan"]
      )
    ).toEqual(["andole", "bedi"]);
  });

  test("case5", () => {
    expect(
      problem7(
        "andole",
        [
          ["andole", "jun"],
          ["donut", "jun"],
          ["donut", "shakevan"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "bedi"],
          ["anne", "jun"],
        ],
        ["donut", "mrko", "peter", "sam"]
      )
    ).toEqual(["donut", "anne", "bedi", "mrko", "peter"]);
  });

  test("case6", () => {
    expect(
      problem7(
        "hello",
        [
          ["andole", "jun"],
          ["andole", "bedi"],
          ["jun", "shakevan"],
          ["jun", "kane"],
          ["jun", "sam"],
          ["bedi", "shakevan"],
          ["bedi", "anne"],
          ["bedi", "sam"],
          ["anne", "mrko"],
        ],
        ["donut", "anne", "mrko", "mrko", "sam"]
      )
    ).toEqual(["mrko", "anne", "donut", "sam"]);
  });

  test("case7", () => {
    expect(
      problem7(
        "mrko",
        [
          ["donut", "andole"],
          ["donut", "jun"],
          ["donut", "mrko"],
          ["shakevan", "andole"],
          ["shakevan", "jun"],
          ["shakevan", "mrko"],
        ],
        []
      )
    ).toEqual(["andole", "jun"]);
  });
});
