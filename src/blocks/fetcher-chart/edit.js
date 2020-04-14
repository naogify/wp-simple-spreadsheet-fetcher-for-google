import { drawCharts } from "./drawCharts";
import { applyFilters, addFilter } from "@wordpress/hooks";
import { RenderSettings } from "../../components/fetcher-control";
import { Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";

addFilter(
	"wp-simple-spreadsheet-fetcher-for-google.fetcher-chart.edit.inspector.settings.before",
	"wp2s2fg/fetcher-chart",
	(empty, props) => {
		return <RenderSettings {...props} />;
	}
);

export const edit = (props) => {
	let blockName = props.name.replace(/wp2s2fg\//, "");
	drawCharts(props.attributes);
	return (
		<Fragment>
			<InspectorControls>
				{applyFilters(
					`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.settings.before`,
					null,
					props
				)}
			</InspectorControls>
			<div id="chart_div"></div>
		</Fragment>
	);
};
