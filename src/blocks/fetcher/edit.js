import { __ } from "@wordpress/i18n";
const { PanelBody, BaseControl } = wp.components;
const { Fragment } = wp.element;
import ServerSideRender from "@wordpress/server-side-render";
import { compose } from "@wordpress/compose";
import { addFilter } from "@wordpress/hooks";
import withTabbedInspector from "../../higher-order/with-tabbed-inspector";
import { TableWidthFixControl } from "../../components/table-width-fix-control";
import { AdvancedButtonGruopControl } from "../../components/advanced-button-group-control";
import { RenderSettings } from "../../components/fetcher-control";
import { BorderControl } from "../../components/border-control";
import { AdvancedRangeControl } from "../../components/advanced-range-control";
import { TableStyleControl } from "../../components/table-style-control";

addFilter(
	"wp-simple-spreadsheet-fetcher-for-google.fetcher.edit.inspector.setting.before",
	"wp2s2fg/fetcher",
	(empty, props) => {
		return <RenderSettings {...props} />;
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
							data={[
								"table-full",
								"table-horizontal",
								"table-vertical",
								"table-empty",
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
						{...props}
					/>
					<BaseControl className={"wssffg-lower-layer1"}>
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
							step={0.1}
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

const edit = (props) => {
	const { attributes } = props;
	return (
		<Fragment>
			<ServerSideRender block="wp2s2fg/fetcher" attributes={attributes} />
		</Fragment>
	);
};

export default compose(withTabbedInspector())(edit);
