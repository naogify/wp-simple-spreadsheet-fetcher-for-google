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
											name: "tab1",
											title: "Tab 1",
											className: "tab-one"
										},
										{
											name: "tab2",
											title: "Tab 2",
											className: "tab-two"
										},
										{
											name: "tab2",
											title: "Tab 2",
											className: "tab-two"
										}
									]}
								>
									{tab => {
										<p>{tab.title}</p>;
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
