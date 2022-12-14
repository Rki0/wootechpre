// App의 play가 시작점이다
const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');

class App {
	play() {
		OutputView.printStart();
		InputView.readBridgeSize();
	}
}

const app = new App();
app.play();

module.exports = App;
