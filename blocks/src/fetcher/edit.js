const { __ } = wp.i18n;
const { TextControl, PanelBody, ServerSideRender } = wp.components;
const { Fragment } = wp.element;
const { RichText, InspectorControls } =
	wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;
import { compose, withState, setState } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import withTabbedInspector from "../../../higher-order/with-tabbed-inspector";
import { TableWidthFixControl } from "../../../components/table-width-fix-control";

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
	//NOTE:emptyはフックの引数の仕様上、第一引数を設定する必要がある。なので仮として渡している。
	(empty, props) => {
		return renderSettings(props);
	}
);

addFilter(
	"wp-simple-spreadsheet-fetcher-for-google.fetcher.edit.inspector.style.before",
	"wp2s2fg/fetcher",
	(empty, props) => {
		return (
			<Fragment>
				<PanelBody
					title={__(
						"General",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
				>
					<div>
						{__(
							"Fixed Table Width",
							"wp-simple-spreadsheet-fetcher-for-google"
						)}
					</div>
					<TableWidthFixControl {...props} />
				</PanelBody>
				<PanelBody
					title={__(
						"Table Header",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
				></PanelBody>
				<PanelBody
					title={__(
						"Table Body",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
				></PanelBody>
				<PanelBody
					title={__(
						"Table Footer",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
				></PanelBody>
			</Fragment>
		);
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
