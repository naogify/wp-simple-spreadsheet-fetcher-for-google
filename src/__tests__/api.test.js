/**
 * Internal dependencies
 */
import {
	formatAPIReturnValue,
	defineColumnLength,
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
});
