import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import { __ } from "@wordpress/i18n";

registerBlockType("wp2s2fg/fetcher-chart", {
	title: __("Chart","wp-simple-spreadsheet-fetcher-for-google"),
	icon: "smiley",
	category: "wp2s2fg-blocks-cat",
	attributes: {
		className: {
			type: "string",
			default: "",
		},
		sheetId: {
			type: "string",
			default: "",
		},
		sheetName: {
			type: "string",
			default: "",
		},
		sheetRange: {
			type: "string",
			default: "",
		},
		switchRowColumn: {
			type: "boolean",
			default: false,
		},
		hideXAxisLabel: {
			type: "boolean",
			default: false,
		},
		hideYAxisLabel: {
			type: "boolean",
			default: false,
		},
		chartType: {
			type: "string",
			default: "column",
		},
		chartOptions: {
			type: "string",
			default: "{}",
		},
		chartWidth: {
			type: "number",
			default: null,
		},
		chartHeight: {
			type: "number",
			default: null,
		}
	},
	edit,
});
