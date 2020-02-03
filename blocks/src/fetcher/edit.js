const { __ } = wp.i18n;
const { TextControl, PanelBody, ServerSideRender, BaseControl } = wp.components;
const { Fragment } = wp.element;
const { RichText, InspectorControls } =
	wp.blockEditor && wp.blockEditor.BlockEdit ? wp.blockEditor : wp.editor;
import { compose, withState, setState } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import withTabbedInspector from "../../../higher-order/with-tabbed-inspector";
import { TableWidthFixControl } from "../../../components/table-width-fix-control";
import { TypographyControl } from "../../../components/typography-control";
import { AdvancedColorPalleteControl } from "../../../components/advanced-color-pallete-control";
import { AdvancedAlignControl } from "../../../components/advanced-align-control";
import { renderSettings } from "../../../components/fetcher-control";
import { BorderControl } from "../../../components/border-control";

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
				>
					<TypographyControl {...props} />
					<BaseControl
						label={__(
							"Background Color",
							"wp-simple-spreadsheet-fetcher-for-google"
						)}
					>
						<AdvancedColorPalleteControl
							schemaName={"thBgColor"}
							{...props}
						/>
					</BaseControl>
					<BaseControl>
						<BorderControl {...props} />
					</BaseControl>
					<BaseControl
						label={__(
							"Align",
							"wp-simple-spreadsheet-fetcher-for-google"
						)}
					>
						<AdvancedAlignControl
							schemaName={"thAlign"}
							initial={props.attributes.thAlign}
							{...props}
						/>
					</BaseControl>
				</PanelBody>
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
