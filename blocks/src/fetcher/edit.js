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
import { AdvancedButtonGruopControl } from "../../../components/advanced-button-group-control";
import { AdvancedAlignControl } from "../../../components/advanced-align-control";
import { renderSettings } from "../../../components/fetcher-control";
import { BorderControl } from "../../../components/border-control";
import { AdvancedSelectControl } from "../../../components/advanced-select-control";
import { AdvancedRangeControl } from "../../../components/advanced-range-control";
import { borderStyle } from "../../../components/border-style";
import { TableStyleControl } from "../../../components/table-style-control";

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
					initialOpen={true}
				>
					<BaseControl>
						<span className={"components-base-control__label"}>
							{__(
								"Layout",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
						</span>
						<AdvancedButtonGruopControl
							schemaName={"borderLayout"}
							initial={props.attributes.borderLayout}
							data={[
								"table-full",
								"table-horizontal",
								"table-vertical",
								"table-empty"
							]}
							customClassName={
								"wssffg-advanced-button-group_align components-toolbar"
							}
							icon={true}
							{...props}
						/>
					</BaseControl>
					<BorderControl {...props} />
					<BaseControl className={"wssffg-lower-layer1"}>
						<AdvancedSelectControl
							label={__(
								"Style",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
							schemaName={"thBorderStyle"}
							initial={props.attributes.thBorderStyle}
							data={borderStyle}
							{...props}
						/>
						<div className="components-base-control_outer">
							<span className={"components-base-control__label"}>
								{__(
									"Width",
									"wp-simple-spreadsheet-fetcher-for-google"
								)}
							</span>
							<AdvancedButtonGruopControl
								schemaName={"thBorderUnit"}
								initial={props.attributes.thBorderUnit}
								data={["px", "em", "rem"]}
								customClassName={
									"wssffg-advanced-button-group_unit"
								}
								{...props}
							/>
						</div>
						<AdvancedRangeControl
							schemaName={"thBorderWidth"}
							initial={props.attributes.thBorderWidth}
							min={0}
							max={10}
							{...props}
						/>
					</BaseControl>

					<BaseControl>
						<span className={"components-base-control__label"}>
							{__(
								"Fixed Table Width",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
						</span>
						<TableWidthFixControl {...props} />
					</BaseControl>
				</PanelBody>
				<PanelBody
					title={__(
						"Table Header",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					initialOpen={false}
				>
					<TableStyleControl
						fontUnit={"thFontUnit"}
						fontSize={"thFontSize"}
						fontColor={"thFontColor"}
						fontWeight={"thFontWeight"}
						lineHeight={"thLineHeight"}
						letterSpaceUnit={"thLetterSpaceUnit"}
						letterSpace={"thLetterSpace"}
						bgColor={"thBgColor"}
						align={"thAlign"}
						{...props}
					/>
				</PanelBody>
				<PanelBody
					title={__(
						"Table Body",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					initialOpen={false}
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
