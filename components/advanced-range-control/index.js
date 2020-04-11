const { __ } = wp.i18n;
const { RangeControl } = wp.components;
const { useState } = wp.element;

export const AdvancedRangeControl = (props) => {
	const { attributes, setAttributes, label, schemaName, step } = props;
	let { min, max } = props;
	const [columns, setColumns] = useState(attributes[schemaName]);

	//Set default value
	min ? min : (min = 0);
	max ? max : (max = 100);

	return (
		<RangeControl
			label={label}
			value={columns === undefined ? "" : columns}
			onChange={(columns) => {
				setColumns(columns);
				setAttributes({ [schemaName]: columns });
			}}
			min={min}
			max={max}
			step={step}
			allowReset
		/>
	);
};
