const { __ } = wp.i18n;
const { RangeControl } = wp.components;
const { useState } = wp.element;

export const AdvancedRangeControl = props => {
	const { attributes, setAttributes, label, schemaName, step } = props;
	let { min, max } = props;
	const [columns, setColumns] = useState(attributes[schemaName]);

	const onValueChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	//Set default value
	min ? min : (min = 1);
	max ? max : (max = 100);

	return (
		<RangeControl
			label={label}
			value={columns}
			onChange={value => {
				setColumns(value);
				onValueChange.bind(null, schemaName, value)();
			}}
			min={min}
			max={max}
			step={step}
			allowReset={true}
		/>
	);
};
