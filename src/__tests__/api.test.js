/**
 * Internal dependencies
 */
import {
	formatAPIReturnValue,
	defineColumnLength,
	addBaseXAxis,
	arrayItemsIsString,
} from "../blocks/fetcher-chart/drawCharts";

describe("Test api", () => {
	test("should convert string to number", () => {
		const dataFromAPI = [["1月", "50"]];
		const formattedData = formatAPIReturnValue(dataFromAPI);
		expect(typeof formattedData[0][0]).toBe("string");
		expect(typeof formattedData[0][1]).toBe("number");
	});

	test("should create sequence number array", () => {
		const length = 3;
		const sequenceNumberArray = defineColumnLength(length);
		expect(sequenceNumberArray).toEqual([0, 1, 2]);
	});

	test("add '' to array.", () => {
		const table = [
			[0, 1, 2],
			[0, 1, 2],
		];
		expect(addBaseXAxis(table)).toEqual([
			["", 0, 1, 2],
			["", 0, 1, 2],
		]);
	});

	test("all items are string", () => {
		const table = ["a", "b", "c"];
		expect(arrayItemsIsString(table)).toBe(true);
	});

	test("all items are not string", () => {
		const table = [1, "b", "c"];
		expect(arrayItemsIsString(table)).toBe(false);
	});

	test("all items are not string", () => {
		const table = [1, 2, 3];
		expect(arrayItemsIsString(table)).toBe(false);
	});
});
