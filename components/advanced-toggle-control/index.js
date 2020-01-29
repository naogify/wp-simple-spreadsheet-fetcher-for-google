const { ToggleControl } = wp.components;
import React, { useState } from "react";

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
