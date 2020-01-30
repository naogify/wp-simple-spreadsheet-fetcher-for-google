const { __ } = wp.i18n;
const { RangeControl } = wp.components;
const { useState } = wp.element;

export const AdvancedRangeControl = props => {
	const { label, setAttributes, attributes } = props;
	const [columns, setColumns] = useState(attributes.columns);

	return (
		<RangeControl
			label={label}
			value={columns}
			onChange={columns => {
				setAttributes({ columns: columns });
				setColumns(columns);
			}}
			min={2}
			max={10}
			allowReset={true}
		/>
	);
};
