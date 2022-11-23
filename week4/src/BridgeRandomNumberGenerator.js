// 랜덤값 추출은 여기 있는 generate를 활용한다
// 이 파일은 변경 불가능

const MissionUtils = require('@woowacourse/mission-utils');

const BridgeRandomNumberGenerator = {
	RANDOM_LOWER_INCLUSIVE: 0,
	RANDOM_UPPER_INCLUSIVE: 1,
	generate() {
		return MissionUtils.Random.pickNumberInRange(
			BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE,
			BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE,
		);
	},
};

module.exports = BridgeRandomNumberGenerator;
