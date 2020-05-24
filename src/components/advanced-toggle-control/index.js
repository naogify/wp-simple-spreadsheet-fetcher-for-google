const { ToggleControl } = wp.components;
const { useState } = wp.element;

export const AdvancedToggleControl = (props) => {
	const { label, helpYes, helpNo, schema, setAttributes, attributes } = props;
	const [value, setValue] = useState(attributes[schema]);

	return (
		<ToggleControl
			label={label}
			help={value ? helpYes : helpNo}
			checked={value}
			onChange={() => {
				setAttributes({ [schema]: !value });
				setValue(!value);
			}}
		/>
	);
};
