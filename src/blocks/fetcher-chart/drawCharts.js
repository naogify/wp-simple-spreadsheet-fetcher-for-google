let props = "";
export const drawCharts = (props) => {

	let url =
		"/wp-json/api-charts/v1/data-table/" +
		sanitizeSheetId(props.sheetId) +
		"/" +
		(encodeURI(props.sheetName) || null) +
		"/" +
		(encodeURI(props.sheetRange) || null) +
		"/" +
		encodeURI(props.chartWidth) +
		"/" +
		encodeURI(props.chartHeight);

	fetch(url)
		.then(function (response) {
			return response.json();
		})
		.then(function (jsonData) {
			google.charts.load("current", { packages: ["corechart"] });
			google.charts.setOnLoadCallback(drawChart);

			function drawChart() {
				if (jsonData.data && jsonData.data.status == 404) {
					document.getElementById("chart_div").textContent =
						jsonData.data.message;
					return;
				}

				let rawData = formatAPIReturnValue(jsonData.chartData);

				//Switch Rows / Columns
				if (props.switchRowColumn) {
					rawData = switchRowColumn(rawData);
				}

				//If label(first row) is not string, add base row.
				if (!arrayItemsIsString(rawData[0])) {
					rawData = addBaseXAxis(rawData);
				}

				let data = google.visualization.arrayToDataTable(rawData);
				let view = new google.visualization.DataView(data);

				//Set Colum length
				const columnNum = defineColumnLength(rawData[0].length);
				view.setColumns(columnNum);

				console.log(props);
				//Set the property
				let options = {
					width: setValidValue("chartWidth", 600, props),
					height: setValidValue("chartHeight", 400, props),
					bar: {
						groupWidth: "75%",
					},
					isStacked: true,
				};

				//Hide x-axis label
				if (props.hideXAxisLabel) {
					options = addItemToObject(options, {
						hAxis: {
							textPosition: "none",
						},
					});
					//Hide y-axis label
				}
				if (props.hideYAxisLabel) {
					options = addItemToObject(options, {
						legend: {
							position: "none",
						},
					});
				}

				let chart = new google.visualization.ColumnChart(
					document.getElementById("chart_div")
				);
				chart.draw(view, options);
			}
		});
};

export const sanitizeSheetId = (sheetUrl) => {
	const regex = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
	let sheetId = sheetUrl.match(regex);
	if (sheetId !== null) {
		sheetId = sheetId[0].replace(/\/spreadsheets\/d\//, "");
	}
	return sheetId;
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

export const addItemToObject = (original, addItem = { someting: true }) => {
	return {
		...original,
		...addItem,
	};
};

export const arrayItemsIsString = (row) => {
	return row.find((item) => typeof item !== "string") === undefined;
};

export const setValidValue = (schema, defaultValue, props) => {
	if (props.hasOwnProperty('attributes') && props.attributes[schema]) {
		console.log("------1--------");
		console.log(props.attributes[schema]);
		return props.attributes[schema];
	} else if (props[schema]) {
		console.log("------2--------");
		console.log(props[schema]);
		return props[schema];
	} else {
		console.log("------3--------");
		console.log(props);
		console.log(props[schema]);
		console.log(defaultValue);
		return defaultValue;
	}
}

if (props) {
	drawCharts(props);
}
