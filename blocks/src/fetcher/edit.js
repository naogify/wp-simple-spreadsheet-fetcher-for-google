const { __ } = wp.i18n;
const { PanelBody, ServerSideRender, BaseControl } = wp.components;
const { Fragment } = wp.element;
import { compose } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import withTabbedInspector from "../../../higher-order/with-tabbed-inspector";
import { TableWidthFixControl } from "../../../components/table-width-fix-control";
import { AdvancedButtonGruopControl } from "../../../components/advanced-button-group-control";
import { renderSettings } from "../../../components/fetcher-control";
import { BorderControl } from "../../../components/border-control";
import { AdvancedSelectControl } from "../../../components/advanced-select-control";
import { AdvancedRangeControl } from "../../../components/advanced-range-control";
import { borderStyleTemplate } from "../../../components/border-style-template";
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
		const { setAttributes } = props;
		const { isPanelBodyOpen } = props.attributes;
		return (
			<Fragment>
				<PanelBody
					title={__(
						"General",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					initialOpen={true}
					opened={isPanelBodyOpen === "general" ? true : false}
					onToggle={() => {
						setAttributes({ isPanelBodyOpen: "general" });
					}}
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
					<BorderControl
						borderStyle={"borderStyle"}
						borderColor={"borderColor"}
						borderUnit={"borderUnit"}
						borderWidth={"borderWidth"}
						{...props}
					/>
					<BaseControl className={"wssffg-lower-layer1"}>
						<AdvancedSelectControl
							label={__(
								"Style",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
							schemaName={"borderStyle"}
							initial={props.attributes.borderStyle}
							data={borderStyleTemplate}
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
								schemaName={"borderUnit"}
								data={["px", "em", "rem"]}
								customClassName={
									"wssffg-advanced-button-group_unit"
								}
								{...props}
							/>
						</div>
						<AdvancedRangeControl
							schemaName={"borderWidth"}
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
					opened={isPanelBodyOpen === "table-header" ? true : false}
					onToggle={() => {
						setAttributes({ isPanelBodyOpen: "table-header" });
					}}
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
					opened={isPanelBodyOpen === "table-body" ? true : false}
					onToggle={() => {
						setAttributes({ isPanelBodyOpen: "table-body" });
					}}
				>
					<TableStyleControl
						fontUnit={"tbFontUnit"}
						fontSize={"tbFontSize"}
						fontColor={"tbFontColor"}
						fontWeight={"tbFontWeight"}
						lineHeight={"tbLineHeight"}
						letterSpaceUnit={"tbLetterSpaceUnit"}
						letterSpace={"tbLetterSpace"}
						bgColor={"tbBgColor"}
						align={"tbAlign"}
						{...props}
					/>
				</PanelBody>
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
