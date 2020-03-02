const { __ } = wp.i18n;
const { TabPanel, BaseControl } = wp.components;
const { Fragment } = wp.element;
import { applyFilters, addFilter } from "@wordpress/hooks";
import { TypographyControl } from "./typography-control";
import { AdvancedColorPalleteControl } from "./advanced-color-pallete-control";
import { AdvancedButtonGruopControl } from "./advanced-button-group-control";
import { AdvancedAlignControl } from "./advanced-align-control";
import { AdvancedRangeControl } from "./advanced-range-control";

export const TableStyleControl = props => {
	const { fontUnit, fontSize, align, setAttributes } = props;
	const blockName = "fetcher";
	const onSelect = tabName => {
		setAttributes({ tbStyle: tabName });
	};
	return (
		<Fragment>
			<TypographyControl {...props} />
			<BaseControl className={"wssffg-lower-layer1"}>
				<div className="components-base-control_outer">
					<span className={"components-base-control__label"}>
						{__("Size", "wp-simple-spreadsheet-fetcher-for-google")}
					</span>
					<AdvancedButtonGruopControl
						schemaName={fontUnit}
						initial={props.attributes[fontUnit]}
						data={["px", "em", "rem"]}
						customClassName={"wssffg-advanced-button-group_unit"}
						{...props}
					/>
				</div>
				<AdvancedRangeControl
					schemaName={fontSize}
					min={1}
					max={50}
					step={0.1}
					{...props}
				/>
			</BaseControl>
			<BaseControl
				label={__(
					"Background Color",
					"wp-simple-spreadsheet-fetcher-for-google"
				)}
			>
				<TabPanel
					className="wssffg-sidebar-tab-panel"
					activeClass="is-active"
					onSelect={onSelect}
					tabs={[
						{
							name: "default",
							title: __(
								`Default`,
								"wp-simple-spreadsheet-fetcher-for-google"
							),
							className: "tab-table-body-bgcolor-default"
						},
						{
							name: "stripe",
							title: __(
								`Stripe`,
								"wp-simple-spreadsheet-fetcher-for-google"
							),
							className: "tab-table-body-bgcolor-stripe"
						}
					]}
					initialTabName="default"
				>
					{tab => {
						if (tab.name === "default") {
							return applyFilters(
								`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.style.table-body.background-color.default`,
								null,
								props
							);
						} else if (tab.name === "stripe") {
							return applyFilters(
								`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.style.table-body.background-color.stripe`,
								null,
								props
							);
						}
					}}
				</TabPanel>
			</BaseControl>
			<BaseControl
				label={__("Align", "wp-simple-spreadsheet-fetcher-for-google")}
			>
				<AdvancedAlignControl
					schemaName={align}
					initial={props.attributes[align]}
					{...props}
				/>
			</BaseControl>
		</Fragment>
	);
};

addFilter(
	"wp-simple-spreadsheet-fetcher-for-google.fetcher.edit.inspector.style.table-body.background-color.default",
	"wp2s2fg/fetcher",
	(empty, props) => {
		return (
			<div className="wssffg-sidebar-tab-panel-inner">
				<AdvancedColorPalleteControl
					schemaName={"tbBgColor"}
					{...props}
				/>
			</div>
		);
	}
);

addFilter(
	"wp-simple-spreadsheet-fetcher-for-google.fetcher.edit.inspector.style.table-body.background-color.stripe",
	"wp2s2fg/fetcher",
	(empty, props) => {
		return (
			<Fragment>
				<div className="wssffg-sidebar-tab-panel-inner">
					<div className="components-base-control_outer">
						<span className={"components-base-control__label"}>
							{__(
								`Color#1`,
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
						</span>
						<AdvancedColorPalleteControl
							schemaName={"tbBgColor"}
							{...props}
						/>
					</div>
					<div className="components-base-control_outer">
						<span className={"components-base-control__label"}>
							{__(
								`Color#2`,
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
						</span>
						<AdvancedColorPalleteControl
							schemaName={"tbBgColor2"}
							{...props}
						/>
					</div>
				</div>
			</Fragment>
		);
	}
);
