// const AppConst = {
//   ASK_AMOUNTS_MESSAGE: "구입금액을 입력해 주세요.\n",
//   ASK_WINNING_NUMBER_MESSAGE: "\n당첨 번호를 입력해 주세요.\n",
//   ASK_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
//   ERROR_DONT_START_ZERO: "[ERROR] 0으로 시작하는 숫자는 입력할 수 없습니다.",
//   ERROR_NOT_THOUSAND_UNIT: "[ERROR] 1,000원 단위로만 구매 가능합니다.",
//   ERROR_NOT_ONLY_NUMBER: "[ERROR] 숫자만 입력 가능합니다.",
//   ERROR_NOT_NUMBER_AND_COMMA: "[ERROR] 숫자와 ,(쉼표) 기호만을 입력해주세요.",
// };

// module.exports = AppConst;

const CONDITION_OF_FIFTH_RANK = "3개 일치 (5,000원) - ";
const CONDITION_OF_FOURTH_RANK = "4개 일치 (50,000원) - ";
const CONDITION_OF_THIRD_RANK = "5개 일치 (1,500,000원) - ";
const CONDITION_OF_SECOND_RANK = "5개 일치, 보너스 볼 일치 (30,000,000원) - ";
const CONDITION_OF_FIRST_RANK = "6개 일치 (2,000,000,000원) - ";

const appConst = {
  ASK_AMOUNTS_MESSAGE: "구입금액을 입력해 주세요.\n",
  ASK_WINNING_NUMBER_MESSAGE: "\n당첨 번호를 입력해 주세요.\n",
  ASK_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",
  NOTIFY_PURCHASE_NUMBER: "개를 구매했습니다.",
  NOTIFY_WINNING_STATE: "\n당첨 통계\n---",
  CONDITION_OF_EACH_RANK: [
    CONDITION_OF_FIFTH_RANK,
    CONDITION_OF_FOURTH_RANK,
    CONDITION_OF_THIRD_RANK,
    CONDITION_OF_SECOND_RANK,
    CONDITION_OF_FIRST_RANK,
  ],
};

module.exports = appConst;
