import { useState } from 'react';
import './Input.css';

interface Props {
	setInputNumber: (input: number) => void;
}

function Input({ setInputNumber }: Props) {
	const [inputValue, setInputValue] = useState('');

	const parseAndSetValue = (value: string): void => {
		if (!value) return setInputValue('');
		if (isNaN(value as any)) return;
		if (value.length > 15) return;
		let valueToNumber = parseInt(value);
		if (valueToNumber < 0) valueToNumber = valueToNumber * -1;

		setInputValue(valueToNumber.toString());
	};

	return (
		<form className="input" onSubmit={(e) => e.preventDefault()}>
			<input
				type="text"
				aria-label="value-input"
				value={inputValue}
				onChange={(e) => parseAndSetValue(e.target.value)}
			/>
			<button
				className="generate-btn"
				type="submit"
				onClick={() => setInputNumber(inputValue ? parseInt(inputValue) : 0)}
			>
				Generate
			</button>
		</form>
	);
}

export default Input;
