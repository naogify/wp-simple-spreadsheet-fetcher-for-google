import {
	TableEmptyIcon,
	TableFullIcon,
	TableHorizontalIcon,
	TableVerticalIcon
} from "../../assets/svg/table-icons";
import { __ } from "@wordpress/i18n";

export const AdvancedIconControl = props => {
	const { icon } = props;
	if (icon === "table-full") {
		return <TableFullIcon />;
	} else if (icon === "table-empty") {
		return <TableEmptyIcon />;
	} else if (icon === "table-horizontal") {
		return <TableHorizontalIcon />;
	} else if (icon === "table-vertical") {
		return <TableVerticalIcon />;
	} else {
		return __(
			"nothing is specified",
			"wp-simple-spreadsheet-fetcher-for-google"
		);
	}
};
