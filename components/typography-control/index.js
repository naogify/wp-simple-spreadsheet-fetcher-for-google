import { AdvancedRangeControl } from "../advanced-range-control";
import { AdvancedPopOverControl } from "../advanced-popover-control";
import { AdvancedSelectControl } from "../advanced-select-control";
import { AdvancedButtonGruopControl } from "../advanced-button-group-control";
import { AdvancedColorPalleteControl } from "../advanced-color-pallete-control";

import { fontWeights } from "../font-weight";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

export const TypographyControl = props => {
	const render = (
		<Fragment>
			<AdvancedButtonGruopControl
				schemaName={"thFontUnit"}
				initial={props.attributes.thFontUnit}
				data={["px", "em", "rem"]}
				{...props}
			/>
			<AdvancedRangeControl
				label={__("Size", "wp-simple-spreadsheet-fetcher-for-google")}
				schemaName={"thFontSize"}
				initial={props.attributes.thFontSize}
				min={1}
				max={50}
				step={0.1}
				{...props}
			/>
			<AdvancedColorPalleteControl
				schemaName={"thFontColor"}
				{...props}
			/>
			<AdvancedSelectControl
				label={__("Weight", "wp-simple-spreadsheet-fetcher-for-google")}
				schemaName={"thFontWeight"}
				initial={props.attributes.thFontWeight}
				data={fontWeights}
				{...props}
			/>
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
			<AdvancedButtonGruopControl
				schemaName={"thLetterSpaceUnit"}
				initial={props.attributes.thLetterSpaceUnit}
				data={["px", "em", "rem"]}
				{...props}
			/>
			<AdvancedRangeControl
				label={__(
					"Letter Spacing",
					"wp-simple-spreadsheet-fetcher-for-google"
				)}
				schemaName={"thLetterSpace"}
				initial={props.attributes.thLetterSpace}
				min={1}
				max={10}
				step={0.1}
				{...props}
			/>
		</Fragment>
	);
	return (
		<AdvancedPopOverControl
			label={__("Typography", "wp-simple-spreadsheet-fetcher-for-google")}
			schemaName={"isVisible"}
			renderComp={render}
			setAttributes={props.setAttributes}
		/>
	);
};
