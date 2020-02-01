const { __ } = wp.i18n;
const { BaseControl } = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { Component } = wp.element;
import { capitalize } from "../capitalize";

export const UseMultipleControls = (TargetComponent, dataSet, props) => {
	const { attributes } = props;
	const shema = JSON.parse(attributes.columns);
	props.schema = shema;

	const createControl = label => {
		props.initial = shema[label];
		props.key = label;
		console.log(this);

		createHigherOrderComponent(TargetComponent => {
			return class extends Component {
				render() {
					return (
						<BaseControl
							label={__(
								`${capitalize(label)}`,
								"wp-simple-spreadsheet-fetcher-for-google"
							)}
						>
							<TargetComponent {...props} />
						</BaseControl>
					);
				}
			};
		}, "createControl");
	};
	return dataSet.map(createControl[TargetComponent]);
};
