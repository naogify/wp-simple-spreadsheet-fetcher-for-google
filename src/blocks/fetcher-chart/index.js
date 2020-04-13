import { registerBlockType } from "@wordpress/blocks";
import { edit } from "./edit";

registerBlockType("wp2s2fg/fetcher-chart", {
	title: "Fetcher Chart",
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
	},
	edit,
});
