/**
 * WordPress dependencies
 */
import { Component, Fragment } from "@wordpress/element";
import { applyFilters } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";

const withTabbedInspector = () =>
	createHigherOrderComponent(
		WrappedComponent =>
			class extends Component {
				render() {
					const { blockName } = this.props;
					const onSelect = tabName => {
						console.log("Helloooooooooo", tabName);
					};
					return (
						<Fragment>
							<InspectorControls>
								<TabPanel
									className="my-tab-panel"
									activeClass="active-tab"
									onSelect={onSelect}
									tabs={[
										{
											name: "setting",
											title: "Setting",
											className: "tab-setting"
										},
										{
											name: "style",
											title: "Style",
											className: "tab-style"
										},
										{
											name: "advanced",
											title: "Advanced",
											className: "tab-advanced"
										}
									]}
									initialTabName="setting"
								>
									{tab => {
										const blockName = "fetcher";
										let hooks;
										if (tab.name === "setting") {
											hooks = (
												<Fragment>
													{applyFilters(
														`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.layout.before`,
														null,
														this.props
													)}
													{applyFilters(
														`wp-simple-spreadsheet-fetcher-for-google.${blockName}.edit.inspector.layout.after`,
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
