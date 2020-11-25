/**
 * WordPress dependencies
 */
import { Component, Fragment } from "@wordpress/element";
import { applyFilters } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const tabOptions = (blockName) => {
	if (blockName === "fetcher") {
		return [
			{
				name: "setting",
				title: __(
					`Setting`,
					"wp-simple-spreadsheet-fetcher-for-google"
				),
				className: "tab-setting dashicons-before dashicons-admin-tools",
			},
			{
				name: "style",
				title: __(`Style`, "wp-simple-spreadsheet-fetcher-for-google"),
				className:
					"tab-style dashicons-before dashicons-admin-customizer",
			},
		];
	} else if (blockName === "fetcher-chart") {
		return [
			{
				name: "setting",
				title: __(
					`Setting`,
					"wp-simple-spreadsheet-fetcher-for-google"
				),
				className: "tab-setting dashicons-before dashicons-admin-tools",
			},
			{
				name: "advanced",
				title: __(
					`Customize`,
					"wp-simple-spreadsheet-fetcher-for-google"
				),
				className: "tab-advanced dashicons-before dashicons-plus",
			},
		];
	}
};

const withTabbedInspector = () =>
	createHigherOrderComponent(
		(WrappedComponent) =>
			class extends Component {
				render() {
					let blockName = this.props.name.replace(/wp2s2fg\//, "");
					return (
						<Fragment>
							<InspectorControls>
								<TabPanel
									className="wssffg-sidebar-tab-panel"
									activeClass="is-active"
									tabs={tabOptions(blockName)}
									initialTabName="setting"
								>
									{(tab) => {
										let hooks;
										if (tab.name === "setting") {
											hooks = (
												<Fragment>
													{applyFilters(
														`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.setting.before`,
														//NOTE:nullはフックの引数の仕様上、第一引数を設定する必要がある。なので仮として渡している。
														null,
														this.props
													)}
													{applyFilters(
														`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.setting.after`,
														null,
														this.props
													)}
												</Fragment>
											);
										} else if (tab.name === "style") {
											hooks = (
												<Fragment>
													{applyFilters(
														`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.style.before`,
														null,
														this.props
													)}
													{applyFilters(
														`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.style.after`,
														null,
														this.props
													)}
												</Fragment>
											);
										} else if (tab.name === "advanced") {
											hooks = (
												<Fragment>
													{applyFilters(
														`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.advanced.before`,
														null,
														this.props
													)}
													{applyFilters(
														`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.advanced.after`,
														null,
														this.props
													)}
												</Fragment>
											);
										}
										return (
											<Fragment>
												{applyFilters(
													`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.before`,
													null,
													this.props
												)}
												{hooks}
											</Fragment>
										);
									}}
								</TabPanel>
							</InspectorControls>
							<WrappedComponent {...this.props} />
						</Fragment>
					);
				}
			},
		"withTabbedInspector"
	);

export default withTabbedInspector;
