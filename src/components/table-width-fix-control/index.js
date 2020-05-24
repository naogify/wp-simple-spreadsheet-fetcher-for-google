import { AdvancedToggleControl } from "../advanced-toggle-control";
import { __ } from "@wordpress/i18n";

export const TableWidthFixControl = (props) => {
	return <AdvancedToggleControl schema={"hasFixedTable"} {...props} />;
};
