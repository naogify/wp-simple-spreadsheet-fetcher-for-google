const { __ } = wp.i18n;
const { RangeControl } = wp.components;
const { useState } = wp.element;

export const AdvancedRangeControl = props => {
	const { setAttributes, label, schemaName, initial, step } = props;
	let { min, max } = props;
	const [columns, setColumns] = useState(initial);

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
			onChange={columns => {
				setColumns(columns);
				onValueChange.bind(null, schemaName, columns)();
			}}
			min={min}
			max={max}
			step={step}
			allowReset={true}
		/>
	);
};
