import { AdvancedRangeControl } from "../advanced-range-control";
import { AdvancedPopOverControl } from "../advanced-popover-control";
import { AdvancedSelectControl } from "../advanced-select-control";
import { AdvancedButtonGruopControl } from "../advanced-button-group-control";
import { AdvancedColorPalleteControl } from "../advanced-color-pallete-control";
import { borderStyle } from "../border-style";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { BaseControl } = wp.components;

export const BorderControl = props => {
	const render = (
		<Fragment>
			<BaseControl>
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
			</BaseControl>
			<BaseControl>
				<span className={"components-base-control__label"}>
					{__("Color", "wp-simple-spreadsheet-fetcher-for-google")}
				</span>
				<AdvancedColorPalleteControl
					schemaName={"thBorderColor"}
					{...props}
				/>
			</BaseControl>
			<BaseControl>
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
						customClassName={"wssffg-advanced-button-group_unit"}
						data={["px", "em", "rem"]}
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
		</Fragment>
	);
	return (
		<AdvancedPopOverControl
			label={__("Border", "wp-simple-spreadsheet-fetcher-for-google")}
			renderComp={render}
			setAttributes={props.setAttributes}
		/>
	);
};
