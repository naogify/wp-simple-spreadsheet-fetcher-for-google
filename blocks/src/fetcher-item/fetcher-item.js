import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import {
	TextControl,
	PanelBody,
	ServerSideRender,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";

registerBlockType("wp2s2fg/fetcher-item", {
	title: __("Fetcher Item", "wp-simple-spreadsheet-fetcher-for-google"),
	parent: [["wp2s2fg/fetcher"], ["wp2s2fg/fetcher-advanced"]],
	icon: "smiley",
	category: "wp2s2fg-blocks-cat",
	supports: {
		className: true,
		html: false,
		inserter: false,
	},
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
		//This attributes is deprecated since v0.2.8.
		range: {
			type: "string",
			default: "",
		},
	},

	edit(props) {
		const { attributes, setAttributes } = props;
		const { range, sheetId, sheetName, sheetRange } = attributes;

		const renderSettings = () => {
			if (!range) {
				return (
					<Fragment>
						<TextControl
							label={__(
								"Sheet URL",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
							value={sheetId}
							onChange={(newUrl) =>
								setAttributes({
									sheetId:
										newUrl === undefined ? "none" : newUrl,
								})
							}
						/>
						<TextControl
							label={__(
								"Sheet Name",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
							value={sheetName}
							onChange={(newName) =>
								setAttributes({
									sheetName:
										newName === undefined
											? "none"
											: newName,
								})
							}
						/>
						<TextControl
							label={__(
								"Cell",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
							value={sheetRange}
							onChange={(newRange) =>
								setAttributes({
									sheetRange:
										newRange === undefined
											? "none"
											: newRange,
								})
							}
						/>
					</Fragment>
				);
			}
			return (
				<TextControl
					label={__(
						"Please set the cell to fetch data in A1 notation. Example : Sheets1!A1",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					value={range}
					onChange={(newRange) =>
						setAttributes({
							range: newRange === undefined ? "none" : newRange,
						})
					}
				/>
			);
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody
						title={__(
							"Fetch Data Setting",
							"wp-simple-spreadsheet-fetcher-for-google"
						)}
						initialOpen={true}
					>
						{renderSettings()}
					</PanelBody>
				</InspectorControls>
				<ServerSideRender
					block="wp2s2fg/fetcher-item"
					attributes={attributes}
				/>
			</Fragment>
		);
	},
	save() {
		return null;
	},
});
