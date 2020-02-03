const { ToggleControl } = wp.components;
const { useState } = wp.element;

export const AdvancedToggleControl = props => {
	const { initialFixedTable, label, helpYes, helpNo, setAttributes } = props;
	const [hasFixedTable, setHasFixedTable] = useState(initialFixedTable);

	return (
		<ToggleControl
			label={label}
			help={hasFixedTable ? helpYes : helpNo}
			checked={hasFixedTable}
			onChange={() => {
				setAttributes({ hasFixedTable: !hasFixedTable });
				setHasFixedTable(!hasFixedTable);
			}}
		/>
	);
};
