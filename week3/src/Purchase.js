const Random = require("@woowacourse/mission-utils").Random;
const purchaseConst = require("./constant/PurchaseConst");

class Purchase {
  constructor(amount) {
    this.bundleOfLotto = [];

    this.checkAmountStartZero(amount);
    this.checkOnlyNumber(amount);

    const amountTypeofNumber = Number(amount);
    this.checkPurchaseAmount(amountTypeofNumber);
    this.numberOfLotto = amountTypeofNumber / 1000;
    this.createRandomLotto(this.numberOfLotto);
  }

  checkAmountStartZero(amount) {
    if (amount[0] === "0") {
      throw new Error(purchaseConst.ERROR_DONT_START_ZERO);
    }
  }

  checkOnlyNumber(amount) {
    const regex = /^\d+$/;

    if (!regex.test(amount)) {
      throw new Error(purchaseConst.ERROR_NOT_ONLY_NUMBER);
    }
  }

  checkPurchaseAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error(purchaseConst.ERROR_NOT_THOUSAND_UNIT);
    }
  }

  createRandomLotto(amount) {
    while (this.bundleOfLotto.length < amount) {
      const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);

      const sortedLotto = randomLotto.sort((a, b) => a - b);

      this.bundleOfLotto.push(sortedLotto);
    }
  }
}

module.exports = Purchase;
