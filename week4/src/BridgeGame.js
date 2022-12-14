// InputView와 OutputView는 사용할 수 없다
// 필드(인스턴스 변수)를 추가 가능
// 파일 경로 변경 가능
// 인자 추가 및 변경 가능
// 메서드 추가 가능
// 메서드 이름 변경 불가능
const { COMMAND } = require('./constant/Constants');
const Player = require('./Player');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
	/**
	 * 사용자가 칸을 이동할 때 사용하는 메서드
	 * <p>
	 * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	move(canWalkBridge, moving) {
		Player.updateMovingArray(moving);
		const movingArray = Player.getMovingArray();
		const currentIndex = movingArray.length - 1;

		if (movingArray[currentIndex] === canWalkBridge[currentIndex]) {
			return true;
		}

		return false;
	}

	/**
	 * 사용자가 게임을 다시 시도할 때 사용하는 메서드
	 * <p>
	 * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
	 */
	retry(command) {
		if (command === COMMAND.RETRY_STRING) {
			return true;
		}

		return false;
	}
}

module.exports = BridgeGame;
