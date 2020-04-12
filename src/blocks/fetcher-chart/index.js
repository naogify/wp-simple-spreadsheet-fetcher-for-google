import { registerBlockType } from "@wordpress/blocks";
import { edit } from "./edit";

registerBlockType("wp2s2fg/fetcher-chart", {
	title: "Chart",
	icon: "smiley",
	category: "layout",
	attributes: {
		className: {
			type: "string",
			default: "",
		},
	},
	edit,
});
