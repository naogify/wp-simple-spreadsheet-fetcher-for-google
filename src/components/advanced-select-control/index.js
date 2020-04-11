const { __ } = wp.i18n;
const { SelectControl } = wp.components;
const { useState } = wp.element;

export const AdvancedSelectControl = props => {
	const { label, schemaName, initial, data, setAttributes } = props;
	const [value, setValue] = useState(initial);

	const saveValue = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onValueChange = value => {
		setValue(value);
		saveValue.bind(null, schemaName, value)();
	};

	return (
		<SelectControl
			label={label}
			value={value}
			onChange={onValueChange}
			options={data}
		/>
	);
};
