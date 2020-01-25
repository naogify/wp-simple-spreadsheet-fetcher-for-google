const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl, PanelBody, ServerSideRender } = wp.components;
const { Fragment } = wp.element;
const { RichText, InspectorControls } =
	wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;
import withTabbedInspector from "../../../higher-order/with-tabbed-inspector";
import { compose } from "@wordpress/compose";
import { addFilter, applyFilters } from "@wordpress/hooks";

const renderSettings = props => {
	const { attributes, setAttributes } = props;
	const { range, sheetId, sheetName, sheetRange } = attributes;

	let settings;
	if (!range) {
		settings = (
			<Fragment>
				<TextControl
					label={__(
						"Sheet URL",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					value={sheetId}
					onChange={newUrl =>
						setAttributes({
							sheetId: newUrl === undefined ? "none" : newUrl
						})
					}
					initialOpen={true}
				/>
				<TextControl
					label={__(
						"Sheet Name",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					value={sheetName}
					onChange={newName =>
						setAttributes({
							sheetName: newName === undefined ? "none" : newName
						})
					}
					initialOpen={true}
				/>
				<TextControl
					label={__(
						"Cell or Range",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					value={sheetRange}
					onChange={newRange =>
						setAttributes({
							sheetRange:
								newRange === undefined ? "none" : newRange
						})
					}
					initialOpen={true}
				/>
			</Fragment>
		);
	} else {
		settings = (
			<TextControl
				label={__(
					"Please set the cell or range to fetch data in A1 notation. Example : Sheets1!A1:E",
					"wp-simple-spreadsheet-fetcher-for-google"
				)}
				value={range}
				onChange={newRange =>
					setAttributes({
						range: newRange === undefined ? "none" : newRange
					})
				}
				initialOpen={true}
			/>
		);
	}

	return (
		<PanelBody
			title={__(
				"Fetch Data Setting",
				"wp-simple-spreadsheet-fetcher-for-google"
			)}
			initialOpen={true}
		>
			{settings}
		</PanelBody>
	);
};

addFilter(
	"wp-simple-spreadsheet-fetcher-for-google.fetcher.edit.inspector.layout.before",
	"wp2s2fg/fetcher",
	(output, props) => {
		const { setAttributes } = props;
		const { design = "basic" } = props.attributes;

		return renderSettings(props);
	}
);

const edit = props => {
	const { attributes } = props;
	return (
		<Fragment>
			<ServerSideRender block="wp2s2fg/fetcher" attributes={attributes} />
		</Fragment>
	);
};

export default compose(withTabbedInspector())(edit);
