const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, PanelBody, ServerSideRender } = wp.components;
const { Fragment } = wp.element;
const { RichText, InspectorControls } =
	wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;
import edit from "./edit";

registerBlockType("wp2s2fg/fetcher", {
	title: __("Fetcher", "wp-simple-spreadsheet-fetcher-for-google"),
	icon: "smiley",
	category: "wp2s2fg-blocks-cat",
	supports: {
		className: true,
		html: false
	},
	// styles: [
	// 	{
	// 		name: "wp2s2fg-fetcher-default",
	// 		label: __("Default", "wp-simple-spreadsheet-fetcher-for-google"),
	// 		isDefault: true
	// 	},
	// 	{
	// 		name: "wp2s2fg-fetcher-line",
	// 		label: __("Line", "wp-simple-spreadsheet-fetcher-for-google")
	// 	},
	// 	{
	// 		name: "wp2s2fg-fetcher-none",
	// 		label: __("None", "wp-simple-spreadsheet-fetcher-for-google")
	// 	}
	// ],
	attributes: {
		className: {
			type: "string",
			default: ""
		},
		sheetId: {
			type: "string",
			default: ""
		},
		sheetName: {
			type: "string",
			default: ""
		},
		sheetRange: {
			type: "string",
			default: ""
		},
		//This attributes is deprecated since v0.2.8.
		range: {
			type: "string",
			default: ""
		},
		hasFixedTable: {
			type: "boolean",
			default: false
		},
		thFontSize: {
			type: "number",
			default: 16
		},
		thFontUnit: {
			type: "string",
			default: "px"
		},
		thLineHeight: {
			type: "number",
			default: 1
		},
		thLetterSpace: {
			type: "number",
			default: 1
		},
		thLetterSpaceUnit: {
			type: "string",
			default: "px"
		},
		thFontWeight: {
			type: "string",
			default: "normal"
		},
		thFontColor: {
			type: "string",
			default: "inherit"
		},
		thBgColor: {
			type: "string",
			default: "#fff"
		},
		thAlign: {
			type: "string",
			default: "left"
		},
		tbFontSize: {
			type: "number",
			default: 16
		},
		tbFontUnit: {
			type: "string",
			default: "px"
		},
		tbLineHeight: {
			type: "number",
			default: 1
		},
		tbLetterSpace: {
			type: "number",
			default: 1
		},
		tbLetterSpaceUnit: {
			type: "string",
			default: "px"
		},
		tbFontWeight: {
			type: "string",
			default: "normal"
		},
		tbFontColor: {
			type: "string",
			default: "inherit"
		},
		tbBgColor: {
			type: "string",
			default: "#fff"
		},
		tbAlign: {
			type: "string",
			default: "left"
		},
		borderStyle: {
			type: "string",
			default: "solid"
		},
		borderColor: {
			type: "string",
			default: "#ccc"
		},
		borderWidth: {
			type: "number",
			default: 1
		},
		borderUnit: {
			type: "string",
			default: "px"
		},
		borderLayout: {
			type: "string",
			default: "table-full"
		}
	},
	edit,
	save() {
		return null;
	}
});
