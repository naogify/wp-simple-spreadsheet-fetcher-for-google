import { __ } from "@wordpress/i18n";
const { PanelBody, BaseControl, TextControl } = wp.components;
import { drawCharts } from "./drawCharts";
import { addFilter } from "@wordpress/hooks";
import { RenderSettings } from "../../components/fetcher-control";
import { Fragment } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { compose } from "@wordpress/compose";
import withTabbedInspector from "../../higher-order/with-tabbed-inspector";
import { AdvancedToggleControl } from "../../components/advanced-toggle-control";

addFilter(
	"wp-simple-spreadsheet-fetcher-for-google.fetcher-chart.edit.inspector.setting.before",
	"wp2s2fg/fetcher-chart",
	(empty, props) => {
		return <RenderSettings {...props} />;
	}
);
addFilter(
	"wp-simple-spreadsheet-fetcher-for-google.fetcher-chart.edit.inspector.advanced.before",
	"wp2s2fg/fetcher-chart",
	(empty, props) => {
		return (
			<Fragment>
				<InspectorControls>
					<Fragment>
						<PanelBody
							title={__(
								"General",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
							initialOpen={true}
						>
							<BaseControl>
								<span
									className={"components-base-control__label"}
								>
									{__(
										"Switch Rows / Columns",
										"wp-simple-spreadsheet-fetcher-for-google"
									)}
								</span>
								<AdvancedToggleControl
									schema={"switchRowColumn"}
									{...props}
								/>
							</BaseControl>
							<BaseControl>
								<span
									className={"components-base-control__label"}
								>
									{__(
										"Hide X-Axis Label",
										"wp-simple-spreadsheet-fetcher-for-google"
									)}
								</span>
								<AdvancedToggleControl
									schema={"hideXAxisLabel"}
									{...props}
								/>
							</BaseControl>
							<BaseControl>
								<span
									className={"components-base-control__label"}
								>
									{__(
										"Hide Data Category Label",
										"wp-simple-spreadsheet-fetcher-for-google"
									)}
								</span>
								<AdvancedToggleControl
									schema={"hideYAxisLabel"}
									{...props}
								/>
							</BaseControl>
						</PanelBody>
						<PanelBody
							title={__(
								"Size",
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
							initialOpen={true}
						>
							<BaseControl>
								<span
									className={"components-base-control__label"}
								>
									{__(
										"Width",
										"wp-simple-spreadsheet-fetcher-for-google"
									)}
								</span>
								<TextControl
									value={props.attributes.chartWidth}
									onChange={(value) => props.setAttributes({ chartWidth: parseInt(value, 10) })}
									type="number"
								/>
							</BaseControl>
							<BaseControl>
								<span
									className={"components-base-control__label"}
								>
									{__(
										"Height",
										"wp-simple-spreadsheet-fetcher-for-google"
									)}
								</span>
								<TextControl
									value={props.attributes.chartHeight}
									onChange={(value) => props.setAttributes({ chartHeight: parseInt(value, 10) })}
									type="number"
								/>
							</BaseControl>
						</PanelBody>
					</Fragment>
				</InspectorControls>
			</Fragment>
		);
	}
);

const edit = (props) => {
	drawCharts(props.attributes);
	return <div id="chart_div"></div>;
};
export default compose(withTabbedInspector())(edit);
