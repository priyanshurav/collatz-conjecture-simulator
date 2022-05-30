import { Line } from 'react-chartjs-2';
import { sample } from 'lodash';
import { OFFSET, COLORS } from './constants';
import './Chart.css';

interface Props {
	numbers: number[];
}

function Chart({ numbers }: Props) {
	return (
		<section className="chart">
			<Line
				options={{ maintainAspectRatio: false }}
				style={{ height: '100%' }}
				data={{
					labels: new Array(numbers.length + OFFSET)
						.fill(null)
						.map((_v, i) => i + 1),

					datasets: [
						{
							label: numbers[0]?.toString() ? `#${numbers[0]?.toString()}` : '',
							data: numbers,
							// Sets a random color as the border color
							borderColor: sample(COLORS),
						},
					],
				}}
			/>
		</section>
	);
}

export default Chart;
