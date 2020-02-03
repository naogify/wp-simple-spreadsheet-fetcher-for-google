import { AdvancedRangeControl } from "../advanced-range-control";
import { AdvancedPopOverControl } from "../advanced-popover-control";
import { AdvancedSelectControl } from "../advanced-select-control";
import { AdvancedButtonGruopControl } from "../advanced-button-group-control";

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
				{...props}
			/>
			<AdvancedRangeControl
				label={__(
					"Letter Spacing",
					"wp-simple-spreadsheet-fetcher-for-google"
				)}
				schemaName={"thLetterSpace"}
				initial={props.attributes.thLetterSpace}
				{...props}
			/>
		</Fragment>
	);
	return (
		<AdvancedPopOverControl
			label={__("Typography", "wp-simple-spreadsheet-fetcher-for-google")}
			schemaName={"isVisible"}
			initial={props.attributes.isVisible}
			render={render}
			{...props}
		/>
	);
};
