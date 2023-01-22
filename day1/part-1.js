const fs = require("fs").promises;

const paresLine = async () => {
	const data = await fs.readFile("./input", { encoding: "utf8" });
	return data.toString().split("\n");
};

const solve = async () => {
	const input = await paresLine();
	let totals = [];
	let currentSum = 0;
	input.forEach((item) => {
		if (item === "\r") {
			totals.push(currentSum);
			currentSum = 0;
		} else {
			currentSum += Number(item);
		}
	});
	totals.push(currentSum);
	return Math.max(...totals);
};
solve().then(console.log);
