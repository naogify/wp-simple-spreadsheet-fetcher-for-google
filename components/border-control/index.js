import { AdvancedRangeControl } from "../advanced-range-control";
import { AdvancedPopOverControl } from "../advanced-popover-control";
import { AdvancedSelectControl } from "../advanced-select-control";
import { AdvancedButtonGruopControl } from "../advanced-button-group-control";
import { fontWeights } from "../font-weight";

const { __ } = wp.i18n;
const { Fragment } = wp.element;

export const BorderControl = props => {
	const render = (
		<Fragment>
			<AdvancedButtonGruopControl
				schemaName={"fontUnit"}
				initial={props.attributes.fontUnit}
				{...props}
			/>
			<AdvancedRangeControl
				label={__("Size", "wp-simple-spreadsheet-fetcher-for-google")}
				schemaName={"fontSize"}
				initial={props.attributes.fontSize}
				{...props}
			/>
			<AdvancedSelectControl
				label={__("Weight", "wp-simple-spreadsheet-fetcher-for-google")}
				schemaName={"fontWeight"}
				initial={props.attributes.fontWeight}
				data={fontWeights}
				{...props}
			/>
			<AdvancedRangeControl
				label={__(
					"Line Height",
					"wp-simple-spreadsheet-fetcher-for-google"
				)}
				schemaName={"lineHeight"}
				initial={props.attributes.lineHeight}
				{...props}
			/>
			<AdvancedRangeControl
				label={__(
					"Letter Spacing",
					"wp-simple-spreadsheet-fetcher-for-google"
				)}
				schemaName={"letterSpace"}
				initial={props.attributes.letterSpace}
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
