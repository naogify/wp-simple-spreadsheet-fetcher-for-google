import { AdvancedToggleControl } from "../advanced-toggle-control";
import { __ } from "@wordpress/i18n";

export const TableWidthFixControl = props => {
	return (
		<AdvancedToggleControl
			initialFixedTable={props.attributes.hasFixedTable}
			{...props}
		/>
	);
};
