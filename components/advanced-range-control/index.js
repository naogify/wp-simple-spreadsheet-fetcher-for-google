const { __ } = wp.i18n;
const { RangeControl } = wp.components;
const { useState } = wp.element;

export const AdvancedRangeControl = props => {
	const { label, schemaName, initial, setAttributes } = props;
	const [columns, setColumns] = useState(initial);

	const onValueChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	return (
		<RangeControl
			label={label}
			value={columns}
			onChange={columns => {
				setColumns(columns);
				onValueChange.bind(null, schemaName, columns)();
			}}
			min={2}
			max={10}
			allowReset={true}
		/>
	);
};
