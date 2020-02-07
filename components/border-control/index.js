import { AdvancedRangeControl } from "../advanced-range-control";
import { AdvancedPopOverControl } from "../advanced-popover-control";
import { AdvancedSelectControl } from "../advanced-select-control";
import { AdvancedButtonGruopControl } from "../advanced-button-group-control";
import { AdvancedColorPalleteControl } from "../advanced-color-pallete-control";
import { borderStyle } from "../border-style";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

export const BorderControl = props => {
	const render = (
		<Fragment>
			<AdvancedSelectControl
				label={__("Style", "wp-simple-spreadsheet-fetcher-for-google")}
				schemaName={"thBorderStyle"}
				initial={props.attributes.thBorderStyle}
				data={borderStyle}
				{...props}
			/>
			<h3>{__("Color", "wp-simple-spreadsheet-fetcher-for-google")}</h3>
			<AdvancedColorPalleteControl
				schemaName={"thBorderColor"}
				{...props}
			/>
			<AdvancedButtonGruopControl
				schemaName={"thBorderUnit"}
				initial={props.attributes.thBorderUnit}
				data={["px", "em", "rem"]}
				{...props}
			/>
			<AdvancedRangeControl
				label={__("Width", "wp-simple-spreadsheet-fetcher-for-google")}
				schemaName={"thBorderWidth"}
				initial={props.attributes.thBorderWidth}
				{...props}
			/>
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
