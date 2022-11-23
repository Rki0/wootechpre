// const LottoConst = require("./constant/LottoConst");

// class Lotto {
//   #numbers;

//   constructor(numbers) {
//     // #numbers를 여기로 올려서 최대한 #numbers를 사용하는 방향으로 해도 될듯?
//     // #numbers = numbers
//     // 아래부터는 함수에 인자 안 넣고, #numbers 사용하면 됨
//     this.checkLottoLength(numbers);
//     this.checkNumberRanges(numbers);
//     this.checkNoSameNumber(numbers);
//     this.#numbers = numbers;
//   }

//   checkLottoLength(numbers) {
//     if (numbers.length !== 6) {
//       throw new Error(LottoConst.ERROR_NOT_LENGTH_SIX);
//     }
//   }

//   checkNumberRanges(numbers) {
//     numbers.forEach((item) => {
//       if (item < 1 || item > 45) {
//         throw new Error(LottoConst.ERROR_OUT_OF_RANGE);
//       }
//     });
//   }

//   checkNoSameNumber(numbers) {
//     const arrayRemovedDuplicate = new Set(numbers);

//     if (arrayRemovedDuplicate.size !== 6) {
//       throw new Error(LottoConst.ERROR_SAME_NUMBER_EXIST);
//     }
//   }
// }

// module.exports = Lotto;

const lottoConst = require("./constant/LottoConst");

class Lotto {
  #numbers;

  constructor(numbers) {
    // #numbers를 여기로 올려서 최대한 #numbers를 사용하는 방향으로 해도 될듯?
    // #numbers = numbers
    // 아래부터는 함수에 인자 안 넣고, #numbers 사용하면 됨
    this.checkLottoLength(numbers);
    this.checkNumberRanges(numbers);
    this.checkNoSameNumber(numbers);
    this.#numbers = numbers;
  }

  checkLottoLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error(lottoConst.ERROR_NOT_LENGTH_SIX);
    }
  }

  checkNumberRanges(numbers) {
    numbers.forEach((item) => {
      if (item < 1 || item > 45) {
        throw new Error(lottoConst.ERROR_OUT_OF_RANGE);
      }
    });
  }

  checkNoSameNumber(numbers) {
    const arrayRemovedDuplicate = new Set(numbers);

    if (arrayRemovedDuplicate.size !== 6) {
      throw new Error(lottoConst.ERROR_SAME_NUMBER_EXIST);
    }
  }

  // 얘네가 사실 Lotto의 역할이잖아요? 왜냐? 유저가 입력하는 당첨 번호에 대한 처리기 때문이죠
  // 그런데 Lotto에는 숫자를 원소로 하는 배열이 들어가야해요. 그래서 string을 반환하는 readLine에서 처리를 거쳐서 Lotto에 넘겨줘야하거든요?
  // 그렇기 때문에, 썡으로 넘겨주는건 안되고, UI를 분리하든 뭘하든 처리를 무조건 해줘야해요
  // 그렇다면...아래 코드들은 #numbers랑 관련이 없죠? 애초에 Lotto 인스턴스 생성 전에 처리하는 로직들이니까
  // 그런데 묶이는건 Lotto 쪽에 가깝죠?
  // 그러면 Lotto에 static으로 넣어버리면 되잖아요
  // 어차피 여기서 require 통해서 Lotto를 불러오기 때문에, 인스턴스 생성없이 사용할 수 있는 static은 괜찮다고!
  // 심지어 아래 코드들은 this를 사용하지도 않아. 진짜 그냥 static으로 쓰기 최적화되어잇음
  // 단,옮기게 되면 consts 폴더를 조금은 수정해야겠지? 테스트도 조금 수정해야하고
  static getArrayedUserInput(userInput) {
    const arrayedUserInput = userInput.split("");

    return arrayedUserInput;
  }

  static checkUesrInputHaveOnlyNumberAndComma(arrayedUserInput) {
    arrayedUserInput.forEach((item) => {
      const ASCII = item.charCodeAt();

      if ((ASCII !== 44 && ASCII < 48) || ASCII > 57) {
        throw new Error(lottoConst.ERROR_NOT_NUMBER_AND_COMMA);
      }
    });
  }

  static getSplitedUserInput(userInput) {
    const splitedInput = userInput.split(",");

    return splitedInput;
  }

  static checkWinningNumberStartZero(userInput) {
    userInput.forEach((item) => {
      if (item[0] === "0") {
        throw new Error(lottoConst.ERROR_DONT_START_ZERO);
      }
    });
  }

  static getUserLotto(userInput) {
    const userLotto = userInput.map((item) => Number(item));

    return userLotto;
  }
}

module.exports = Lotto;
