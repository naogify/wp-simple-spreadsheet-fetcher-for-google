import { AdvancedToggleControl } from "../advanced-toggle-control";
import { __ } from "@wordpress/i18n";

export const TableWidthFixControl = props => {
	props.initialFixedTable = props.attributes.hasFixedTable;
	props.label = __(
		"Fixed width table cells",
		"wp-simple-spreadsheet-fetcher-for-google"
	);
	props.helpYes = __(
		"Has fixed width.",
		"wp-simple-spreadsheet-fetcher-for-google"
	);
	props.helpNo = __(
		"No fixed width.",
		"wp-simple-spreadsheet-fetcher-for-google"
	);
	return <AdvancedToggleControl {...props} />;
};
