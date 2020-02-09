import { AdvancedRangeControl } from "../advanced-range-control";
import { AdvancedPopOverControl } from "../advanced-popover-control";
import { AdvancedSelectControl } from "../advanced-select-control";
import { AdvancedButtonGruopControl } from "../advanced-button-group-control";
import { AdvancedColorPalleteControl } from "../advanced-color-pallete-control";

import { fontWeights } from "../font-weight";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { BaseControl } = wp.components;

export const TypographyControl = props => {
	const render = (
		<Fragment>
			<BaseControl>
				<div className="components-base-control_outer">
					<span className={"components-base-control__label"}>
						{__("Size", "wp-simple-spreadsheet-fetcher-for-google")}
					</span>
					<AdvancedButtonGruopControl
						schemaName={"thFontUnit"}
						initial={props.attributes.thFontUnit}
						data={["px", "em", "rem"]}
						customClassName={"wssffg-advanced-button-group_unit"}
						{...props}
					/>
				</div>
				<AdvancedRangeControl
					schemaName={"thFontSize"}
					initial={props.attributes.thFontSize}
					min={1}
					max={50}
					step={0.1}
					{...props}
				/>
			</BaseControl>
			<BaseControl>
				<span className={"components-base-control__label"}>
					{__("Color", "wp-simple-spreadsheet-fetcher-for-google")}
				</span>
				<AdvancedColorPalleteControl
					schemaName={"thFontColor"}
					{...props}
				/>
			</BaseControl>
			<BaseControl>
				<AdvancedSelectControl
					label={__(
						"Weight",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					schemaName={"thFontWeight"}
					initial={props.attributes.thFontWeight}
					data={fontWeights}
					{...props}
				/>
			</BaseControl>
			<BaseControl>
				<AdvancedRangeControl
					label={__(
						"Line Height",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					schemaName={"thLineHeight"}
					initial={props.attributes.thLineHeight}
					min={1}
					max={10}
					step={0.1}
					{...props}
				/>
			</BaseControl>
			<BaseControl>
				<div className="components-base-control_outer">
					<span className={"components-base-control__label"}>
						{__(
							"Letter Spacing",
							"wp-simple-spreadsheet-fetcher-for-google"
						)}
					</span>
					<AdvancedButtonGruopControl
						schemaName={"thLetterSpaceUnit"}
						initial={props.attributes.thLetterSpaceUnit}
						data={["px", "em", "rem"]}
						customClassName={"wssffg-advanced-button-group_unit"}
						{...props}
					/>
				</div>
				<AdvancedRangeControl
					schemaName={"thLetterSpace"}
					initial={props.attributes.thLetterSpace}
					min={1}
					max={10}
					step={0.1}
					{...props}
				/>
			</BaseControl>
		</Fragment>
	);
	return (
		<AdvancedPopOverControl
			label={__("Typography", "wp-simple-spreadsheet-fetcher-for-google")}
			renderComp={render}
			setAttributes={props.setAttributes}
		/>
	);
};
