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
		hasFixedBackground: {
			type: "boolean",
			default: false
		},
		fontSize: {
			type: "number",
			default: 5
		},
		fontUnit: {
			type: "string",
			default: "px"
		},
		lineHeight: {
			type: "number",
			default: 1
		},
		letterSpace: {
			type: "number",
			default: 1
		},
		isVisible: {
			type: "boolean",
			default: false
		},
		fontWeight: {
			type: "string",
			default: "normal"
		},
		bgColor: {
			type: "string"
		},
		align: {
			type: "string",
			default: "left"
		},
		borderStyle: {
			type: "string",
			default: "solid"
		},
		borderColor: {
			type: "string"
		},
		borderWidth: {
			type: "number",
			default: 1
		},
		borderUnit: {
			type: "string",
			default: "px"
		},
		borderPosition: {
			type: "string",
			default: "full"
		}
	},
	edit,
	save() {
		return null;
	}
});
