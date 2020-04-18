let props = "";
export const drawCharts = (props) => {
	let url =
		"/wp-json/api-charts/v1/data-table/" +
		sanitizeSheetId(props.sheetId) +
		"/" +
		encodeURI(props.sheetName) +
		"/" +
		encodeURI(props.sheetRange);
	fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (jsonData) {
			google.charts.load("current", { packages: ["corechart"] });
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {
				let rawData = formatAPIReturnValue(jsonData);
				rawData = addBaseXAxis(rawData);
				rawData = switchRowColumn(rawData);
				let data = google.visualization.arrayToDataTable(rawData);
				let view = new google.visualization.DataView(data);

				const columnNum = defineColumnLength(rawData[0].length);
				view.setColumns(columnNum);

				let options = {
					width: 600,
					height: 400,
					bar: { groupWidth: "75%" },
					isStacked: true,
					// hAxis: { ticks: [50, 3, 1, 13, 3, 1, 13, 3, 1, 13, 3] },
					//y軸ラベルを消す
					// vAxis: {
					// 	textPosition: "none",
					// },
					//x軸ラベルを消す
					// hAxis: {
					// 	textPosition: "none",
					// },
					// //データ色名を消す
					// legend: {
					// 	position: "none",
					// },
				};

				let chart = new google.visualization.ColumnChart(
					document.getElementById("chart_div")
				);
				chart.draw(view, options);
			}
		});

	function sanitizeSheetId(sheetUrl) {
		const regex = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
		let sheetId = sheetUrl.match(regex);
		if (sheetId !== null) {
			sheetId = sheetId[0].replace(/\/spreadsheets\/d\//, "");
		}
		return sheetId;
	}
};

export const formatAPIReturnValue = (jsonData) => {
	let result = jsonData.map((data) => {
		return data.map((item) => {
			if (Number(item)) {
				return Number(item);
			} else {
				return item;
			}
		});
	});
	return result;
};

export const defineColumnLength = (length) => {
	return [...Array(length).keys()];
};

export const switchRowColumn = (a) => a[0].map((_, c) => a.map((r) => r[c]));

export const addBaseXAxis = (table) => {
	return table.map((row) => {
		row.unshift("");
		return row;
	});
};

if (props) {
	drawCharts(props);
}
