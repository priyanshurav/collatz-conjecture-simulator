import { useEffect, useState } from 'react';
import './App.css';
import Chart from './Chart';
import Input from './Input';

function collatzConjecture(num: number): number[] {
	const numbers: number[] = [num];
	let lastNum = num;

	while (lastNum !== 1) {
		if (lastNum % 2 === 0) {
			lastNum = lastNum / 2;
		} else {
			lastNum = 3 * lastNum + 1;
		}
		numbers.push(lastNum);
	}

	return numbers;
}

function App() {
	const [inputNumber, setInputNumber] = useState(0);
	const [numbers, setNumbers] = useState<number[]>([]);

	useEffect(() => {
		if (inputNumber !== 0 && inputNumber !== 1)
			setNumbers(collatzConjecture(inputNumber));
	}, [inputNumber]);

	return (
		<main className="main">
			<Input setInputNumber={setInputNumber} />
			<Chart numbers={numbers} />
		</main>
	);
}

export default App;
