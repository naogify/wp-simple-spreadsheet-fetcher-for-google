import { AdvancedRangeControl } from "../advanced-range-control";
import { AdvancedPopOverControl } from "../advanced-popover-control";
import { AdvancedSelectControl } from "../advanced-select-control";
import { AdvancedButtonGruopControl } from "../advanced-button-group-control";
import { AdvancedColorPalleteControl } from "../advanced-color-pallete-control";
import { borderStyleTemplate } from "../border-style-template";

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { BaseControl } = wp.components;

export const BorderControl = (props) => {
	const { borderStyle, borderColor } = props;
	const render = (
		<Fragment>
			<BaseControl>
				<AdvancedSelectControl
					label={__(
						"Style",
						"wp-simple-spreadsheet-fetcher-for-google"
					)}
					schemaName={borderStyle}
					initial={props.attributes[borderStyle]}
					data={borderStyleTemplate}
					{...props}
				/>
			</BaseControl>
			<BaseControl>
				<span className={"components-base-control__label"}>
					{__("Color", "wp-simple-spreadsheet-fetcher-for-google")}
				</span>
				<AdvancedColorPalleteControl
					schemaName={borderColor}
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
