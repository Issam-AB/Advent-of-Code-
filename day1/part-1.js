const fs = require("fs").promises;

const paresLine = async () => {
	const data = await fs.readFile("./input", { encoding: "utf8" });
	return data.toString().split("\n");
};

const getTotalCalories = async () => {
	const input = await paresLine();
	let totalCalories = [];
	let currentSum = 0;
	input.forEach((item) => {
		if (item === "\r") {
			totalCalories.push(currentSum);
			currentSum = 0;
		} else {
			currentSum += Number(item);
		}
	});
	totalCalories.push(currentSum);
	return totalCalories;
};

const solvePartOne = async () => {
	const totals = await getTotalCalories();
	return Math.max(...totals);
};
solvePartOne().then(console.log);

/* -------------------------------- solution part01 -------------------------------- */
// puzzle answer is  74198

async function solvePartTwo() {
	const totals = await getTotalCalories();
	totals.sort((a, b) => b - a);
	return totals[0] + totals[1] + totals[2];
}
solvePartTwo().then(console.log);

/* -------------------------------- solution part02 -------------------------------- */
// puzzle answer is ❓ 209914
