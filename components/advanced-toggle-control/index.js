const { ToggleControl } = wp.components;
const { useState } = wp.element;

export const AdvancedToggleControl = props => {
	const {
		initialFixedBackground,
		label,
		helpYes,
		helpNo,
		setAttributes
	} = props;
	const [hasFixedBackground, setHasFixedBackground] = useState(
		initialFixedBackground
	);

	return (
		<ToggleControl
			label={label}
			help={hasFixedBackground ? helpYes : helpNo}
			checked={hasFixedBackground}
			onChange={() => {
				setAttributes({ hasFixedBackground: !hasFixedBackground });
				setHasFixedBackground(!hasFixedBackground);
			}}
		/>
	);
};
