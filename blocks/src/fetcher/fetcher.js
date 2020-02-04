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
		isVisible: {
			type: "boolean",
			default: false
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
		thBorderStyle: {
			type: "string",
			default: "solid"
		},
		thBorderColor: {
			type: "string",
			default: "#ccc"
		},
		thBorderWidth: {
			type: "number",
			default: 1
		},
		thBorderUnit: {
			type: "string",
			default: "px"
		},
		thBorderLayout: {
			type: "string",
			default: "full"
		}
	},
	edit,
	save() {
		return null;
	}
});
