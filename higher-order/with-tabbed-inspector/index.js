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
								>
									{tab => {
										let description;
										if (tab.name === "setting") {
											description = (
												<div>これは設定です</div>
											);
										} else if (tab.name === "style") {
											description = (
												<div>これはスタイルです</div>
											);
										} else if (tab.name === "advanced") {
											description = (
												<div>
													これはアドバンスドです
												</div>
											);
										}
										return (
											<Fragment>
												{/* <p>{tab.title}</p> */}
												{description}
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

// const withTabbedInspector = (tabs = null) =>
// 	createHigherOrderComponent(
// 		WrappedComponent =>
// 			class extends Component {
// 				static defaultProps = {
// 					attributes: {},
// 					blockName: ""
// 				};

// 				render() {
// 					const { blockName } = this.props;
// 					const blockStyleControls = applyFilters(
// 						`stackable.${blockName}.edit.inspector.style.block`,
// 						null,
// 						this.props
// 					);

// 					return (
// 						<Fragment>
// 							{applyFilters(
// 								`stackable.${blockName}.edit.inspector.before`,
// 								null,
// 								this.props
// 							)}

// 							<InspectorControls>
// 								<PanelTabs
// 									tabs={tabs}
// 									blockProps={this.props}
// 								/>

// 								<InspectorPanelControls>
// 									{applyFilters(
// 										`stackable.${blockName}.edit.inspector.layout.before`,
// 										null,
// 										this.props
// 									)}
// 									{applyFilters(
// 										`stackable.${blockName}.edit.inspector.layout.after`,
// 										null,
// 										this.props
// 									)}
// 								</InspectorPanelControls>

// 								<InspectorPanelControls tab="style">
// 									{applyFilters(
// 										`stackable.${blockName}.edit.inspector.style.before`,
// 										null,
// 										this.props
// 									)}
// 									{applyFilters(
// 										`stackable.${blockName}.edit.inspector.style.after`,
// 										null,
// 										this.props
// 									)}
// 									{blockStyleControls && (
// 										<div
// 											className="ugb-panel-controls-separator"
// 											role="presentation"
// 										>
// 											— — —
// 										</div>
// 									)}
// 									{blockStyleControls}
// 								</InspectorPanelControls>

// 								<InspectorPanelControls tab="advanced">
// 									{applyFilters(
// 										`stackable.${blockName}.edit.inspector.advanced.before`,
// 										null,
// 										this.props
// 									)}
// 									{applyFilters(
// 										`stackable.${blockName}.edit.inspector.advanced.after`,
// 										null,
// 										this.props
// 									)}
// 								</InspectorPanelControls>
// 							</InspectorControls>

// 							<WrappedComponent {...this.props} />
// 						</Fragment>
// 					);
// 				}
// 			},
// 		"withTabbedInspector"
// 	);

// export default withTabbedInspector;
