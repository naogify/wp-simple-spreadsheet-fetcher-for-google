const { __ } = wp.i18n;
const { BaseControl } = wp.components;
const { Fragment } = wp.element;
import { TypographyControl } from "./typography-control";
import { AdvancedColorPalleteControl } from "./advanced-color-pallete-control";
import { AdvancedButtonGruopControl } from "./advanced-button-group-control";
import { AdvancedAlignControl } from "./advanced-align-control";
import { AdvancedRangeControl } from "./advanced-range-control";

export const TableStyleControl = props => {
	const { fontUnit, fontSize, bgColor, align } = props;
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
					initial={props.attributes[fontSize]}
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
				<AdvancedColorPalleteControl schemaName={bgColor} {...props} />
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
